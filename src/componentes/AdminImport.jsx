import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CSVReader from "react-csv-reader";
import {
	collection,
	doc,
	writeBatch,
	addDoc,
	getFirestore,
	getDocs,
} from "firebase/firestore";

function AdminImport() {
	const db = getFirestore();
    const [categorias, setCategorias] = useState(["libres", "+30", "+36", "Super Maxi", "Sanciones" ]); //aca se guarda el array de categorias
	const [data, setData] = useState([]);
	const [tabla, setTabla] = useState([]);
	const [loading, setLoading] = useState(false);
	const batch = writeBatch(db);

	const papaparseOptions = {
		header: true,
		dynamicTyping: true,
		skipEmptyLines: true,
		transformHeader: (header) => header.toLowerCase().replace(/\W/g, "_"),
	};

	const handleForce = (data, fileInfo) => {
		console.log(data);
		setData(data);
	};

	useEffect(() => {
		setTabla(data);
	}, [data]);


    const importToFirestore = () => {
        setLoading(true);
        try {
            const docRef = collection(db, 'Goleadores', 'libres', 'jugador')
            data.forEach((row) => {
                const { nombre, equipo, goles, orden } = row;
                const newDocRef = doc(docRef);
				batch.set(newDocRef, { nombre, equipo, goles, orden });
            });
            batch.commit().then(() => {
                console.log("Se importaron los datos correctamente");
                setLoading(false);
            });
        } catch (error) {
            console.log(error);
            setLoading(true)
        }
    };

	const deleteCollection = async() => {
		setLoading(true);
		try {
			const docRef = collection(db, 'Goleadores', 'libres', 'jugador');
			const docDelete = await getDocs(docRef);
			const batch = writeBatch(db);

			docDelete.forEach((doc) => {
				batch.delete(doc.ref);
			});
			await batch.commit();
			console.log("Se borraron los datos correctamente");
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(true);
		}
	};

	return (
		<div>
			<CSVReader
				cssClass="react-csv-input"
				label="Seleccione el archivo csv que quiera subir...  "
				onFileLoaded={handleForce}
				parserOptions={papaparseOptions}
			/>
			<button onClick={() => importToFirestore()}>{loading? "Cargando tabla" : "Guardar"}</button>
			<button onClick={() => deleteCollection()}>{loading? "Borrando datos" : "Borrar"}</button>
			<table className="table table-sm table-bordered">
				<thead>
					<tr>
						<th>Nombre</th>
						<th>Equipo</th>
						<th>Goles</th>
						<th>Orden</th>
					</tr>
				</thead>
				<tbody>
					{tabla.map((e) => {
						return (
							<tr key={e.orden}>
								<td>{e.nombre}</td>
								<td >{e.equipo}</td>
								<td>{e.goles}</td>
								<td>{e.orden}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default AdminImport;


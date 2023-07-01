import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CSVReader from "react-csv-reader";
import {
	collection,
	doc,
	writeBatch,
	getFirestore,
	getDocs,
} from "firebase/firestore";
import Header from "./Header";

function AdminImport() {
	const db = getFirestore();
    const [categorias, setCategorias] = useState([]); //aca se guarda el array de categorias
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
            const docRef = collection(db, 'Goleadores', `${categorias}`, 'jugador')
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
			const docRef = collection(db, 'Goleadores', `${categorias}`, 'jugador');
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

	const handleCategory = (e) => {
		setCategorias(e.target.value);
	};

	return (
		<DivBackground>
			<Header />
			<DivTitle>
				<h1>Importar tabla de goleadores</h1>
				<A href="admin-torneo"> Importar torneo</A>
			</DivTitle>
				<Select onChange={handleCategory}>
					<option disabled selected>
						Seleccione una categoria
					</option>
					<option value="libres">Libres</option>
					<option value="+30">+30</option>
					<option value="+36">+36</option>
					<option value="Maxi">Maxi</option>

				</Select>
			<Btn onClick={() => deleteCollection()}>
				{loading ? "Borrando datos" : "Borrar datos viejos"}
			</Btn>
			<CSVReader
				cssClass="react-csv-input"
				label="Seleccione el archivo csv que quiera subir...  "
				onFileLoaded={handleForce}
				parserOptions={papaparseOptions}
			/>
			<Btn onClick={() => importToFirestore()}>
				{loading ? "Cargando tabla" : "Guardar"}
			</Btn>
			<DivTable>
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
			</DivTable>
			<DivInfomation>
				<h3>Informacion</h3>
				<p>
					Para importar la tabla de Goleadores, debe tener en cuenta que el
					archivo csv debe tener los siguientes campos: ................
				</p>
				<p>
					Si al cargar el archivo csv, hay algún campo que no se ve en la tabla
					de pre-visualización, es porque no está escrito correctamente el
					nombre de la columna desde excel.
				</p>
			</DivInfomation>
		</DivBackground>
	);
}

export default AdminImport;

const DivBackground = styled.div`
	background-color: #f2f2f2;
	height: 100vh;
    min-height: 100%;
	overflow-y: auto;
`;

const DivTitle = styled.div`
	background-color: #b2b7f0;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 10vh;
	margin-bottom: 50px;
`;

const A = styled.a`
	text-decoration: none;
	color: #fff;
	height: max-content;
	background-color: #7633b9;
	border-radius: 5px;
	padding: 10px;
	position: relative;
	left: 300px;
`;

const Select = styled.select`
	display: block;
	position: relative;
	left: 48%;
	width: 200px;
	height: 30px;
	border-radius: 5px;
	border: none;
	margin: 0 10px;
`;

const DivTable = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 30px auto 10px;
	width: 70%;
`;

const DivInfomation = styled.div`
	margin: 50px auto 10px;
	width: 70%;
	padding: 20px;
	background-color: #fff;
	border-radius: 10px;
	box-shadow: 0 0 10px #999;
`;

const Btn = styled.button`
	background-color: #b2b7f0;
	color: #fff;
	font-weight: 500;
	border: none;
	border-radius: 5px;
	padding: 5px 10px;
	margin: 15px 10px;
	position: relative;
	right: -300px;

	cursor: pointer;
	&:hover {
		background-color: #6a72cf;

	}
`;

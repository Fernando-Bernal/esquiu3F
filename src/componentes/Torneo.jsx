import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import{ getFirestore, collection, doc, getDoc , getDocs } from 'firebase/firestore';

function Torneo() {

    const [tabla, setTabla] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const torneosCollection = collection(db, 'Libres');
        const torneos = getDocs(torneosCollection);
        torneos.then((snapshot) => {
            const torneos = snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            })
            setData(torneos);
        }
        )
        
    }, []);
console.log(data)

    useEffect(() => {
        setTabla(data);
    }, [data]);
    
  return (
    <>
    <div>Torneo</div>
    <table className="table table-sm table-bordered">
          <thead>
            <tr>
              <th>Equipo</th>
              <th>P</th>
              <th>PJ</th>
              <th>PG</th>
              <th>PE</th>
              <th>PP</th>
              <th>GF</th>
              <th>GE</th>
              <th>GD</th>
            </tr>
          </thead>
          <tbody>
            {tabla.map((e) => {
              return (
                <tr key={e.id}>
                  <td>{e.equipo}</td>
                  <td>{e.p}</td>
                  <td>{e.pj}</td>
                  <td>{e.pg}</td>
                  <td>{e.pe}</td>
                  <td>{e.pp}</td>
                  <td>{e.gf}</td>
                  <td>{e.gc}</td>
                  <td>{e.d}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
    </>
  )
}

export default Torneo
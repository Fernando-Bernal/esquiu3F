import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { getTorneoLibres } from "../redux/actions";
function Torneo() {
    const dispatch = useDispatch();
    const data = useSelector((state)=> state.torneolibres)
    const [tabla, setTabla] = useState([]);

    useEffect(() => {
        dispatch(getTorneoLibres());        
    }, []);


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
                  <td>{e.puntos}</td>
                  <td>{e.partidos_jugados}</td>
                  <td>{e.partidos_ganados}</td>
                  <td>{e.partidos_empatados}</td>
                  <td>{e.partidos_perdidos}</td>
                  <td>{e.a_favor}</td>
                  <td>{e.en_contra}</td>
                  <td>{e.diferencia}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
    </>
  )
}

export default Torneo
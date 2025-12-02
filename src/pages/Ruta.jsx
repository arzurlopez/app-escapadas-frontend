import { useParams, Link } from "react-router-dom"
import escapadas from "../assets/data/escapadas.json"
export default function Ruta() {
    const {id} = useParams()
    const escapada= escapadas[id]
  return (
    <>
    <div className="escapada">
        <h2>{escapada.description}</h2>
             <p>{escapada.fecha}</p>
             <figure>
             <img src={escapada.original} alt="" />
             </figure>
             <div>
                {escapada.observaciones}
             </div>

         DetalleRuta:  {id}
    </div>
    </>
  )
}
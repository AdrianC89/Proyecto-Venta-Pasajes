//aca va el useeffect y debemos instalar libreria cors

import BotonSoy from "./BotonSoy";
import './Bienvenida.css'

export default function Bienvenida(){
    return (
        <div className="contenedorBienvenida">
            <h2 className="tituloBienvenida">Te damos la bienvenida a viajar en ruta 3!</h2>
            <div className="contenedorBotones">
                <BotonSoy 
                nombre="ViajesEnBus " color="orange" ruta="./formulario.jsx" />
                <BotonSoy 
                nombre=" " color="yellow" ruta="/"/>
            </div>
        </div>
    )
}
//aca va el useeffect y debemos instalar libreria cors

import Botones from "./Botones";
import './bienvenida.css';
{/*import Iniciarsesion from './IniciarSesion.jsx';
import Destinos from './Destinos.jsx'*/}

export default function Bienvenida(){
    return (
        <header className="contenedorBienvenida">
            <h2 className="tituloBienvenida">¡Te Damos la Bienvenida!</h2>
            <div className="contenedorBotones">
                <Botones className="boton" texto ="Inicio Sesión " ruta= "./IniciarSesion.jsx" />
                <Botones className="boton" texto ="Destinos" ruta= "/Destinos.jsx"/>
            </div>
        </header>
    )
}
import "./Form.css"
import {useState} from 'react';
function Formulario(){
    const [nombre, setNombre] = useState();
    const [usuario, setUsuario] = useState();
    const [correo, setCorreo] = useState();
    const [telefono, setTelefono] = useState();
    return(
        <main className="body-form">
            <h1>Llena este formulario y te contactamos</h1>
        <form>
            <label>Nombre</label>
            
            <input
            estado={nombre}
			cambiarEstado={setNombre} 
            type="text"
            name="nombre"
            placeholder="colectivo, fundación o colegio"
            ></input>
            <label>Representante</label>
            <input 
            estado={usuario}
            cambiarEstado={setUsuario}
            type="text"
            name="representante"
            placeholder="Escribe tu nombre"
            ></input>
            <label>Correo</label>
            <input 
            type="text"
            estado={correo}
            cambiarEstado={setCorreo}
            name="correo"
            placeholder="Correo electrónico"
            ></input>
            <label>Número de télefono</label>
            <input 
            type="number"
            estado={telefono}
            cambiarEstado={setTelefono}
            name="telefono"
            placeholder="Escribe un número de contacto"
            ></input>
            <label>Mensaje</label>
            <textarea rows="4" cols="50"   name="mensaje">
            Déjanos tu mensaje
            </textarea>
			<label className="check">
				Recuerda que al enviar el formulario aceptas los Terminos y Condiciones
			</label>
            <button type="submit">Enviar</button>
        </form>
        </main>
    );
}
export default Formulario
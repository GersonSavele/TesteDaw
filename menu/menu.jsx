import { NavLink } from "react-router-dom";
import Usercontext from "../../Contexts";
import { useContext } from "react";
import "./style.css"



const Menu=()=>{

    const {user} =useContext(Usercontext)
    return (
                //Roteamento Avançado
        <div className="container-link">
            <button className="user">{user}</button>
            <br />
            <br />
            <NavLink to="/"> Inicio</NavLink>
            <br />
            <NavLink to="/Contacto">Contacto</NavLink>
            <br />
            <NavLink to="/Servico">Serviços</NavLink>
            <br />
            <NavLink to="/Acerca">Acerca</NavLink>
            
            
            
        </div>  
    )
}
export default Menu;
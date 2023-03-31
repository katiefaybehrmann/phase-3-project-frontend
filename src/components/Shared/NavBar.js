import React from "react";
import { NavLink, useHistory } from "react-router-dom";

function NavBar(){
 
    return(
        <div>
            <NavLink to='/genres'>Genres</NavLink>
            <br/>
            <NavLink to='/records'>Records</NavLink>
        </div>
    )
}

export default NavBar
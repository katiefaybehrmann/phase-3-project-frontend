import React from "react";
import { NavLink } from 'react-router-dom';

function NavBar(){
 
    return(
        <div>
            <NavLink to='/genres'>Genres</NavLink>
            <NavLink to='/records'>Records</NavLink>
        </div>
    )
}

export default NavBar
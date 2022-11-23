import {NavLink} from "react-router-dom";

export default function NavigationBar (){

    return(

        <div>
            <NavLink to={"/"}>Hello</NavLink>
            <NavLink to={"/todos"}>Todos</NavLink>
        </div>
    )
}
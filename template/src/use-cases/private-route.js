import React from "react";
import {Navigate} from "react-router-dom";
import {useAuth, isLoggedIn} from "./index";

export function PrivateRoute(props) {
    const auth = useAuth(props);
    return isLoggedIn() && auth ? props.children : <Navigate to={'/login'}/>
}
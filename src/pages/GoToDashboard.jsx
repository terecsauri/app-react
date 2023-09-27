import { useNavigate } from "react-router-dom";
import { UseRellenarDatosUsername } from "./UseRellenarDatosUsername"
import { RellenarDatosPassword } from "./RellenarDatosPassword"
import { useEffect } from "react";

export const GoToDashboard = () => {

    let navigate = useNavigate();

    useEffect (() => {

        let nuevoUser = UseRellenarDatosUsername.username;
        let nuevaPass = RellenarDatosPassword.password;

        if (nuevoUser === "zelda" && nuevaPass === "lightdragon") {
        
            navigate("/dashboard");
            console.log("oleeeeee");
        } else {
            console.log("patata");
        }

    }, [navigate])

    

};
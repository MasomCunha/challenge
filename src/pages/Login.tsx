import React, { useState, useEffect } from "react";
import Input from "../components/input";
import Button from "../components/button";
//import { useAuth0 } from "@auth0/auth0-react";
import { isEmailValid } from "../utils/validations";
import { saveLocalStorage } from "../utils/genericFunctions";
import { LOCAL_STORAGE_EMAIL } from "../utils/contants";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { login } from "../redux/actions/authAction";
import { useNavigate } from "react-router-dom";
import "../style/login.css"

export default function Login() {

   // const { loginWithRedirect, user, isAuthenticated, isLoading } = useAuth0();
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const [userEmail, setUserEmail] = useState<string>("");
    const [hasErrorEmail, setHasErrorEmail] = useState<boolean>(false);

    useEffect(() => {
        let email: string | null = localStorage.getItem(LOCAL_STORAGE_EMAIL);

        if (email !== null) {
            setUserEmail(email)
        }

    }, [])


    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserEmail(e.target.value)
    }

    const handleClick = () => {

        if (isEmailValid(userEmail)) {
           // loginWithRedirect()
            setHasErrorEmail(false);
            saveLocalStorage(LOCAL_STORAGE_EMAIL, userEmail);
            dispatch(login(userEmail))
            navigate("/home") 
        } else {
            setHasErrorEmail(true)
        }

    }


    return (
        <div className="loginPage">
            <div className="loginCard">
                <h1 className="loginCardTitle">Login</h1>
                <div className="inputContainer">
                <Input
                    className="inputLogin"
                    placeholder="Insert email"
                    hasError={hasErrorEmail}
                    errorMessage="Invalid email"
                    value={userEmail}
                    onChange={handleChangeEmail}
                />
                <Button className="buttonSubmitLogin" title="Submit" handleClick={handleClick} />
                </div>
            </div>
        </div>
    )
}
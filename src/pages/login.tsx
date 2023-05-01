import React from "react";
import Button from "../element/button";
import { css } from "../styles/styles";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react"; 

const Cookie = require("js-cookie");

interface Props {};

export default function Login(props: Props) {
    const [emailInput, setEmailInput] = useState("");
    const handleEmailInputChange = (e: any) => {setEmailInput(e.target.value)};
    const [passwordInput, setPasswordInput] = useState("");
    const handlePasswordInputChange = (e: any) => {setPasswordInput(e.target.value)};

    const [isError, setIsError] = useState(false);
    const [error, setError] = useState("");

    const [_, set_] = useState(false);

    useEffect(() => {
        axios.post(`http://127.0.0.1:3013/api/auth/jwtToken`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': Cookie.get('token') ?? undefined,
            }
        })
        .then((res: any) => {
            if(res.data.tokenStatus === true){
                    window.location.replace("/");
            }
        })
        .catch((err: any) => {
            setIsError(true);
            setError(err.response.data.message);
        })
    }, [_]);


    const handleButtonOnClick = async () => {
        await axios.post(`http://127.0.0.1:3013/api/auth/login`, {
            email: emailInput,
            password: passwordInput,
        })
        .then((res: any) => {
            Cookie.set('token', res.data.token);
            set_(true);
        })
        .catch((err: any) => {
            setError(err.response);
            setIsError(true);
            setPasswordInput("");
        })
    }


    const navigate = useNavigate(); // Get the history object from React Router

    const handleSignUpClick = () => {
        // Logic to navigate to the sign up page
        // You can replace this with your own implementation
        navigate("/signup"); // Use history.push() to navigate to another page
    };
    


    return (
        <div className={styles.body()}>
            <div className={styles.container()}>
                <div className={styles.login()}>Log In</div>
                <div className={styles.textbox()}>
                    <input type="email" className={styles.textfield()} onChange={handleEmailInputChange} placeholder="Email Adress" />
                    <input type="password" className={styles.textfield()} onChange={handlePasswordInputChange} placeholder="Password" />
                </div>
                <Button style={{
                    width: 432,
                    height: 56,
                    borderRadius: 4,
                    backgroundColor: "#26333B",
                    color: "white",
                    fontSize: 20,
                    fontWeight: "bold",
                }} onClick={handleButtonOnClick}>Log In</Button>
                <div className={styles.acc()}>Don't have an account?</div>
                <Button style={{
                    width: 432,
                    height: 56,
                    borderRadius: 4,
                    border: '3px solid',
                    borderColor: "#26333B",
                    backgroundColor: 'transparent',
                    color: "white",
                    fontSize: 20,
                    fontWeight: "bold",
                }} onClick={handleSignUpClick}>Sign up</Button>
            </div>
        </div>
    )
}


const styles = {
    body: css({
        backgroundColor: "#3E5461",
        height: '100vh',
        paddingTop: 70,
        fontFamily: 'Helvetica'
    }),
    container: css({
        width: 432,
        height: 512,
        alignItems: 'center',
        margin: '0 auto',
    }),
    login: css({
        width: 432,
        fontSize: 48,
        fontWeight: "bold",
        color: "white",
        marginBottom: 72,
        textAlign: "center",
    }),
    textbox: css({
        display: "block",
        marginBottom: 34
    }),
    textfield: css({
        width: 432,
        height: 54,
        borderRadius: 4,
        border: "2px solid",
        borderColor: "#26333B",
        marginBottom: 20,
        padding: 20
    }),
    acc: css({
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        height: 30,
        marginTop: 40,
    })
}


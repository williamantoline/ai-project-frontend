import React, { useState } from "react";
import Button from "../element/button";
import { css } from "../styles/styles";
import axios from "axios";
import { endpoint } from "../config";
import { useNavigate } from "react-router-dom"; 
const Cookie = require("js-cookie");

interface Props {};

export default function Login(props: Props) {
    const navigate = useNavigate(); // Get the history object from React Router

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailOnChange = (e: any) => {
        setEmail(e.target.value);
    }
    const handlePasswordOnChange = (e: any) => {
        setPassword(e.target.value);
    }
    const handleButtonOnClick = () => {
        axios.post(`${endpoint}/api/auth/login`, {
            email: email,
            password: password,

        }).then((res) => {
            Cookie.set("token", res.data.token);
            alert("Login success");
            navigate('/');

        }).catch((err) => {
            alert(err.response.data.message);
            setPassword("");
        })
    }


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
                    <input value={email} onChange={handleEmailOnChange} type="email" className={styles.textfield()} placeholder="Email Adress" />
                    <input value={password} onChange={handlePasswordOnChange} type="password" className={styles.textfield()} placeholder="Password" />
                </div>
                <Button style={{
                    width: 432,
                    height: 56,
                    borderRadius: 4,
                    backgroundColor: "#26333B",
                    color: "white",
                    fontSize: 20,
                    fontWeight: "bold",
                }}
                onClick={handleButtonOnClick}>Log In</Button>
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


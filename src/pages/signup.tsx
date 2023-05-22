import React, { useState } from "react";
import Button from "../element/button";
import { useNavigate } from "react-router-dom"; 
import { css } from "../styles/styles";
import axios from "axios";
import { endpoint } from "../config";

interface Props {};

export default function SignUp(props: Props) {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleEmailOnChange = (e: any) => {
        setEmail(e.target.value);
    }
    const handleUsernameOnChange = (e: any) => {
        setUsername(e.target.value);
    }
    const handlePasswordOnChange = (e: any) => {
        setPassword(e.target.value);
    }
    const handleCPasswordOnChange = (e: any) => {
        setCPassword(e.target.value);
    }

    const handleButtonOnClick = () => {
        if (password !== cpassword) {
            alert("Password and Confirm Password should be the same!");
            setPassword("");
            setCPassword("");
            return;
        }
        setEmailError("");
        setUsernameError("");
        setPasswordError("");
        axios.post(`${endpoint}/api/auth/register`, {
            email: email,
            name: username,
            password: password,
        }).then((res) => {
            alert(res.data);
            navigate("/login");
        }).catch((err) => {
            let statusCode = err.response.status;
            if (statusCode === 400) {
                let errors = err.response.data.errors;
                errors.forEach((error: any) => {
                    if (error.param === 'email') {
                        setEmailError(error.msg);
                    } else if (error.param === 'name') {
                        setUsernameError(error.msg);
                    } else if (error.param === 'password') {
                        setPasswordError(error.msg);
                    }
                });
            }
        })
    }

    const navigate = useNavigate(); // Get the history object from React Router

    const handlelogInClick = () => {
        // Logic to navigate to the sign up page
        // You can replace this with your own implementation
        navigate("/login"); // Use history.push() to navigate to another page
    };
    return (
        <div className={styles.body()}>
            <div className={styles.container()}>
                <div className={styles.signup()}>Sign Up</div>
                <div className={styles.textbox()}>
                    <p className={styles.errorMessage()}>{emailError}</p>
                    <input value={email} onChange={handleEmailOnChange} type="email" className={styles.textfield()} placeholder="Email Adress" />
                    <p className={styles.errorMessage()}>{usernameError}</p>
                    <input value={username} onChange={handleUsernameOnChange} type="text" className={styles.textfield()} placeholder="Username" />
                    <p className={styles.errorMessage()}>{passwordError}</p>
                    <input value={password} onChange={handlePasswordOnChange} type="password" className={styles.textfield()} placeholder="Password" />
                    <input value={cpassword} onChange={handleCPasswordOnChange} type="password" className={styles.textfield()} placeholder="Confirm Password" />
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
                onClick={handleButtonOnClick}
                >Sign Up</Button>
                <div className={styles.acc()}>Already have an account?</div>
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
                }}onClick={handlelogInClick}>Log In</Button>
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
        alignItems: 'center',
        margin: '0 auto',
    }),
    errorMessage: css({
        color: "white",
        backgroundColor: "red",
    }),
    signup: css({
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
        marginBottom: 16,
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


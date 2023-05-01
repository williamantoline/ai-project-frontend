import React from "react";
import Button from "../element/button";
import { useNavigate } from "react-router-dom"; 
import { css } from "../styles/styles";
import axios from "axios";
import { useEffect,useState } from "react";

const Cookie = require("js-cookie");


interface Props {};

export default function SignUp(props: Props) {
    const [nameInput, setNameInput] = useState("");
    const handleNameInputChange = (e: any) => {setNameInput(e.target.value)};
    const [emailInput, setEmailInput] = useState("");
    const handleEmailInputChange = (e: any) => {setEmailInput(e.target.value)};
    const [passwordInput, setPasswordInput] = useState("");
    const handlePasswordInputChange = (e: any) => {setPasswordInput(e.target.value)};
    const [cPasswordInput, setCPasswordInput] = useState("");
    const handleCPasswordInputChange = (e: any) => {setCPasswordInput(e.target.value)};

    useEffect(() => {
        axios.post(`http://127.0.0.1:3013/api/auth/jwtToken`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': Cookie.get('token'),
            }
        })
        .then((res: any)=>{
            if(res.data.tokenStatus === true){
                window.location.replace("/");
            }
        })
    }, []);

    const handleButtonOnClick = async () => {
        if (passwordInput !== cPasswordInput) {
            alert("Password and password confirmation do not match!");
        }

        await axios.post(`http://127.0.0.1:3013/api/auth/register`, {
            name: nameInput,
            email: emailInput,
            password: passwordInput,
        })
        .then((res: any) => {
            Cookie.set('token', res.data.token);
            window.location.replace("/login");
        })
        .catch((err: any) => {
            setPasswordInput("");
            setCPasswordInput("");
        })
    }

    const navigate = useNavigate();

    const handleLogInClick = () => {
        // Logic to navigate to the sign up page
        // You can replace this with your own implementation
        navigate("/login"); // Use history.push() to navigate to another page
    };

    return (
        <div className={styles.body()}>
            <div className={styles.container()}>
                <div className={styles.signup()}>Sign Up</div>
                <div className={styles.textbox()}>
                    <input type="email" className={styles.textfield()} onChange={handleEmailInputChange} placeholder="Email Adress" />
                    <input type="text" className={styles.textfield()} onChange={handleNameInputChange} placeholder="Username" />
                    <input type="password" className={styles.textfield()} onChange={handlePasswordInputChange} placeholder="Password" />
                    <input type="password" className={styles.textfield()} onChange={handleCPasswordInputChange} placeholder="Confirm Password" />
                </div>
                <Button style={{
                    width: 432,
                    height: 56,
                    borderRadius: 4,
                    backgroundColor: "#26333B",
                    color: "white",
                    fontSize: 20,
                    fontWeight: "bold",
                }}onClick={handleButtonOnClick}>Sign Up</Button>
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
                }}onClick={handleLogInClick}>Log In</Button>
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


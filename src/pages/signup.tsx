import React from "react";
import Button from "../element/button";
import { useNavigate } from "react-router-dom"; 
import { css } from "../styles/styles";

interface Props {};

export default function SignUp(props: Props) {
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
                    <input type="email" className={styles.textfield()} placeholder="Email Adress" />
                    <input type="password" className={styles.textfield()} placeholder="Username" />
                    <input type="password" className={styles.textfield()} placeholder="Password" />
                    <input type="password" className={styles.textfield()} placeholder="Confirm Password" />
                </div>
                <Button style={{
                    width: 432,
                    height: 56,
                    borderRadius: 4,
                    backgroundColor: "#26333B",
                    color: "white",
                    fontSize: 20,
                    fontWeight: "bold",
                }}>Sign Up</Button>
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


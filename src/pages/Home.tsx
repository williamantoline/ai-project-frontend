import React from "react";
import Button from "../element/button";
import { css } from "../styles/styles";
import { useNavigate } from "react-router-dom"; 

interface Props {};

export default function Home(props: Props) {
    const navigate = useNavigate(); // Get the history object from React Router

    const handleSignUpClick = () => {
        // Logic to navigate to the sign up page
        // You can replace this with your own implementation
        navigate("/signup"); // Use history.push() to navigate to another page
    };

    const handlelogInClick = () => {
        // Logic to navigate to the sign up page
        // You can replace this with your own implementation
        navigate("/login"); // Use history.push() to navigate to another page
    };

    return (
        <div className={styles.body()}>
            <div className={styles.title()}>Tic Tac Toe</div>
            <div className={styles.container()}>
                <Button style={{
                    width: 266,
                    height: 56,
                    borderRadius: 4,
                    backgroundColor: "#26333B",
                    color: "white",
                    fontSize: 20,
                    fontWeight: "bold",
                    marginBottom: 24
                }}>Play</Button>
                <Button style={{
                    width: 266,
                    height: 56,
                    borderRadius: 4,
                    backgroundColor: "#26333B",
                    color: "white",
                    fontSize: 20,
                    fontWeight: "bold",
                    marginBottom: 24
                }}>Play as Guest</Button>
                <Button style={{
                    width: 266,
                    height: 56,
                    borderRadius: 4,
                    backgroundColor: "#26333B",
                    color: "white",
                    fontSize: 20,
                    fontWeight: "bold",
                    marginBottom: 24
                }} onClick={handlelogInClick}>Log In</Button>
                <Button style={{
                    width: 266,
                    height: 56,
                    borderRadius: 4,
                    backgroundColor: "#26333B",
                    color: "white",
                    fontSize: 20,
                    fontWeight: "bold",
                    marginBottom: 48
                }}>Leaderboard</Button>
                <div className={styles.acc()}>New here?</div>
                <Button style={{
                    width: 266,
                    height: 56,
                    borderRadius: 4,
                    backgroundColor: "#26333B",
                    color: "white",
                    fontSize: 20,
                    fontWeight: "bold",
                }} onClick={handleSignUpClick}>Sign up</Button>
            </div>
        </div>
    );
}

const styles = {
    body: css({
        backgroundColor: "#3E5461",
        height: '100vh',
        paddingTop: 108,
        fontFamily: 'Helvetica'
    }),
    container: css({
        width: 266,
        height: 512,
        alignItems: 'center',
        margin: '0 auto',
        marginTop: 48
    }),
    title: css({
        width: 480,
        fontSize: 88,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        margin: '0 auto',
    }),
    acc: css({
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        height: 30,
    })
}


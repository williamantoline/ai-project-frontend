import React, { useEffect, useState } from "react";
import Button from "../element/button";
import { css } from "../styles/styles";
import { useNavigate } from "react-router-dom"; 
import Group24 from "../svg/group24";
import Group28 from "../svg/group28";
import Group29 from "../svg/group29";
import Group30 from "../svg/group30";
import axios from "axios";
import { endpoint } from "../config";
const Cookie = require("js-cookie");

interface Props {};

export default function Home(props: Props) {

    const navigate = useNavigate(); // Get the history object from React Router

    const [isLogged, setIsLogged] = useState(false);
    const [_, set_] = useState("");

    useEffect(() => {
        axios.get(`${endpoint}/api/auth/auth`, {
          headers: {
            'Authorization': Cookie.get('token'),
          }
        })
        .then((res) => {
          setIsLogged(true);
        })
        .catch((err) => {
          setIsLogged(false);
        })
      }, [_]);

    const handlegameClick = () => {
        navigate("/game");
    };

    const handleSignUpClick = () => {
        navigate("/signup");
    };

    const handlelogInClick = () => {
        navigate("/login");
    };

    const handleleaderboardClick = () => {
        navigate("/leaderboard");
    };

    const handleLogoutClick = () => {
        Cookie.set("token", null);
        set_("0");
    };

    return (
        <div className={styles.body()}>
            <div className={styles.container()}>
                <div className={styles.boxwrap()}>
                    <div className={styles.boxtop()}>
                        <Group24 />
                    </div>
                    <div className={styles.boxbot()}>
                        <Group30 />
                    </div>
                </div>
                <div className = {styles.main()}>
                    <div className={styles.title()}>Tic Tac Toe</div>
                    
                    <div className={styles.containersec()}>
                        {
                            isLogged ? 
                            <Button style={{
                                width: 266,
                                height: 56,
                                borderRadius: 4,
                                backgroundColor: "#26333B",
                                color: "white",
                                fontSize: 20,
                                fontWeight: "bold",
                                marginBottom: 24
                            }} onClick={handlegameClick}>Play</Button>
                            :
                            <Button disabled style={{
                                width: 266,
                                height: 56,
                                borderRadius: 4,
                                backgroundColor: "#567486",
                                color: "#8C8C8C",
                                fontSize: 20,
                                fontWeight: "bold",
                                marginBottom: 24
                            }}>Play</Button>
                        }
                        
                        <Button style={{
                            width: 266,
                            height: 56,
                            borderRadius: 4,
                            backgroundColor: isLogged ? "#567486" : "#26333B",
                            color: isLogged ? "#8C8C8C" : "white" ,
                            fontSize: 20,
                            fontWeight: "bold",
                            marginBottom: 24
                        }} onClick={isLogged ? () => {} : handlegameClick}>Play as Guest</Button>
                        {
                            isLogged
                            ?
                            <Button style={{
                                width: 266,
                                height: 56,
                                borderRadius: 4,
                                backgroundColor: "#26333B",
                                color: "white",
                                fontSize: 20,
                                fontWeight: "bold",
                                marginBottom: 24
                            }} onClick={handleLogoutClick}>Log Out</Button>
                            :
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
                        }
                        
                        <Button style={{
                            width: 266,
                            height: 56,
                            borderRadius: 4,
                            backgroundColor: "#26333B",
                            color: "white",
                            fontSize: 20,
                            fontWeight: "bold",
                            marginBottom: 48
                        }} onClick={handleleaderboardClick}>Leaderboard</Button>
                        {
                            isLogged
                            ?
                            <></>
                            :
                            <>
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
                            </>
                        }
                        
                    </div>
                </div>
                <div className={styles.boxwrap()}>
                    <div className={styles.boxtop()}>
                        <Group28 />
                    </div>
                    <div className={styles.boxbot()}>
                        <Group29 />
                    </div>
                </div>
            </div> 
        </div>
    );
}

const styles = {
    body: css({
        backgroundColor: "#3E5461",
        height: '100vh',
        fontFamily: 'Helvetica',
        display: 'flex',
        margin: '0 auto',
        paddingTop: 50
    }),
    container: css({
        margin: '0 auto',
        display: 'flex',
    }),
    containersec: css({
        width: 266,
        margin: '0 auto',
    }),
    main: css({
        display: "block",
        marginLeft: 100,
        marginRight: 100,
        marginTop: 70,
    }),
    title: css({
        width: 480,
        fontSize: 88,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        margin: '0 auto',
        marginBottom: 67
    }),
    acc: css({
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        height: 30,
    }),
    boxwrap: css({
        display: "block",
        marginLeft: 100,
        marginRight: 100,
    }),
    boxtop: css({
        marginBottom: 100,
    }),
    boxbot: css({
        marginTop: 200,
    })
}


import React from "react";
import Button from "../element/button";
import { css } from "../styles/styles";
import { useNavigate } from "react-router-dom"; 
import Group24 from "../svg/group24";
import Group28 from "../svg/group28";
import Group29 from "../svg/group29";
import Group30 from "../svg/group30";

interface Props {};

export default function Leaderboard(props: Props) {
    const navigate = useNavigate(); // Get the history object from React Router

    const handleBackClick = () => {
        navigate("/"); 
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
                    <div className={styles.title()}>Leaderboard</div>
                    <div className={styles.containersec()}>
                        <div  className={styles.score()}>
                            <table className={styles.table()}>
                                <thead style={{fontWeight: "bold"}}>
                                    <td>#</td>
                                    <td>Username</td>
                                    <td>Scores</td>
                                </thead>
                                <tr>
                                    <td>1</td>
                                    <td>onlyhuman</td>
                                    <td>124</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>onlyhuman</td>
                                    <td>124</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>onlyhuman</td>
                                    <td>124</td>
                                </tr>
                            </table>
                        </div>
                        <Button style={{
                            width: 266,
                            height: 56,
                            borderRadius: 4,
                            backgroundColor: "#26333B",
                            color: "white",
                            fontSize: 20,
                            fontWeight: "bold",
                        }} onClick={handleBackClick}>Back</Button>
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
        width: 548,
        margin: '0 auto',
        textAlign: "center"
    }),
    main: css({
        display: "block",
        marginLeft: 66,
        marginRight: 66,
        marginTop: 20,
    }),
    score: css({
        width: 547,
        backgroundColor: '#567486',
        margin: 0,
    }),
    title: css({
        width: 480,
        fontSize: 64,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        margin: '0 auto',
        marginBottom: 60
    }),
    acc: css({
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        height: 30,
    }),
    table: css({
        alignItems: "center",
        color: "White",
        fontSize: 20,
        fontFamily: 'Helvetica',
        margin: '0 auto',
        width: 547,
        padding: 7,
        marginBottom: 60,
        "& td, & th": { 
        padding: "0 10px", 
    }
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


import React, { useState } from "react";
import { css } from "../styles/styles";
import Ellipse from "../svg/ellipse";
import Vector from "../svg/vector";

import { useNavigate } from "react-router-dom";

interface Props {};

export default function Game(props: Props) {
    const [board, setBoard] = useState(Array(9).fill(""));
    const [turn, setTurn] = useState("X");
    const [winner, setWinner] = useState("");
    const navigate = useNavigate()

    const handleBoxClick = (index: number) => {
        if (board[index] === "" && winner === "") {
            const newBoard = [...board];
            newBoard[index] = turn;
            setBoard(newBoard);
            setTurn(turn === "X" ? "O" : "X");
            checkWinner(newBoard);
        }
    };

    const checkWinner = (board: string[]) => {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let i = 0; i < winningCombinations.length; i++) {
            const [a, b, c] = winningCombinations[i];
            if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
                setWinner(board[a]);
                navigate(`/${board[a]}`);
                break;
            }
        }
    };

    return (
        <div className={styles.container()}>
            <div className={styles.textbox()}>
                <div className={styles.title()}>
                    Tic Tac Toe
                </div>
                <div className={styles.level()}>
                    Level: Easy
                </div>
            
            <div className={styles.centerbox()}>
                {board.map((box, index) => (
                    <div
                        key={index}
                        className={styles.box()}
                        onClick={() => handleBoxClick(index)}
                    >
                        {box === "X" && <Vector />}
                        {box === "O" && <Ellipse />}
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
}


const styles = {
    container: css({
        margin: 0,
        backgroundColor: '#3E5461',
        height: '100vh',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }),
    textbox: css({
        display: "block"
    }),
    title: css({
        fontSize: 64,
        fontFamily: "Helvetica",
        color: "white",
        fontWeight: "bold",
    }),
    level: css({
        fontSize: 20,
        fontFamily: "Helvetica",
        color: "white",
        fontWeight: "bold",
    }),
    centerbox: css({
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: 40,
        width: 300,
        height: 300,
    }),
    box: css({
        width: 90,
        height: 90,
        backgroundColor: '#567486',
        borderRadius: 10,
        margin: 4,
        padding: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 48,
        color: 'white',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        '&:hover': {
            backgroundColor: '#546E7A',
        },
    }),
    bottom: css({
        color: 'white',
        fontSize: 36,
        marginTop: 20
    }),
}

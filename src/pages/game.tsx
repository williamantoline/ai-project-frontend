import React, { useState } from "react";
import { css } from "../styles/styles";

import { useNavigate } from "react-router-dom";
import Button from "../element/button";
import Box from "./box";
import { enckey, endpoint } from "../config";
import axios from "axios";

interface Props {};


export default function Game(props: Props) {
    const huPlayer = 'X';
    const aiPlayer = 'O';
    
    const origBoard: any[] = [0,1,2,3,4,5,6,7,8];
    
    const [isPlaying, setIsPlaying] = useState(false);
    const [board, setBoard] = useState(origBoard);
    const [turn, setTurn] = useState("X");
    const [winner, setWinner] = useState("");
    const [mode, setMode] = useState("easy");
    let [turnNo, setTurnNo] = useState(0);
    const [gameOver, setGameOver] = useState(true);
    const navigate = useNavigate();
    const CryptoJS = require("crypto-js");
    const Cookie = require("js-cookie");
    
    const determineScore = (s: any) => {
        if (mode === "hard") {
            s = s*2+1;
        }
        return s;
    }

    const sendScore = (s: any) => {
        let actualScore = determineScore(s);
        let userToken = Cookie.get("token");
        if (userToken === undefined) return;
        let data = Cookie.get("token") + "--" + actualScore.toString() + "--" + (new Date()).getTime();
        let encrypted = CryptoJS.AES.encrypt(data, enckey).toString();

        axios.put(`${endpoint}/api/score`, {
            data: encrypted,
        }, {
            headers: {
                'Authorization': Cookie.get("token"),
            }
        }).then((res: any) => {
        }).catch((err: any) => {
            alert("Internal server error!");
        });
    }


    const handleOnChangeDif = (e: any) => {
        setMode(e.target.value);
    }
    
    const handlePlayButton = () => {
        setIsPlaying(true);
        setGameOver(false);
    }

    const getAllPossMoves = (newBoard: any) => {
        let possMoves = [];
        for (var i=0; i<newBoard.length; i++) {
            if (typeof newBoard[i] === "number") possMoves.push(i); 
        }
        return possMoves;
    }

    const emptySquares = (newBoard: any) => {
        return newBoard.filter((s: any) => typeof s == "number");
    }

    const winCombos = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]

    function checkWin(board: any, player: any) {
        let plays = board.reduce((a: any,e: any,i: any) => 
            (e === player) ? a.concat(i) : a, []);
        let gameWon = null;
        for (let [index, win] of winCombos.entries()) {
            if (win.every(elem => plays.indexOf(elem) > -1)) {
                gameWon = {index: index, player: player};
                break;
            }
        }
        return gameWon;
    }

    const minimax = (newBoard: any, player: any, alpha: any = -Infinity, beta: any = Infinity) => {
        var availSpots = emptySquares(newBoard);
    
        if (checkWin(newBoard, player)) {
            return {score: -10};
        } else if (checkWin(newBoard, aiPlayer)) {
            return {score: 20};
        } else if (availSpots.length === 0) {
            return {score: 0};
        }
    
        var moves: {index?: any, score?: any}[] = [];
        var result;
        for (var i=0; i<availSpots.length; i++) {
            var move: {index?: any, score?: any} = {};
            move.index = newBoard[availSpots[i]];
            newBoard[availSpots[i]] = player;
    
            if (player === aiPlayer) {
                result = minimax(newBoard, huPlayer, alpha, beta);
                move.score = result.score;
            } else {
                result = minimax(newBoard, aiPlayer, alpha, beta);
                move.score = result.score;
            }
    
            newBoard[availSpots[i]] = move.index;

            moves.push(move); 
        }

    
        var bestMove = 0;
        var bestScore;
        if (player === aiPlayer) {
            bestScore = -10000;
            for (var k=0; k<moves.length; k++) {
                if (moves[k].score > bestScore) {
                    bestScore = moves[k].score;
                    alpha = Math.max(alpha, bestScore);
                    if (beta <= alpha) {
                        break;
                    }
                    bestMove = k;
                }
            }
        } else {
            bestScore = 10000;
            for (var j=0; j<moves.length; j++) {
                if (moves[j].score < bestScore) {
                    bestScore = moves[j].score;
                    beta = Math.min(beta, bestScore);
                    if (beta <= alpha) {
                        break;
                    }
                    bestMove = j;
                }
            }
        }
    
        return moves[bestMove];
    }

    const aiTurn = (newBoard: any, turn: any) => {
        turn = turn === "X" ? "O" : "X";

        if (mode === "easy" || turnNo === 1) {
            let possMoves = getAllPossMoves(newBoard);
            let randomIndex = Math.floor(Math.random() * possMoves.length);
            let takenTurn = possMoves[randomIndex];
            newBoard[takenTurn] = turn;

        } else {
            let takenTurn = minimax(newBoard, aiPlayer, -Infinity, Infinity).index;
            newBoard[takenTurn] = turn;
        }
        
        setBoard(newBoard);
        setTurn(turn === "X" ? "O" : "X");
    }  

    const declareWinner = (mess?: any) => {
        setTimeout(() => {
            if (mess === 'O' || mess === 'X') {
                if (mess === 'X') {
                    sendScore(1);
                } else {
                    sendScore(-1);
                }
                navigate(`/${mess}`);
            } else {
                sendScore(0);
                navigate('/draw');
            }
        }, 400);
    }

    const checkTie = (newBoard: any) => {
        if (emptySquares(newBoard).length === 0) {
            return true;
        }
        return false;
    }

    const handleBoxClick = (index: number) => {
        if (typeof board[index] == "number" && winner === "") {
            const newBoard = [...board];
            newBoard[index] = huPlayer;
            setBoard(newBoard);
            setTurnNo(turnNo++);

            let isTie = checkTie(newBoard);
            if (!isTie) {
                setTurn(turn === "X" ? "O" : "X");

                aiTurn(newBoard, turn);
                checkWinner(newBoard);
                setTurnNo(turnNo++);

                let isTie2 = checkTie(newBoard);

                if (isTie2) {
                    setGameOver(true);
                    setIsPlaying(false);
                    declareWinner("Tie Game!");
                }
            } else {
                let isWin = checkWinner(newBoard);
                setTurnNo(turnNo++);

                setGameOver(true);
                if (!isWin) {
                    setIsPlaying(false);
                    declareWinner("Tie Game!");
                }
            }
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
                setGameOver(true);
                setIsPlaying(false);
                declareWinner(board[a]);
                return true;
            }
        }
        return false;
    };
    

    return (
        <div className={styles.container()}>
            <div className={styles.textbox()}>
                <div className={styles.title()}>
                    Tic Tac Toe
                </div>
                <div className={styles.modeDiv()}>
                    <div className={styles.modeItem()}>
                        <input disabled={isPlaying} name="level" id="levelEasy" type="radio" value={"easy"} onChange={handleOnChangeDif} checked={mode === "easy"} />
                        <label htmlFor="levelEasy">Easy</label>
                    </div>
                    <div className={styles.modeItem()}>
                        <input disabled={isPlaying} name="level" id="levelHard" type="radio" value={"hard"} onChange={handleOnChangeDif} checked={mode === "hard"} />
                        <label htmlFor="levelHard">Hard</label>
                    </div>
                </div>
                <div className={styles.level()}>
                    {
                        isPlaying
                        ?
                        "Level: " + mode
                        :
                        "Press Play"
                    }
                </div>
                <Button isDisabled={isPlaying} style={{
                    width: 120,
                    height: 42,
                    borderRadius: 4,
                    backgroundColor: isPlaying ? "#567486" : "#26333B",
                    color: isPlaying ? "#8C8C8C" : "white",
                    fontSize: 20,
                    fontWeight: "bold",
                    marginBottom: 24
                }} onClick={handlePlayButton}>
                    Play
                </Button>
            
            <div className={styles.centerbox()}>
                {board.map((box, index) => (
                    <Box keya={index} isActive={isPlaying} onClick={handleBoxClick} content={box} />
                ))}
            </div>
            </div>
        </div>
    );
}


const styles = {
    container: css({
        margin: 0,
        backgroundColor: "#3E5461",
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
        marginBottom: 24,
    }),
    level: css({
        fontSize: 20,
        fontFamily: "Helvetica",
        color: "white",
        fontWeight: "bold",
        marginBottom: 24,
    }),
    centerbox: css({
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: 32,
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
    modeDiv: css({
        marginBottom: 36,
    }),
    modeItem: css({
        fontFamily: "Helvetica",
        fontSize: 16,
        fontWeight: 600,
        marginBottom: 8,
        color: "white",
    }),
}

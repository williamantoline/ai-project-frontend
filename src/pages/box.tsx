import React, { useState } from "react";
import { css } from "../styles/styles";
import Ellipse from "../svg/ellipse";
import Vector from "../svg/vector";


interface Props {
    keya: any,
    isActive: boolean,
    onClick: any,
    content: any,
}


export default function Box(props: Props) {
    // console.log(props);
    if (props.isActive) {
        return (
            <div
                key={props.keya}
                className={styles.box()}
                onClick={props.isActive ? () => props.onClick(props.keya) : () => {}}
            >
                {props.content === "X" && <Vector />}
                {props.content === "O" && <Ellipse />}
            </div>
        );
    } else {
        return (
            <div
                key={props.keya}
                className={styles.inactiveBox()}
                onClick={props.isActive ? () => props.onClick(props.keya) : () => {}}
            >
                {props.content === "X" && <Vector />}
                {props.content === "O" && <Ellipse />}
            </div>
        )
    }
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
    inactiveBox: css({
        width: 90,
        height: 90,
        backgroundColor: '#26333B',
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

import React from "react";
import Button from "../element/button";
import { css } from "../styles/styles";

interface Props {};

export default function Game(props: Props) {
    return (
        <div className={styles.container()}>
            <div className={styles.centerbox()}>
                    <div className={styles.wrapper()}>
                        <div className={styles.box()}></div>
                        <div className={styles.box()}></div>
                        <div className={styles.box()}></div>
                    </div>
                    <div className={styles.wrapper()}>
                        <div className={styles.box()}></div>
                        <div className={styles.box()}></div>
                        <div className={styles.box()}></div>
                    </div>
                    <div className={styles.wrapper()}>
                        <div className={styles.box()}></div>
                        <div className={styles.box()}></div>
                        <div className={styles.box()}></div>
                    </div>
            </div>
        </div>
    );
}

const styles = {
    container: css({
        margin: 0,
        padding: 0,
        backgroundColor: '#26333B',
        height: '100vh',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }),
    centerbox: css({
        display: 'inline',
        marginTop: 40,
        width: 700,
        height: 700,
    }),
    leftbox: css({
        justifyContent: "center",
        alignItems: "center",
    }),
    rightbox: css({
        width: 700,
        height: 700,
        display: 'inline',
        marginLeft: 100,
    }),
    top: css({
        color: 'white',
        fontSize: 42,
        padding: 0,
        margin: 0
    }),
    bottom: css({}),
    wrapper: css({
        margin: 0,
        padding: 1,
        width: '100%',
        display: 'flex',
    }),
    box: css({
        width: 200,
        height: 200,
        backgroundColor: '#37474F',
        borderRadius: 10,
        margin: 4,
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
}
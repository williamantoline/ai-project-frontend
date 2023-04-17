import { wrap } from "module";
import Button from "../element/button";
import { css } from "../styles/styles";


interface Props {};

export default function Home(props: Props) {
    return <>
        <div className={styles.container()}>
            <div className={styles.centerbox()}>
                <div className={styles.rightbox()}>
                    <div className={styles.top()}>
                        <h2>Choose</h2>
                        <h2>difficulty level</h2>
                    </div>
                    <div className={styles.bottom()}>
                        <Button style={{
                            backgroundColor: 'transparent', 
                            border: '1px solid white', 
                            borderRadius: 30, 
                            width: 300, 
                            height: 55, 
                            color: 'white',
                            fontSize: 24,
                            margin: 10
                            }}>Easy</Button>
                    </div>
                    <div className={styles.bottom()}>
                        <Button style={{
                            backgroundColor: 'transparent', 
                            border: '1px solid white', 
                            borderRadius: 30, 
                            width: 300, 
                            height: 55, 
                            color: 'white',
                            fontSize: 24,
                            margin: 10
                            }}>Medium</Button>
                    </div>
                    <div className={styles.bottom()}>
                        <Button style={{
                            backgroundColor: 'transparent', 
                            border: '1px solid white', 
                            borderRadius: 30, 
                            width: 300, 
                            height: 55, 
                            color: 'white',
                            fontSize: 24,
                            margin: 10
                            }}>Hard</Button>
                    </div>
                    <div className={styles.bottom()}>
                        <Button style={{
                            backgroundColor: 'transparent', 
                            border: '1px solid white', 
                            borderRadius: 30, 
                            width: 300, 
                            height: 55, 
                            color: 'white',
                            fontSize: 24,
                            margin: 10
                            }}>Impossible</Button>
                    </div>
                </div>
                <div className={styles.leftbox()}>
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
        </div>
    </>;
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
        display: "flex",
    }),
    rightbox: css({
        justifyContent: "center",
        alignItems: "center",
    }),
    leftbox: css({
        width: 700,
        height: 700,
        display: 'inline'
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
        padding: 10,
        width: 660,
        height: 210,
        display: "flex"
    }),
    box: css({
        width: 200,
        height: 200,
        backgroundColor: '#3E5461',
        borderRadius: 25,
        margin: 5,
    })
}
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
                <div className={styles.leftbox()}></div>
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
    leftbox: css({}),
    top: css({
        color: 'white',
        fontSize: 42,
        padding: 0,
        margin: 0
    }),
    bottom: css({}),
}
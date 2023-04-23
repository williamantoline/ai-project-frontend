import { css } from "../styles/styles";
import Ellipse2 from "../svg/ellipse2";
import Button from "../element/button";
import { useNavigate } from "react-router-dom";

interface Props {};

export default function O(props: Props) {
    const navigate = useNavigate(); // Get the history object from React Router

    const HomeClick = () => {
        navigate("/");
    };

    const PlayAgainClick = () => {
        navigate("/game");
    };

    return (
        <div className={styles.container()}>
            <div className={styles.textbox()}>
                <Ellipse2 />
                <div className={styles.winner()}>
                    WINNER!
                </div>
                <div className={styles.buttonbox()}>
                <Button style={{
                    width: 266,
                    height: 56,
                    borderRadius: 4,
                    backgroundColor: "transparent",
                    color: "#26333B",
                    fontSize: 20,
                    fontWeight: "bold",
                    marginRight: 238,
                    border: "3px solid #26333B"
                }} onClick={HomeClick}>Home</Button>
                <Button style={{
                    width: 266,
                    height: 56,
                    borderRadius: 4,
                    backgroundColor: "#26333B",
                    color: "white",
                    fontSize: 20,
                    fontWeight: "bold",
                }} onClick={PlayAgainClick}>Play Again</Button>
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
        display: "block",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 100
    }),
    textbox: css({
        display: "block",
        textAlign: "center",
        width: 772,
        margin: "auto",
    }),
    winner: css({
        fontSize: 88,
        fontFamily: "Helvetica",
        color: "white",
        fontWeight: "bold",
        marginTop: 100
    }),
    buttonbox: css({
        width: 772,
        height: 56,
        marginTop: 70
    })
}

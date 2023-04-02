import { css } from "../styles/styles";


interface Props {};

export default function Home(props: Props) {
    return <>
        <div className={styles.container()}>
            <h1>Home Page</h1>
        </div>
    </>;
}


const styles = {
    container: css({
        margin: 0,
        padding: 0,
    })
}
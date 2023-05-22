import { css } from "../styles/styles";

interface Props {
  type?: string,
  idx: number,
  item: leaderboardItem,
}

interface leaderboardItem {
    name: string,
    score: number,
    isMe: boolean,
}

export default function LeaderboardItem(props: Props) {
  const style = {
    backgroundColor: props.item.isMe ? "white" : "",
    // color: props.color,
    // ...props.style,
  }
  
  return (
    <>
        <tr style={style}>
            <td>{props.idx}</td>
            <td>{props.item.name}</td>
            <td>{props.item.score}</td>
        </tr>
    </>
  );

}

const styles = {
  button: css({
    fontWeight: "$regular",
  }),
}
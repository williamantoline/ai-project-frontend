import { css } from "../styles/styles";

interface Props {
  type?: string,
  color?: string,
  size?: number,
  children: React.ReactNode,
  style?: object;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button(props: Props) {
  const style = {
    color: props.color,
    fontSize: props.size,
    backgroundColor: props.color,
    padding: props.size,
    margin: props.size,
    width: props.size,
    border: props.type,
    borderRadius: props.type,
    display: props.type,
    ...props.style,
  }

  return (
    <button style={style} className={styles.button()} onClick={props.onClick}>
      {props.children}
    </button>
  );

}

const styles = {
  button: css({
    fontWeight: "$regular",
  }),
}
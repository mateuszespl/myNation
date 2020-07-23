import { makeStyles } from "@material-ui/core";

interface propsInterface {
  correct?: boolean;
  answered?: boolean;
}

export const GameButtonStyles = makeStyles({
  img: {
    width: "100px",
    height: "70px",
  },
  button: (props: propsInterface) => ({
    background: props.answered
      ? props.correct
        ? "rgb(76, 175, 80)"
        : "rgb(244, 68, 54)"
      : undefined,
    width: "45%",
    height: "120px",
    margin: "10px 0",
  }),
});

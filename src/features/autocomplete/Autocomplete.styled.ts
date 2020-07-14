import { makeStyles } from "@material-ui/core";

interface propsInterface {
  matches?: boolean;
}

export const AutocompleteStyles = makeStyles({
  list: (props: propsInterface) => ({
    position: "absolute",
    top: "0",
    left: "0",
    display: "flex",
    flexDirection: "column",
    margin: props.matches ? "56px 0 0 0" : "40px 0 0 0",
    background: "rgb(40, 40, 40)",
    width: "100%",
    borderRadius: "4px",
  }),
  img: {
    width: "20px",
    height: "13px",
    margin: "0 10px 0 0",
  },
});

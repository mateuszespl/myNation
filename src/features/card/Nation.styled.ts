import { makeStyles } from "@material-ui/core";

export const NationStyles = makeStyles({
  main: {
    background: "rgb(40,40,40)",
    maxWidth: "100vw",
    overflow: "hidden",
    minWidth: "100vw",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  cardMedia: {
    height: "300px",
  },
  cardActions: {
    margin: "10px 0",
    display: "flex",
    justifyContent: "space-around",
    background: "333",
  },
});

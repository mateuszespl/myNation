import { makeStyles } from "@material-ui/core";

interface propsInterface {
  displayMode?: string;
}

export const DisplayItemLinkStyles = makeStyles({
  box: (props: propsInterface) => ({
    position: "relative",
    height: props.displayMode === "list" ? "160px" : "250px",
    width: props.displayMode === "list" ? "85vw" : "300px",
    margin: "15px 20px",
  }),
  card: (props: propsInterface) => ({
    display: props.displayMode === "list" ? "flex" : "",
    position: "relative",
  }),
  cardMedia: {
    height: "160px",
    width: "300px",
  },
  cardContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  nationName: {
    fontSize: "18px",
    fontWeight: 800,
  },
});

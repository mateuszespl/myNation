import { makeStyles } from "@material-ui/core";

interface propsInterface {
  displayMode: string;
}

export const SkeletonBoxStyles = makeStyles({
  skeletonList: (props: propsInterface) => ({
    position: "relative",
    height: props.displayMode === "grid" ? "280px" : "160px",
    width: props.displayMode === "grid" ? "340px" : "85vw",
    margin: props.displayMode === "grid" ? "0px" : "20px",
    display: "flex",
    flexDirection: props.displayMode === "grid" ? "column" : "row",
    alignItems: props.displayMode && "center",
    justifyContent: props.displayMode && "center",
    borderRadius: "4px",
    overflow: "hidden",
  }),
  skeletonFlag: (props: propsInterface) => ({
    width: "300px",
    height: "160px",
  }),
  skeletonContent: (props: propsInterface) => ({
    width: props.displayMode === "grid" ? "300px" : "calc(85vw - 300px)",
    height: props.displayMode === "grid" ? "72px" : "160px",
  }),
});

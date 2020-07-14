import { makeStyles } from "@material-ui/core";

interface propsInterface {
  selectRegionValue: string | undefined;
  selectSortValue: string | undefined;
}

export const ModalButtonStyles = makeStyles({
  button: (props: propsInterface) => ({
    background:
      props.selectSortValue === "None" && props.selectRegionValue === "All"
        ? "rgb(244, 68, 54)"
        : "rgb(76, 175, 80)",
  }),
});

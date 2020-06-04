import React, { useState } from "react";
import {
  Button,
  Grid,
  makeStyles,
  Box,
  Dialog,
  DialogActions,
  IconButton,
} from "@material-ui/core";
import NavigationSelect from "../NavigationSelect/NavigationSelect";
import { connect } from "react-redux";
import { Done, Close, Sort } from "@material-ui/icons";

export interface NavigationModalButtonInterface {
  matches?: boolean;
  selectRegionValue: string;
  selectSortValue: string;
}

interface propsInterface {
  selectRegionValue: string;
  selectSortValue: string;
}

const useStyles = makeStyles({
  modal: {
    display: "flex",
    height: "100vh",
    width: "100vw",
    alignItems: "center",
    justifyContent: "center",
  },
  button: (props: propsInterface) => ({
    margin: "20px",
    background:
      props.selectSortValue === "None" && props.selectRegionValue === "All"
        ? "red"
        : "green",
  }),
});

export const NavigationModalButton: React.FC<NavigationModalButtonInterface> = ({
  matches,
  selectRegionValue,
  selectSortValue,
}) => {
  const props = {
    selectSortValue: selectSortValue,
    selectRegionValue: selectRegionValue,
  };
  const classes = useStyles(props);
  const [open, setOpen] = useState(false);
  return (
    <>
      {matches ? (
        <IconButton onClick={() => setOpen(!open)}>
          <Sort />
        </IconButton>
      ) : (
        <Button endIcon={<Sort />} onClick={() => setOpen(!open)}>
          Opcje
        </Button>
      )}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogActions>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Box p={2}>
                <NavigationSelect mobile />
              </Box>
            </Grid>
            <Grid item>
              <Box p={2}>
                <NavigationSelect mobile region />
              </Box>
            </Grid>
          </Grid>
        </DialogActions>
        <Button
          className={classes.button}
          endIcon={
            selectSortValue === "None" && selectRegionValue === "All" ? (
              <Close />
            ) : (
              <Done />
            )
          }
          onClick={() => setOpen(false)}
        >
          {selectSortValue === "None" && selectRegionValue === "All"
            ? "Zamknij okno"
            : "Zastosuj opcje"}
        </Button>
      </Dialog>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    selectRegionValue: state.selectRegionValue,
    selectSortValue: state.selectSortValue,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationModalButton);

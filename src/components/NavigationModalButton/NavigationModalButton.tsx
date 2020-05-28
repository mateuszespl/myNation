import React, { useState } from "react";
import { Sort } from "@material-ui/icons";
import { Button, Modal, Grid, makeStyles, Box } from "@material-ui/core";
import NavigationSelect from "../NavigationSelect/NavigationSelect";

const useStyles = makeStyles({
  modal: {
    display: "flex",
    height: "100vh",
    width: "100vw",
    alignItems: "center",
    justifyContent: "center",
  },
  grid: {
    width: "60%",
    height: "80%",
  },
});

export const NavigationModalButton = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button endIcon={<Sort />} onClick={() => setOpen(!open)}>
        Filtry
      </Button>
      <Modal
        className={classes.modal}
        open={open}
        onClose={() => setOpen(false)}
      >
        <Grid
          className={classes.grid}
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item>
            <NavigationSelect />
          </Grid>
          <Grid item>
            <NavigationSelect region />
          </Grid>
        </Grid>
      </Modal>
    </>
  );
};

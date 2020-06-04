import React, { useState } from "react";
import { Sort } from "@material-ui/icons";
import {
  Button,
  Grid,
  makeStyles,
  Box,
  Dialog,
  DialogActions,
} from "@material-ui/core";
import NavigationSelect from "../NavigationSelect/NavigationSelect";

const useStyles = makeStyles({
  modal: {
    display: "flex",
    height: "100vh",
    width: "100vw",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const NavigationModalButton = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button endIcon={<Sort />} onClick={() => setOpen(!open)}>
        Opcje
      </Button>
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
      </Dialog>
    </>
  );
};

import React, { useState } from "react";
import { Grid, Box, Dialog, DialogActions } from "@material-ui/core";
import { connect } from "react-redux";

import NavigationSelect from "../navigation/NavigationSelect";
import { ModalButton } from "./ModalButton";
import { initialStateInterface } from "store/reducer";

interface ModalInterface {
  matches?: boolean;
  selectRegionValue: string;
  selectSortValue: string;
}

export const Modal: React.FC<ModalInterface> = ({
  matches,
  selectRegionValue,
  selectSortValue,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ModalButton
        navigation
        handleClick={() => setOpen(!open)}
        matches={matches}
      />
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
            <Grid justify="center" container item>
              {" "}
              <Box margin={1}>
                <ModalButton
                  handleClick={() => setOpen(false)}
                  selectRegionValue={selectRegionValue}
                  selectSortValue={selectSortValue}
                />
              </Box>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
    </>
  );
};

const mapStateToProps = (state: initialStateInterface) => {
  return {
    selectRegionValue: state.selectRegionValue,
    selectSortValue: state.selectSortValue,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

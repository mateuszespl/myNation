import React from "react";
import { IconButton, Button } from "@material-ui/core";
import { Sort, Close, Done } from "@material-ui/icons";

import { ModalButtonStyles } from "./ModalButton.styled";

interface ModalButtonInterface {
  matches?: boolean | undefined;
  handleClick: () => any;
  navigation?: boolean;
  selectRegionValue?: string | undefined;
  selectSortValue?: string | undefined;
}

export const ModalButton: React.FC<ModalButtonInterface> = ({
  matches,
  navigation,
  handleClick,
  selectRegionValue,
  selectSortValue,
}) => {
  const props = {
    selectSortValue: selectSortValue,
    selectRegionValue: selectRegionValue,
  };
  const classes = ModalButtonStyles(props);
  return (
    <>
      {navigation ? (
        matches ? (
          <IconButton onClick={handleClick}>
            <Sort />
          </IconButton>
        ) : (
          <Button endIcon={<Sort />} onClick={handleClick}>
            Opcje
          </Button>
        )
      ) : (
        <Button
          className={classes.button}
          endIcon={
            selectSortValue === "None" && selectRegionValue === "All" ? (
              <Close />
            ) : (
              <Done />
            )
          }
          onClick={handleClick}
        >
          {selectSortValue === "None" && selectRegionValue === "All"
            ? "Zamknij okno"
            : "Zastosuj opcje"}
        </Button>
      )}
    </>
  );
};

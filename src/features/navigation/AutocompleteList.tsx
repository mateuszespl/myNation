import React from "react";
import { connect } from "react-redux";
import {
  List,
  ListItem,
  Button,
  makeStyles,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import { updateInputValue, setCurrentNationView } from "store/actionCreators";

export interface AutocompleteListInterface {
  autocompleteList: Array<{}>;
  updateInputValue: (inputValue: string) => any;
  setCurrentNationView: (currentNation: string) => any;
  home?: boolean;
}

interface propsInterface {
  matches?: boolean;
}

const useStyles = makeStyles({
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

export const AutocompleteList: React.FC<AutocompleteListInterface> = ({
  autocompleteList,
  updateInputValue,
  setCurrentNationView,
  home,
}) => {
  const matches = useMediaQuery("(max-width:710px)");
  const props = { matches: matches };
  const classes = useStyles(props);
  return (
    <List className={classes.list}>
      {autocompleteList.map((nation: any) => (
        <ListItem>
          <Button
            variant="contained"
            component={Link}
            to={`/nation/${nation.name}`}
            onClick={() => {
              updateInputValue("");
              !home && setCurrentNationView(nation.name);
            }}
          >
            <img
              className={classes.img}
              src={nation.flag}
              alt={`${nation.name} link flag`}
            />
            {nation.name.length > 25
              ? nation.name.slice(0, 25) + "..."
              : nation.name}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

const mapStateToProps = (state: any) => {
  return {
    autocompleteList: state.autocompleteList,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateInputValue: (inputValue: string) =>
      dispatch(updateInputValue(inputValue)),
    setCurrentNationView: (currentNation: string) =>
      dispatch(setCurrentNationView(currentNation)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AutocompleteList);

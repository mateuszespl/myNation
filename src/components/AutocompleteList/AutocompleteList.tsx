import React from "react";
import { connect } from "react-redux";
import { List, ListItem, Button, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

export interface AutocompleteListInterface {
  autocompleteList: Array<{}>;
}

const useStyles = makeStyles({
  list: {
    position: "absolute",
    top: "0",
    left: "0",
    display: "flex",
    flexDirection: "column",
    margin: "40px 0 0 0",
    background: "rgb(40, 40, 40)",
    width: "100%",
    borderRadius: "4px",
  },
  img: {
    width: "20px",
    height: "13px",
    margin: "0 10px 0 0",
  },
});

export const AutocompleteList: React.FC<AutocompleteListInterface> = ({
  autocompleteList,
}) => {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      {autocompleteList.map((nation: any) => (
        <ListItem>
          <Button
            variant="contained"
            component={Link}
            to={`/nation/${nation.name}`}
          >
            <img
              className={classes.img}
              src={nation.flag}
              alt={`${nation.name} link flag`}
            />
            {nation.name}
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
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AutocompleteList);

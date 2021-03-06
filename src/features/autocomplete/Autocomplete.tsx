import React from "react";
import { connect } from "react-redux";
import { List, ListItem, Button, useMediaQuery } from "@material-ui/core";
import { Link } from "react-router-dom";

import { updateInputValue, setCurrentNationView } from "store/actionCreators";
import { AutocompleteStyles } from "./Autocomplete.styled";
import { initialStateInterface } from "store/reducer";

interface AutocompleteInterface {
  autocompleteList: { name: string; flag: string }[];
  updateInputValue: (inputValue: string) => void;
  setCurrentNationView: (currentNation: string) => void;
  home?: boolean;
}

export const Autocomplete: React.FC<AutocompleteInterface> = ({
  autocompleteList,
  updateInputValue,
  setCurrentNationView,
  home,
}) => {
  const matches = useMediaQuery("(max-width:710px)");
  const props = { matches: matches };
  const classes = AutocompleteStyles(props);
  return (
    <List className={classes.list}>
      {autocompleteList.map(({ name, flag }) => (
        <ListItem key={name}>
          <Button
            variant="contained"
            component={Link}
            to={`/nation/${name}`}
            onClick={() => {
              updateInputValue("");
              !home && setCurrentNationView(name);
            }}
          >
            <img className={classes.img} src={flag} alt={`${name} link flag`} />
            {name.length > 25 ? name.slice(0, 25) + "..." : name}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

const mapStateToProps = (state: initialStateInterface) => {
  return {
    autocompleteList: state.autocompleteList,
  };
};

const mapDispatchToProps = {
  updateInputValue,
  setCurrentNationView,
};

export default connect(mapStateToProps, mapDispatchToProps)(Autocomplete);

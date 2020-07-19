import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import {
  Grid,
  Box,
  CardHeader,
  Card,
  CardMedia,
  CircularProgress,
  CardContent,
  useMediaQuery,
  CardActions,
} from "@material-ui/core";

import { NationInfoList } from "./NationInfoList";
import NationButton from "./NationButton";
import { setCurrentNationView } from "store/actionCreators";
import { NationStyles } from "./Nation.styled";
import { initialStateInterface } from "store/reducer";

interface NationInterface {
  location: {
    pathname: string;
  };
  setCurrentNationView: (currentNation: string) => void;
  currentNationView: {
    flag: string;
    capital: string;
    name: string;
    population: number;
    area: number;
    currencies: { code: string }[];
    gini: number;
    alpha3Code: string;
  };
  countriesDataList: Array<any>;
}

export const Nation: React.FC<NationInterface> = ({
  location,
  setCurrentNationView,
  currentNationView,
  countriesDataList,
}) => {
  const { pathname } = location;
  const nationName = pathname.split("/nation/")[1];
  useEffect(() => {
    nationName !== "" && setCurrentNationView(nationName);
  }, [nationName, setCurrentNationView]);
  const classes = NationStyles();
  const matches = useMediaQuery("(max-width:970px)");
  return (
    <>
      {countriesDataList.length === 0 ? (
        <Redirect to="/" />
      ) : (
        <Box component="main" className={`${classes.main}`}>
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="space-around"
          >
            {!matches && (
              <Grid item>
                <NationButton />
              </Grid>
            )}
            {currentNationView ? (
              <Grid item xs={!matches ? 8 : true}>
                <Card>
                  <CardHeader title={currentNationView.name} />
                  <CardMedia
                    className={classes.cardMedia}
                    image={currentNationView.flag}
                  ></CardMedia>
                  {matches && (
                    <CardActions className={classes.cardActions}>
                      <NationButton />
                      <NationButton next />
                    </CardActions>
                  )}
                  <CardContent>
                    <NationInfoList currentNationView={currentNationView} />
                  </CardContent>
                </Card>
              </Grid>
            ) : (
              <CircularProgress />
            )}
            {!matches && (
              <Grid item>
                <NationButton next />
              </Grid>
            )}
          </Grid>
        </Box>
      )}
    </>
  );
};

const mapStateToProps = (state: initialStateInterface) => {
  return {
    currentNationView: state.currentNationView,
    countriesDataList: state.countriesDataList,
  };
};

const mapDispatchToProps = {
  setCurrentNationView,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nation));

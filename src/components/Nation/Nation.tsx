import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import { setCurrentNationView } from "../../store/actionCreators";
import {
  Grid,
  Box,
  makeStyles,
  CardHeader,
  Card,
  CardMedia,
  CircularProgress,
  CardContent,
  useMediaQuery,
  ButtonGroup,
} from "@material-ui/core";
import { NationInfoList } from "../NationInfoList/NationInfoList";
import NationButton from "../NationButton/NationButton";

const useStyles = makeStyles({
  main: {
    background: "rgb(40,40,40)",
    maxWidth: "100vw",
    overflow: "hidden",
    minWidth: "100vw",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  cardMedia: {
    height: "200px",
  },
});

export interface NationInterface {
  location: any;
  setCurrentNationView: (currentNation: string) => any;
  currentNationView: {
    flag: string;
    capital: string;
    name: string;
    population: number;
    area: number;
    currencies: Array<any>;
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
  const nationName = location.pathname.split("/nation/")[1];
  useEffect(() => {
    nationName !== "" && setCurrentNationView(nationName);
  }, []);
  const classes = useStyles();
  const matches = useMediaQuery("(max-width:500px)");
  return (
    <>
      {countriesDataList.length === 0 ? (
        <Redirect to="/" />
      ) : (
        <Box component="main" className={`${classes.main}`}>
          <Grid
            direction={matches ? "column" : "row"}
            container
            alignItems="center"
            justify="space-around"
          >
            {!matches && <NationButton />}
            {currentNationView ? (
              <Grid item xs={8}>
                <Card>
                  <CardHeader title={currentNationView.name} />
                  <CardMedia
                    className={classes.cardMedia}
                    image={currentNationView.flag}
                  />
                  <CardContent>
                    <NationInfoList currentNationView={currentNationView} />
                  </CardContent>
                </Card>
              </Grid>
            ) : (
              <CircularProgress />
            )}
            {matches ? (
              <ButtonGroup>
                <NationButton />
                <NationButton next />
              </ButtonGroup>
            ) : (
              <NationButton next />
            )}
          </Grid>
        </Box>
      )}
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    currentNationView: state.currentNationView,
    countriesDataList: state.countriesDataList,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setCurrentNationView: (currentNation: string) =>
      dispatch(setCurrentNationView(currentNation)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nation));

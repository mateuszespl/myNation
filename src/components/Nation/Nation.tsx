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
  CardActions,
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
    height: "300px",
  },
  cardActions: {
    margin: "10px 0",
    display: "flex",
    justifyContent: "space-around",
    background: "333",
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
  const matches = useMediaQuery("(max-width:400px)");
  const matches1 = useMediaQuery("(max-width:970px)");
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
            {!matches1 && (
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
                  {matches1 && (
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
            {!matches1 && (
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

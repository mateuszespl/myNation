import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  makeStyles,
  Chip,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import {
  People,
  Map,
  MonetizationOn,
  AccountBalance,
  BarChart,
  Flag,
} from "@material-ui/icons";

interface propsInterface {
  displayMode: string;
}

const useStyles = makeStyles({
  box: (props: propsInterface) => ({
    position: "relative",
    height: "200px",
    width: props.displayMode === "list" ? "85vw" : "300px",
    margin: "20px",
  }),
  card: (props: propsInterface) => ({
    display: props.displayMode === "list" ? "flex" : "",
    position: "relative",
  }),
  cardMedia: {
    height: "160px",
    width: "300px",
  },
  nationName: {
    fontSize: "18px",
    fontWeight: 800,
  },
});

export interface DisplayItemLinkInterface {
  country: {
    name: string;
    region: string;
    flag: string;
    population: number;
    area: number;
    currencies: Array<any>;
    gini: number;
    capital: string;
    alpha3Code: string;
  };
  displayMode: string;
}

export const DisplayItemLink: React.FC<DisplayItemLinkInterface> = ({
  country,
  displayMode,
}) => {
  const {
    name,
    region,
    flag,
    population,
    area,
    currencies,
    gini,
    capital,
    alpha3Code,
  } = country;
  const props = {
    displayMode: displayMode,
  };
  const classes = useStyles(props);
  return (
    <Grid item>
      <Box className={`${classes.box}`}>
        <Card className={`${classes.card}`}>
          <Link to={`/nation/${name}`}>
            <CardActionArea>
              <CardMedia
                className={`${classes.cardMedia}`}
                image={flag}
                title={name + " flag"}
              />
            </CardActionArea>
          </Link>
          <CardContent>
            <Grid
              container
              alignItems="center"
              justify="space-around"
              wrap="nowrap"
            >
              <Grid
                item
                container
                direction={displayMode === "list" ? "column" : "row"}
                alignItems={displayMode === "grid" ? "center" : "flex-start"}
                justify={displayMode === "grid" ? "space-around" : "center"}
              >
                <Typography className={`${classes.nationName}`} component="h1">
                  {name}
                </Typography>
                <Chip label={region} />
              </Grid>
              {displayMode === "list" && (
                <Grid item container alignItems="center" spacing={1}>
                  <Grid item>
                    <Chip
                      label={`Stolica: ${capital}`}
                      icon={<AccountBalance />}
                    />
                  </Grid>
                  <Grid item>
                    <Chip
                      label={`Populacja: ${population} os`}
                      icon={<People />}
                    />
                  </Grid>
                  <Grid item>
                    <Chip
                      label={`Powierzchnia: ${area / 1000} km²`}
                      icon={<Map />}
                    />
                  </Grid>
                  <Grid item>
                    <Chip
                      label={`Waluta: ${currencies[0].code}`}
                      icon={<MonetizationOn />}
                    />
                  </Grid>
                  {gini && (
                    <Grid item>
                      <Chip
                        label={`Współczynnik Giniego: ${gini}`}
                        icon={<BarChart />}
                      />
                    </Grid>
                  )}
                  <Grid item>
                    <Chip label={`ISO-3: ${alpha3Code}`} icon={<Flag />} />
                  </Grid>
                </Grid>
              )}
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </Grid>
  );
};

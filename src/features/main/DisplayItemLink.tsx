import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Chip,
  useMediaQuery,
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

import { DisplayItemLinkStyles } from "./DisplayItemLink.styled";

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
  handleClick: () => any;
}

export const DisplayItemLink: React.FC<DisplayItemLinkInterface> = ({
  country,
  displayMode,
  handleClick,
}) => {
  const {
    name,
    region,
    flag,
    population,
    area,
    currencies: [{ code: currencyCode }],
    gini,
    capital,
    alpha3Code,
  } = country;
  const dataList = [
    { text: "Stolica", value: capital, icon: <AccountBalance /> },
    { icon: <People />, text: "Populacja", value: population },
    { icon: <Map />, text: "Powierzchnia", value: area, unit: "km²" },
    { icon: <MonetizationOn />, text: "Waluta", value: currencyCode },
    { icon: <BarChart />, text: "Współczynnik Giniego", value: gini },
    { icon: <Flag />, text: "ISO-3", value: alpha3Code },
  ];
  const matches = useMediaQuery("(max-width:1000px)");
  const matches1 = useMediaQuery("(max-width:800px");
  const props = {
    displayMode: displayMode,
  };
  const classes = DisplayItemLinkStyles(props);
  return (
    <Grid item>
      <Box className={`${classes.box}`}>
        <Card className={`${classes.card}`}>
          <Link onClick={handleClick} to={`/nation/${name}`}>
            <CardActionArea>
              <CardMedia
                className={`${classes.cardMedia}`}
                image={flag}
                title={name + " flag"}
              />
            </CardActionArea>
          </Link>
          <CardContent className={`${classes.cardContent}`}>
            <Grid
              container
              alignItems="center"
              justify="space-around"
              wrap="nowrap"
            >
              <Grid
                xs={
                  displayMode === "list"
                    ? matches
                      ? matches1
                        ? true
                        : 5
                      : 3
                    : undefined
                }
                item
                container
                direction={displayMode === "list" ? "column" : "row"}
                alignItems={displayMode === "grid" ? "center" : "flex-start"}
                justify={displayMode === "grid" ? "space-around" : "center"}
              >
                <Typography className={`${classes.nationName}`} component="h1">
                  {name.length > 15 ? name.substring(0, 15) + "..." : name}
                </Typography>
                {region && <Chip label={region} />}
              </Grid>
              {displayMode === "list" && !matches1 && (
                <Grid
                  item
                  container
                  alignItems="center"
                  xs={displayMode === "list" ? true : undefined}
                  spacing={1}
                >
                  {(matches ? dataList.slice(0, 3) : dataList).map(
                    ({ icon, text, value, unit }) =>
                      value && (
                        <Grid key={value} item>
                          <Chip
                            label={`${text}: ${value}${
                              unit !== undefined ? unit : ""
                            }`}
                            icon={icon}
                          />
                        </Grid>
                      )
                  )}
                </Grid>
              )}
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </Grid>
  );
};

export default React.memo(DisplayItemLink);

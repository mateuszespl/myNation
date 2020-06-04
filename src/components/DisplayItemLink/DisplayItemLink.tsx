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

interface propsInterface {
  displayMode?: string;
}

const useStyles = makeStyles({
  box: (props: propsInterface) => ({
    position: "relative",
    height: props.displayMode === "list" ? "160px" : "250px",
    width: props.displayMode === "list" ? "85vw" : "300px",
    margin: "15px 20px",
  }),
  card: (props: propsInterface) => ({
    display: props.displayMode === "list" ? "flex" : "",
    position: "relative",
  }),
  cardMedia: {
    height: "160px",
    width: "300px",
  },
  cardContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
    currencies,
    gini,
    capital,
    alpha3Code,
  } = country;
  const matches = useMediaQuery("(max-width:1000px)");
  const matches1 = useMediaQuery("(max-width:800px");
  const props = {
    displayMode: displayMode,
  };
  const classes = useStyles(props);
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
                  {capital && (
                    <Grid item>
                      <Chip
                        label={`Stolica: ${capital}`}
                        icon={<AccountBalance />}
                      />
                    </Grid>
                  )}
                  <Grid item>
                    <Chip
                      label={`Populacja: ${population} os`}
                      icon={<People />}
                    />
                  </Grid>
                  <Grid item>
                    <Chip label={`Powierzchnia: ${area} km²`} icon={<Map />} />
                  </Grid>
                  {!matches && (
                    <>
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
                    </>
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

import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  styled,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

// const StyledBox = styled(Box)(({displayMode: string }) => ({
//   position: "relative",
//   height: "200px",
//   width:  displayMode === "list" ? "85vw" : "300px",
//   margin: "20px"
// });

// const StyledCard = styled(Card)( {props}) => ({
//   display: ${({ displayMode }) => (displayMode === "list" ? "flex" : "")}
// })

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
  cardMedia: {
    height: "160px",
    width: "300px",
  },
});

export interface DisplayItemLinkInterface {
  country: {
    name: string;
    region: string;
    flag: string;
  };
  displayMode: string;
}

export const DisplayItemLink: React.FC<DisplayItemLinkInterface> = ({
  country,
  displayMode,
}) => {
  const { name, region, flag } = country;
  const props = {
    displayMode: displayMode,
  };
  const classes = useStyles(props);
  return (
    <Grid item>
      <Box className={`${classes.box}`}>
        <Card>
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
            <Typography component="h1">{name}</Typography>
            <Typography component="h2">{region}</Typography>
          </CardContent>
        </Card>
      </Box>
    </Grid>
  );
};

import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Grid,
} from "@material-ui/core";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledBox = styled(Box)`
  position: relative;
  height: 200px;
  width: 200px;
  margin: 20px;
`;

const StyledCardMedia = styled(CardMedia)`
  height: 130px;
  width: 200px;
`;

export interface DisplayItemLinkInterface {
  country: {
    name: string;
    region: string;
    flag: string;
  };
}

export const DisplayItemLink: React.FC<DisplayItemLinkInterface> = ({
  country,
}) => {
  const { name, region, flag } = country;
  return (
    <Grid item>
      <StyledBox>
        <Card>
          <Link to={`/nation/${name}`}>
            <CardActionArea>
              <StyledCardMedia image={flag} title={name + " flag"} />
            </CardActionArea>
          </Link>
          <CardContent>
            <Typography component="h1">{name}</Typography>
            <Typography component="h2">{region}</Typography>
          </CardContent>
        </Card>
      </StyledBox>
    </Grid>
  );
};

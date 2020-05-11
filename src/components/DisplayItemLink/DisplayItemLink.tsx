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

const StyledBox = styled(Box)<{ displayMode: string }>`
  position: relative;
  height: 200px;
  width: ${({ displayMode }) => (displayMode === "list" ? "85vw" : "300px")};
  margin: 20px;
`;

const StyledCard = styled(Card)<{ displayMode: string }>`
  display: ${({ displayMode }) => (displayMode === "list" ? "flex" : "")};
`;

const StyledCardMedia = styled(CardMedia)`
  height: 160px;
  width: 300px;
`;

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
  return (
    <Grid item>
      <StyledBox displayMode={displayMode}>
        <StyledCard displayMode={displayMode}>
          <Link to={`/nation/${name}`}>
            <CardActionArea>
              <StyledCardMedia image={flag} title={name + " flag"} />
            </CardActionArea>
          </Link>
          <CardContent>
            <Typography component="h1">{name}</Typography>
            <Typography component="h2">{region}</Typography>
          </CardContent>
        </StyledCard>
      </StyledBox>
    </Grid>
  );
};

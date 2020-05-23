import React from "react";
import { List, ListItemIcon, ListItemText, ListItem } from "@material-ui/core";
import {
  AccountBalance,
  People,
  Map,
  MonetizationOn,
  BarChart,
  Flag,
} from "@material-ui/icons";

export interface NationInfoListInterface {
  currentNationView: {
    population: number;
    area: number;
    currencies: Array<any>;
    gini: number;
    capital: string;
    alpha3Code: string;
  };
}

export const NationInfoList: React.FC<NationInfoListInterface> = ({
  currentNationView,
}) => {
  const {
    population,
    area,
    currencies,
    gini,
    capital,
    alpha3Code,
  } = currentNationView;
  return (
    <>
      {currentNationView && (
        <List>
          {capital && (
            <ListItem>
              <ListItemIcon>
                <AccountBalance />
              </ListItemIcon>
              <ListItemText>Stolica: {capital}</ListItemText>
            </ListItem>
          )}
          <ListItem>
            <ListItemIcon>
              <People />
            </ListItemIcon>
            <ListItemText>Populacja: {population}</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Map />
            </ListItemIcon>
            <ListItemText>Powierzchnia: {area} km²</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <MonetizationOn />
            </ListItemIcon>
            <ListItemText>Waluta: {currencies[0].code}</ListItemText>
          </ListItem>
          {gini && (
            <ListItem>
              <ListItemIcon>
                <BarChart />
              </ListItemIcon>
              <ListItemText>Współczynnik Giniego: {gini}</ListItemText>
            </ListItem>
          )}
          <ListItem>
            <ListItemIcon>
              <Flag />
            </ListItemIcon>
            <ListItemText>ISO-3: {alpha3Code}</ListItemText>
          </ListItem>
        </List>
      )}
    </>
  );
};

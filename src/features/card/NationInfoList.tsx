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
    currencies: { code: string }[];
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
    currencies: [{ code: currencyCode }],
    gini,
    capital,
    alpha3Code,
  } = currentNationView
    ? currentNationView
    : {
        population: 0,
        area: 0,
        currencies: [{ code: "NON" }],
        gini: 0,
        capital: "NON",
        alpha3Code: "AAA",
      };
  const dataList = [
    { text: "Stolica", value: capital, icon: <AccountBalance /> },
    { icon: <People />, text: "Populacja", value: population },
    { icon: <Map />, text: "Powierzchnia", value: area, unit: "km²" },
    { icon: <MonetizationOn />, text: "Waluta", value: currencyCode },
    { icon: <BarChart />, text: "Współczynnik Giniego", value: gini },
    { icon: <Flag />, text: "ISO-3", value: alpha3Code },
  ];
  return (
    <>
      {currentNationView && (
        <List>
          {dataList.map(
            ({ text, value, unit, icon }) =>
              value && (
                <ListItem>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText>
                    {text}: {value}
                    {unit && unit}
                  </ListItemText>
                </ListItem>
              )
          )}
        </List>
      )}
    </>
  );
};

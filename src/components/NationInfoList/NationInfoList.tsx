import React from "react";

export interface NationInfoListInterface {
  currentNationView: {
    capital: string;
  };
}

export const NationInfoList: React.FC<NationInfoListInterface> = ({
  currentNationView,
}) => {
  const { capital } = currentNationView;
  return <div>{capital}</div>;
};

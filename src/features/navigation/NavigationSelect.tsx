import React from "react";
import { connect } from "react-redux";

import { constants } from "./constants";
import { updateSelectValue } from "store/actionCreators";
import { Select } from "components/Select";
import { initialStateInterface } from "store/reducer";

interface NavigationSelectInterface {
  selectRegionValue: string;
  selectSortValue: string;
  updateSelectValue: (selectRegionValue: any, selectSortValue: any) => any;
  region?: boolean;
  mobile?: boolean;
}

export const NavigationSelect: React.FC<NavigationSelectInterface> = ({
  selectSortValue,
  selectRegionValue,
  updateSelectValue,
  region,
  mobile,
}) => {
  const {
    select: { regionList, sortList },
  } = constants;

  return (
    <>
      {region ? (
        <Select
          name={"Region"}
          checkbox={mobile}
          data={regionList}
          checked={selectRegionValue}
          handleChange={(e: any) =>
            updateSelectValue(e.target.value, undefined)
          }
        />
      ) : (
        <Select
          name={"Sortuj"}
          checkbox={mobile}
          data={sortList}
          checked={selectSortValue}
          handleChange={(e: any) =>
            updateSelectValue(undefined, e.target.value)
          }
        />
      )}
    </>
  );
};

const mapStateToProps = (state: initialStateInterface) => {
  return {
    selectRegionValue: state.selectRegionValue,
    selectSortValue: state.selectSortValue,
  };
};

const mapDispatchToProps = {
  updateSelectValue,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationSelect);

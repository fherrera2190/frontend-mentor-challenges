import { useState } from "react";
import { Regions } from "./Regions";
import { FilterProps } from "../interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

export const Filter = ({ changeRegion }: FilterProps) => {
  const [filterStatus, setFilterStatus] = useState(false);

  const handleStatus = () => {
    setFilterStatus(!filterStatus);
  };

  return (
    <div className={`filter`} onClick={handleStatus}>
      <small>
        Filter by Region
        <FontAwesomeIcon icon={filterStatus ? faAngleDown : faAngleUp} />
      </small>

      {filterStatus && <Regions changeRegion={changeRegion} />}
    </div>
  );
};

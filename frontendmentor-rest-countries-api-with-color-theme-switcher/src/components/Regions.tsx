import { RegionsProps } from "../interfaces";
import { Region } from "./Region";

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

export const Regions = ({
  changeRegion,
}: RegionsProps) => {
  return (
    <div className="regions">
      {regions.map((region) => (
        <Region key={region} region={region} changeRegion={changeRegion} />
      ))}
    </div>
  );
};

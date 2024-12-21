import { RegionProps } from "../interfaces";

export const Region = ({ region, changeRegion }: RegionProps) => {
  const handleClick = () => {
    changeRegion(region);
  };

  return <button onClick={handleClick}>{region}</button>;
};

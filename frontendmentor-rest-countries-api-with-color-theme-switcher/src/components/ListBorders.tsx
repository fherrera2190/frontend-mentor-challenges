import { ListBordersProps } from "../interfaces/ListBordersProps";
import { ButtonBorder } from "./ButtonBorder";

export const ListBorders = ({ borders }: ListBordersProps) => {
  return (
    <>
      {borders?.map((border) => (
        <ButtonBorder key={border} border={border} />
      ))}
    </>
  );
};

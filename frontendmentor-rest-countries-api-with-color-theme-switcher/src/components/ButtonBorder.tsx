import { Link } from "react-router-dom";
import './ButtonBorder.css'
export const ButtonBorder = ({ border }: { border: string }) => {
  return (
    <Link to={`/country/${border}`}  className="border">
      {border}
    </Link>
  );
};

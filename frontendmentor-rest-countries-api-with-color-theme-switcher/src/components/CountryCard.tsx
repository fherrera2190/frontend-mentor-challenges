import { Link } from "react-router-dom";
import { Country } from "../interfaces";
import "./CountryCard.css";

export const CountryCard = ({
  alpha2Code,
  name,
  population,
  region,
  capital,
  flags,
}: Country) => {
  return (
    <Link to={`/country/${alpha2Code}`} className="country-card">
      <div className="flag">
        <img src={flags.png} alt="" loading="lazy" />
      </div>
      <h4>{name}</h4>

      <div className="info">
        <p>
          <strong>Population: </strong> <small>{population}</small>
        </p>
        <p>
          <strong>Region: </strong> <small>{region}</small>
        </p>

        <p>
          <strong> Capital: </strong> <small>{capital}</small>
        </p>
      </div>
    </Link>
  );
};

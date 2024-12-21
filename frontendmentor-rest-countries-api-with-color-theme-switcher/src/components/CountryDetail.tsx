import { CountryDetailProps } from "../interfaces/CountryDetail";
import { ListBorders } from "./ListBorders";

export const CountryDetail = ({ pais }: CountryDetailProps) => {
  return (
    <div className="country-page">
      <div className="flag">
        <img src={pais.flags.svg} loading="lazy" alt={`${pais.name}`} />
      </div>
      <div className="info">
        <h1>{pais.name}</h1>
        <div className="details">
          <div className="left">
            <p>
              <strong>Native Name:</strong> {pais.nativeName}
            </p>
            <p>
              <strong>Population:</strong> {pais.population}
            </p>
            <p>
              <strong>Region:</strong> {pais.region}
            </p>
            <p>
              <strong>Sub Region:</strong> {pais.subregion}
            </p>
            <p>
              <strong>Capital:</strong> {pais.capital}
            </p>
          </div>
          <div className="right">
            <p>
              <strong>Top Level Domain:</strong> {pais.topLevelDomain}
            </p>
            <p>
              <strong>Currencies: </strong>
              {pais.currencies[0].name}
            </p>
            <p>
              <strong>Languages: </strong>
              {pais.languages.map((lang) => lang.name).join(", ")}
            </p>
          </div>
        </div>

        <div className="borders">
          <strong>Border Countries:</strong>
          <div className="borders-list">
            <ListBorders borders={pais.borders} />
          </div>
        </div>
      </div>
    </div>
  );
};

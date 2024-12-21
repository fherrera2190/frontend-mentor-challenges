import { ListCountriesProps } from "../interfaces/";
import { CountryCard } from "./CountryCard";
import "./ListCountries.css";
export const ListCountries = ({ countries }: ListCountriesProps) => {
  return (
    <div className="countries">
      {countries?.length > 0 ? (
        countries.map((country) => (
          <CountryCard key={country.alpha2Code} {...country} />
        ))
      ) : (
        <p>No countries</p>
      )}
    </div>
  );
};

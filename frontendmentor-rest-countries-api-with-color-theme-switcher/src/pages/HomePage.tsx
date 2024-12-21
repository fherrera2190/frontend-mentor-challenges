import { Filter, ListCountries, Search } from "../components";
import { useFetchCountries } from "../hooks/useFetchCountries";
import { MainLayout } from "../layouts/MainLayout";
import './HomePage.css'
const baseUrl = import.meta.env.VITE_URL_API_PAISES;
export const HomePage = () => {
  const { countries, getByName, getByRegion } = useFetchCountries(baseUrl);

  return (
    <MainLayout>
      <div className="options">
        <Search searchCountry={getByName} />
        <Filter changeRegion={getByRegion} />
      </div>
      <ListCountries countries={countries} />
    </MainLayout>
  );
};

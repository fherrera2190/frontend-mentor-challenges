import { useEffect, useState } from "react";
import { getData } from "../helpers/getData";
import { Country } from "../interfaces";

export const useFetchCountries = (url: string) => {
  const [countries, setCountries] = useState<Country[]>([]);

  const getAllCountries = async () => {
    const paises = (await getData(url + "/all")) as Country[];
    setCountries(paises);
  };

  const getByRegion = async (region: string) => {
    const paises = (await getData(url + "/region/" + region)) as Country[];
    setCountries(paises);
  };
  const getByName = async (name: string) => {
    const paises = (await getData(url + "/name/" + name)) as Country[];
    setCountries(paises);
  };
  const getByAlpha = async (alpha: string) => {
    const paises = (await getData(url + "/alpha/" + alpha)) as Country[];
    setCountries(paises);
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  return {
    countries,
    getByRegion,
    getByName,
    getByAlpha,
  };
};

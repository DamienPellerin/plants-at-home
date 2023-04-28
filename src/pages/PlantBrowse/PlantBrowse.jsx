import { PlantsAPI } from "../../api/plants";
import { useEffect, useState } from "react";
import { SpeciesList } from "../../components/SpeciesList/SpeciesList";
import { Header } from "../../components/Header/Header";
import s from "./style.module.css";

export function PlantBrowse() {
  const [species, setSpecies] = useState([]);

  async function fetchSpecies() {
    const species = await PlantsAPI.fetchSpecies();
    setSpecies(species.data);
  }
  useEffect(() => {
    fetchSpecies();
  }, []);

  return (
    <>
      <div>
        <Header />
        <SpeciesList species={species} />
      </div>
    </>
  );
}

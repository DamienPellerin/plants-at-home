import { PlantsAPI } from "../../api/plants";
import { useEffect, useState } from "react";
import { SpeciesList } from "../../components/SpeciesList/SpeciesList";
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
        <SpeciesList species={species} />
      </div>
      <div></div>
    </>
  );
}

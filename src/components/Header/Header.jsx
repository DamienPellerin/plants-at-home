import header from "./header.module.css";

import Navbar from "../Navbar/Navbar";
import { PlantsAPI } from "../../api/plants";
import { useEffect, useState } from "react";
import { SpeciesList } from "components/SpeciesList/SpeciesList";

export default function Header() {
  const [species, setSpecies] = useState([]);

  async function fetchSpecies() {
    const species = await PlantsAPI.fetchSpecies();
    setSpecies(species.data);
    console.log("toto", species);
  }
  useEffect(() => {
    fetchSpecies();
  }, []);

  console.log("especes", species);
  return (
    <>
      <div className={header.container}>
        <Navbar />
      </div>
      <div>
        <SpeciesList species={species} />
      </div>
      <div></div>
    </>
  );
}

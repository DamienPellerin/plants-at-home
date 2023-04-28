import { PlantsAPI } from "../../api/plants";
import { useEffect, useState } from "react";
import { SpeciesList } from "../../components/SpeciesList/SpeciesList";
import { Header } from "../../components/Header/Header";
import { ButtonPreviousPage } from "components/ButtonPage/ButtonPreviousPage";
import { ButtonNextPage } from "components/ButtonPage/ButtonNextPage";
import s from "./style.module.css";

export function PlantBrowse() {
  const [currentPage, setCurrentPage] = useState(1);
  const [species, setSpecies] = useState([]);

  async function fetchSpecies() {
    const species = await PlantsAPI.fetchSpecies(currentPage);
    setSpecies(species.data);
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchSpecies();
  }, [currentPage]);

  function handleNextPage() {
    setCurrentPage(currentPage + 1);
  }

  function handlePrevPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  return (
    <>
      <div>
        <Header />
        <SpeciesList species={species} />
      </div>
      <div className={s.btn}>
        <ButtonPreviousPage
          currentPage={currentPage}
          onClick={handlePrevPage}
        />
        <ButtonNextPage currentPage={currentPage} onClick={handleNextPage} />
      </div>
    </>
  );
}
//<ButtonNextPage onClick={handleNextPage()} />

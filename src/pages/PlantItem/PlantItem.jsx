import { useParams } from "react-router-dom";
import { PlantsAPI } from "../../api/plants";
import { useEffect, useState } from "react";
import s from "./style.module.css";

export function PlantItem(props) {
  const { id } = useParams();
  const [plant, setPlant] = useState();

  useEffect(() => {
    async function plantItem() {
      const plantData = await PlantsAPI.plantItem(id);
      setPlant(plantData);
    }

    plantItem();
  }, [id]);
  console.log("bon", plant);
  return (
    <div className={s.container}>
      {plant ? (
        <p>Espéce : {plant.data.common_name}</p>
      ) : (
        <p>Plant not found</p>
      )}
      {plant ? (
        <p>Famille : {plant.data.family.name}</p>
      ) : (
        <p>Plant not found</p>
      )}
      {plant ? <p>Genre : {plant.data.genus.name}</p> : <p>Plant not found</p>}

      {plant ? <img src={plant.data.image_url} /> : <p>Plant not found</p>}
      {plant ? (
        <p>Observations : {plant.data.main_species.observations}</p>
      ) : (
        <p>Plant not found</p>
      )}
    </div>
  );
}

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

  return (
    <div className={s.container}>
      {plant ? (
        <p className={s.species}>Espéce : {plant.data.common_name}</p>
      ) : (
        <p>Plant not found</p>
      )}
      {plant ? (
        <p className={s.family}>Famille : {plant.data.family.name}</p>
      ) : (
        <p>Plant not found</p>
      )}
      {plant ? (
        <p className={s.genus}>Genre : {plant.data.genus.name}</p>
      ) : (
        <p>Plant not found</p>
      )}

      {plant ? (
        <img src={plant.data.image_url} className={s.img} />
      ) : (
        <p>Plant not found</p>
      )}
      {plant ? (
        <p>Observations : {plant.data.main_species.observations}</p>
      ) : (
        <p>Plant not found</p>
      )}
    </div>
  );
}

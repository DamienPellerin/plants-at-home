import { useParams } from "react-router-dom";
import { PlantsAPI } from "../../api/plants";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
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
    <>
      <Header />
      <div className={s.body}>
        <h2 className={s.title}>DESCRIPTION</h2>
        <div className={s.container}>
          <div className={s.containerImg}>
            {plant ? (
              <img src={plant.data.image_url} className={s.img} />
            ) : (
              <p>Plant not found</p>
            )}
          </div>

          <div className={s.containerDescription}>
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
              <p>Observations : {plant.data.main_species.observations}</p>
            ) : (
              <p>Plant not found</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

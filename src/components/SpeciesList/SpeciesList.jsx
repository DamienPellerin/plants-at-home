import { useNavigate } from "react-router-dom";
import s from "./species.module.css";

export function SpeciesList({ species }) {
  const navigate = useNavigate();
  return (
    <div className={s.list}>
      {species.map((specie) => {
        return (
          <div className={s.container} key={specie.id}>
            <img
              className={s.img}
              src={specie.image_url}
              alt="photos"
              onClick={() => navigate("/plante/" + specie.id)}
            />
            <div className={s.title}>{specie.common_name}</div>
            <div>{specie.id}</div>
          </div>
        );
      })}
    </div>
  );
}

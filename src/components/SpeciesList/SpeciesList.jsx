import { useNavigate } from "react-router-dom";
import s from "./species.module.css";

export function SpeciesList({ species }) {
  const navigate = useNavigate();
  return (
    <div className={s.body}>
      <h1 className={s.title}>ESPECES</h1>
      <div className={s.line_span}>
        <span className={s.line}></span>
      </div>
      <div className={s.list}>
        {species.map((specie) => {
          return (
            <div className={s.container} key={specie.id}>
              <div className={s.subtitle}>
                {specie.common_name && specie.common_name.toUpperCase()}
              </div>
              <img
                className={s.img}
                src={specie.image_url}
                alt="photos"
                onClick={() => navigate("/plante/" + specie.id)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

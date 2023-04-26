import s from "./species.module.css";

export function SpeciesList({ species }) {
  console.log(species);
  return (
    <div className={s.list}>
      {species.map((specie) => {
        return (
          <div className={s.container}>
            <img className={s.img} src={specie.image_url} alt="photos" />
            <div className={s.title}>{specie.common_name}</div>
          </div>
        );
      })}
    </div>
  );
}

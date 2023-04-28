import s from "./style.module.css";
import { useNavigate } from "react-router-dom";

export function ButtonVisit() {
  const navigate = useNavigate();
  return (
    <button className={s.btn} onClick={() => navigate("/plante")}>
      Let's Go
    </button>
  );
}

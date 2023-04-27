import { Navbar } from "../Navbar/Navbar";
import s from "./style.module.css";

export function Header() {
  return (
    <>
      <div className={s.container}>
        <Navbar />
      </div>
    </>
  );
}

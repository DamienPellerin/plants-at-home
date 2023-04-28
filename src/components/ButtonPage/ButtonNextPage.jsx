import s from "./style.module.css";

export function ButtonNextPage({ currentPage, onClick }) {
  function handleNextPage() {
    onClick(currentPage + 1);
  }
  return (
    <button className={s.btn} onClick={handleNextPage}>
      Suivant
    </button>
  );
}

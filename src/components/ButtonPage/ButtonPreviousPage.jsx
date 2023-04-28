import s from "./style.module.css";

export function ButtonPreviousPage({ currentPage, onClick }) {
  function handlePrevPage() {
    if (currentPage > 1) {
      onClick(currentPage - 1);
    }
  }
  return (
    <button className={s.btn} onClick={handlePrevPage}>
      Précédent
    </button>
  );
}

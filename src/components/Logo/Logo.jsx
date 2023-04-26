import logo from "./logo.module.css";

export default function Logo({ image, title }) {
  return (
    <>
      <div className={logo.container}>
        <img src={image} className={logo.img} alt="logo" />
        <span>{title}</span>
      </div>
    </>
  );
}

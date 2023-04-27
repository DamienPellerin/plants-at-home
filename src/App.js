import { Outlet } from "react-router-dom";
import { Header } from "../src/components/Header/Header";
import "./App.css";

export function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;

import { Outlet } from "react-router-dom";
import { Header } from "../src/components/Header/Header";
import { Presentation } from "./pages/Presentation/Presentation";
import "./App.css";

export function App() {
  return (
    <div className="App">
      <Header />
      <Presentation />
      <Outlet />
    </div>
  );
}

export default App;

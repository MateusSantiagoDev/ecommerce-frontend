import "../src/Assets/Style.css";
import { Home } from "./Pages/Home/Home";
import { Header } from "./Header/Header";

export function Main() {
  return (
    <div className="div_Main">
      <div className="div_main-header">
        <Header />
      </div>
      <Home />
    </div>
  );
}

import "./Header.css";
import { BsSearch } from "react-icons/bs";
import { MdAddShoppingCart } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo2 from "../Assets/logo/logo2.png";

export function Header() {
  const navigate = useNavigate();
  const [state, setState] = useState(false);

  function handleClick() {
    setState(!state);
  }

  return (
    <div className="div_header">
      <div className="div_logo-form">
        <div className="div_logo">
          <img src={logo2} alt="logo" />
        </div>
        <div>
          <form className="form_header">
            <input
              className="input_header"
              type="search"
              placeholder="Buscar por produtos"
            />
            <button className="button_header-search">
              <BsSearch />
            </button>
          </form>
        </div>
        <div className="div_header-cart">
          <MdAddShoppingCart size={35} />
        </div>
      </div>
      <div className="div_menu">
        <ul className="ul_header">
          <li className="li_header categorias">
            <button
              style={
                state
                  ? { backgroundColor: "blueviolet" }
                  : { backgroundColor: "rgb(223, 223, 126)" }
              }
              onClick={handleClick}
            >
              {!state ? <span className="categoria1">Categorias</span> : null}
            </button>
          </li>
          <li className="li_header">
            <button
              onClick={() => {
                navigate("/sell");
              }}
            >
              Vender
            </button>
          </li>
          <li className="li_header">
            <button>Fale conosco</button>
          </li>
        </ul>
      </div>
      {state ? (
        <div className="div_home-mobile">
          <div className="div_mobile">
            <div className="div_categoria0">
              <span className="categoria0">Categorias</span>
              <IoIosCloseCircle className="close_mobile-header" onClick={handleClick} />
            </div>
            <ul className="ul_mobile-header">
              <li className="li_mobile-header">Tecnologia</li>
              <li className="li_mobile-header">Casa e móveis</li>
              <li className="li_mobile-header">Eletrodomésticos</li>
              <li className="li_mobile-header">Esporte</li>
              <li className="li_mobile-header">Beleza</li>
              <li className="li_mobile-header">Ferramentas</li>
              <li className="li_mobile-header">Construção</li>
              <li className="li_mobile-header">Moda</li>
              <li className="li_mobile-header">Brinquedos</li>
              <li className="li_mobile-header">Diversos</li>
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
}

import "./Home.css";
/* import { motion } from "framer-motion"; */
import { useState, useEffect, useRef } from "react";
import chevron from "../../Assets/images/chevron.png";
import parcerias from "../../Assets/logo/parcerias.png";
import banner1 from "../../Assets/images/banner1.jpg";
import banner2 from "../../Assets/images/banner2.jpg";
import banner4 from "../../Assets/images/banner4.jpg";
import banner5 from "../../Assets/images/banner5.jpg"; 
import logo_pix from "../../Assets/images/logo_pix.png";
import logo_boleto from "../../Assets/images/logo_boleto.png";
import logo_master from "../../Assets/images/logo_master.png";
import logo_visa from "../../Assets/images/logo_visa.png";

/* import banner2 from "../../../public/assets/images/banner2.jpg";
import banner4 from "../../../public/assets/images/banner4.jpg";
import banner5 from "../../../public/assets/images/banner5.jpg";
import banner6 from "../../../public/assets/images/banner6.png";
import banner11 from "../../../public/assets/images/banner11.jpg"; */

 
export function Home() {
  const carousel = useRef(null);
  const carousel1 = useRef(null);
  const carousel2 = useRef(null);
  const carousel3 = useRef(null);
  const carousel4 = useRef(null);
  const carousel5 = useRef(null);
  const [data, setData] = useState([]);
  const [parceiros, setParceiros] = useState([]);
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/static/shoes.json")
      .then((response) => response.json())
      .then(setData);

    fetch("http://localhost:3000/static/parceiros.json")
      .then((response) => response.json())
      .then(setParceiros);

      fetch("http://localhost:3000/static/banner.json")
      .then((response) => response.json())
      .then(setBanner);
  }, []);

  if (!data || !data.length) {
    return null;
  }

  /*   useEffect(() => {
    fetch("http://localhost:3000/static/parceiros.json")
      .then((response) => response.json())
      .then(setParceiros);
  }, []); */

  if (!parceiros || !parceiros.length) {
    return null;
  }

  if (!banner || !banner.length) {
    return null;
  }

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel1.current.scrollLeft -= carousel1.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel1.current.scrollLeft += carousel1.current.offsetWidth;
  };

  const handleLeftClick2 = (e) => {
    e.preventDefault();
    carousel2.current.scrollLeft -= carousel2.current.offsetWidth;
  };

  const handleRightClick2 = (e) => {
    e.preventDefault();
    carousel2.current.scrollLeft += carousel2.current.offsetWidth;
  };

  const handleLeftClick3 = (e) => {
    e.preventDefault();
    carousel3.current.scrollLeft -= carousel3.current.offsetWidth;
  };

  const handleRightClick3 = (e) => {
    e.preventDefault();
    carousel3.current.scrollLeft += carousel3.current.offsetWidth;
  };

  const handleLeftClick4 = (e) => {
    e.preventDefault();
    carousel4.current.scrollLeft -= carousel4.current.offsetWidth;
  };

  const handleRightClick4 = (e) => {
    e.preventDefault();
    carousel4.current.scrollLeft += carousel4.current.offsetWidth;
  };

  const handleLeftClick5 = (e) => {
    e.preventDefault();
    carousel5.current.scrollLeft -= carousel5.current.offsetWidth;
  };

  const handleRightClick5 = (e) => {
    e.preventDefault();
    carousel5.current.scrollLeft += carousel5.current.offsetWidth;
  };

  const handlescrollleft = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handlescrollright = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <div>
      <div className="slider">
        <div className="wrapper">
          <img
            onClick={handlescrollleft}
            className="chevron_slide chevron_slide-left"
            src={chevron}
            alt="slide-left"
          />
          <div className="carousel" ref={carousel}>
            <img src={banner1} alt="img" />
            <img src={banner2} alt="img" />
            <img src={banner4} alt="img" />
            <img src={banner5} alt="img" />
          </div>
          <img
            onClick={handlescrollright}
            className="chevron_slide chevron_slide-right"
            src={chevron}
            alt="slide-right"
          />
        </div>
      </div>

      <div className="div_home-propagandas">
          <img src={logo_pix} alt="formas de pagamento" />
          <img src={logo_master} alt="formas de pagamento" />
          <img src={logo_visa} alt="formas de pagamento" />
          <img src={logo_boleto} alt="formas de pagamento" />
        </div>



      <div className="container">
        <div>
          <img src={parcerias} alt="empresa" />
        </div>
        <div className="carousell" ref={carousel1}>
          {data.map((el) => {
            const { id, name, image, price, oldPrice } = el;
            return (
              <div className="item" key={id}>
                <div className="image">
                  <img src={image} alt="img" />
                </div>
                <div className="info">
                  <span className="name">{name}</span>
                  <span className="oldPrice">R$ {oldPrice}</span>
                  <span className="price">R$ {price}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="buttons">
          <button onClick={handleLeftClick}>
            <img src={chevron} alt="scroll-left" />
          </button>
          <button onClick={handleRightClick}>
            <img src={chevron} alt="scroll-right" />
          </button>
        </div>
<div>
  <img src={banner1} alt="banner" />
</div>

        <div>
          <img src={parcerias} alt="empresa" />
        </div>
        <div className="carousell" ref={carousel2}>
          {data.map((el) => {
            const { id, name, image, price, oldPrice } = el;
            return (
              <div className="item" key={id}>
                <div className="image">
                  <img src={image} alt="img" />
                </div>
                <div className="info">
                  <span className="name">{name}</span>
                  <span className="oldPrice">R$ {oldPrice}</span>
                  <span className="price">R$ {price}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="buttons">
          <button onClick={handleLeftClick2}>
            <img src={chevron} alt="scroll-left" />
          </button>
          <button onClick={handleRightClick2}>
            <img src={chevron} alt="scroll-right" />
          </button>
        </div>
        <div>
          <img src={parcerias} alt="empresa" />
        </div>
        <div className="carousell" ref={carousel3}>
          {data.map((el) => {
            const { id, name, image, price, oldPrice } = el;
            return (
              <div className="item" key={id}>
                <div className="image">
                  <img src={image} alt="img" />
                </div>
                <div className="info">
                  <span className="name">{name}</span>
                  <span className="oldPrice">R$ {oldPrice}</span>
                  <span className="price">R$ {price}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="buttons">
          <button onClick={handleLeftClick3}>
            <img src={chevron} alt="scroll-left" />
          </button>
          <button onClick={handleRightClick3}>
            <img src={chevron} alt="scroll-right" />
          </button>
        </div>
        <div>
          <img src={parcerias} alt="empresa" />
        </div>
        <div className="carousell" ref={carousel4}>
          {data.map((el) => {
            const { id, name, image, price, oldPrice } = el;
            return (
              <div className="item" key={id}>
                <div className="image">
                  <img src={image} alt="img" />
                </div>
                <div className="info">
                  <span className="name">{name}</span>
                  <span className="oldPrice">R$ {oldPrice}</span>
                  <span className="price">R$ {price}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="buttons">
          <button onClick={handleLeftClick4}>
            <img src={chevron} alt="scroll-left" />
          </button>
          <button onClick={handleRightClick4}>
            <img src={chevron} alt="scroll-right" />
          </button>
        </div>


        <div className="div_home-propagandas">
          <img src={logo_pix} alt="formas de pagamento" />
          <img src={logo_master} alt="formas de pagamento" />
          <img src={logo_visa} alt="formas de pagamento" />
          <img src={logo_boleto} alt="formas de pagamento" />
        </div>


        <div className="div_destaques-log-parceiro">
          <img src={parcerias} alt="empresa" />
        </div>
        <div className="carousell" ref={carousel5}>
          {data.map((el) => {
            const { id, name, image, price, oldPrice } = el;
            return (
              <div className="item" key={id}>
                <div className="image">
                  <img src={image} alt="img" />
                </div>
                <div className="info">
                  <span className="name">{name}</span>
                  <span className="oldPrice">R$ {oldPrice}</span>
                  <span className="price">R$ {price}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="buttons">
          <button onClick={handleLeftClick5}>
            <img src={chevron} alt="scroll-left" />
          </button>
          <button onClick={handleRightClick5}>
            <img src={chevron} alt="scroll-right" />
          </button>
        </div>
        <div className="carousell" ref={carousel5}>
          {data.map((el) => {
            const { id, name, image, price, oldPrice } = el;
            return (
              <div className="item" key={id}>
                <div className="image">
                  <img src={image} alt="img" />
                </div>
                <div className="info">
                  <span className="name">{name}</span>
                  <span className="oldPrice">R$ {oldPrice}</span>
                  <span className="price">R$ {price}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="buttons">
          <button onClick={handleLeftClick5}>
            <img src={chevron} alt="scroll-left" />
          </button>
          <button onClick={handleRightClick5}>
            <img src={chevron} alt="scroll-right" />
          </button>
        </div>
        <div className="carousell" ref={carousel5}>
          {data.map((el) => {
            const { id, name, image, price, oldPrice } = el;
            return (
              <div className="item" key={id}>
                <div className="image">
                  <img src={image} alt="img" />
                </div>
                <div className="info">
                  <span className="name">{name}</span>
                  <span className="oldPrice">R$ {oldPrice}</span>
                  <span className="price">R$ {price}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="buttons">
          <button onClick={handleLeftClick5}>
            <img src={chevron} alt="scroll-left" />
          </button>
          <button onClick={handleRightClick5}>
            <img src={chevron} alt="scroll-right" />
          </button>
        </div>
        <div className="carousell" ref={carousel5}>
          {data.map((el) => {
            const { id, name, image, price, oldPrice } = el;
            return (
              <div className="item" key={id}>
                <div className="image">
                  <img src={image} alt="img" />
                </div>
                <div className="info">
                  <span className="name">{name}</span>
                  <span className="oldPrice">R$ {oldPrice}</span>
                  <span className="price">R$ {price}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="buttons">
          <button onClick={handleLeftClick5}>
            <img src={chevron} alt="scroll-left" />
          </button>
          <button onClick={handleRightClick5}>
            <img src={chevron} alt="scroll-right" />
          </button>
        </div>
      </div>

      <div className="div_home-propagandas">
          <img src={logo_pix} alt="formas de pagamento" />
          <img src={logo_master} alt="formas de pagamento" />
          <img src={logo_visa} alt="formas de pagamento" />
          <img src={logo_boleto} alt="formas de pagamento" />
        </div>

      <h1 className="h1_parceiros-home">Parceiros</h1>
      <div className="parceiros">
        {parceiros.map((el) => {
          return (
            <div className="div1_parceiros-home" key={el.id}>
              <img src={el.image} alt="parceiros" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

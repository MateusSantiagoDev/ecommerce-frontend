import "./Home.css";
/* import { motion } from "framer-motion"; */
import { useState, useEffect, useRef } from "react";
import chevron from "../../Assets/images/chevron.png";
import parcerias from "../../Assets/logo/parcerias.png";
/* import img1 from "../../Assets/images/img1.jpg"
import img2 from "../../Assets/images/img2.jpg"
import img3 from "../../Assets/images/img3.jpg"
import img4 from "../../Assets/images/img4.jpg"
  */
export function Home() {
  const carousel1 = useRef(null);
  const carousel2 = useRef(null);
  const carousel3 = useRef(null);
  const carousel4 = useRef(null);
  const carousel5 = useRef(null);
  const [data, setData] = useState([]);  
  const [ parceiros, setParceiros ] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/static/shoes.json")
      .then((response) => response.json())
      .then(setData);

      fetch("http://localhost:3000/static/parceiros.json")
      .then((response) => response.json())
      .then(setParceiros);
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

  return (
    <div>
      <div className="slider">
      
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
      <div>
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
    <h1>Parceiros</h1>
    <div className="parceiros">      
      {parceiros.map((el) => {
        return(
        <div className="div1_parceiros-home" key={el.id}>
          <img src={el.image} alt="parceiros" />
        </div>)
      })}
    </div>
    </div>
  );
}

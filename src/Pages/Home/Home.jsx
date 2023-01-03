import "./Home.css";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import img1 from "../../Assets/images/img1.jpg";
import img2 from "../../Assets/images/img2.jpg";
import img3 from "../../Assets/images/img3.jpg";
import img4 from "../../Assets/images/img4.jpg";
import img5 from "../../Assets/images/img5.jpg";
import img6 from "../../Assets/images/img6.jpg";
import img7 from "../../Assets/images/img7.jpg";
import img8 from "../../Assets/images/img8.jpg";
import img9 from "../../Assets/images/img9.jpg";
import img10 from "../../Assets/images/img10.jpg";
import img11 from "../../Assets/images/img11.jpg";
import img12 from "../../Assets/images/img12.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];
/* const images2 = [img7, img8, img9, img10, img11, img12]; */

export function Home() {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);
  return (
    <div className="div_home">
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="inner"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.3 }}
        >
          {images.map((el) => (
            <motion.div className="item" key={el}>
              <img src={el} alt="images1" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <div>
        <h1>Eletronicos</h1>
      </div>
      <section className="section1-home">
        <div className="div1_home"></div>
        <div className="div1_home"></div>
        <div className="div1_home"></div>
        <div className="div1_home"></div>
        <div className="div1_home"></div>
        <div className="div1_home"></div>
        <div className="div1_home"></div>
        <div className="div1_home"></div>
        <div className="div1_home"></div>
        <div className="div1_home"></div>
      </section>
      <div>
        <h1>Moda</h1>
      </div>
      <section className="section2-home">
        <div className="div1_home"></div>
        <div className="div1_home"></div>
        <div className="div1_home"></div>
        <div className="div1_home"></div>
        <div className="div1_home"></div>
        <div className="div1_home"></div>
        <div className="div1_home"></div>
        <div className="div1_home"></div>
        <div className="div1_home"></div>
        <div className="div1_home"></div>
      </section>
      <div>
        <h1>Destaques</h1>
        <section className="section3-home">
          <article className="article_destaque">
            <div></div>
          </article>
          <article>
            <div></div>
          </article>
          <article>
            <div></div>
          </article>
          <article>
            <div></div>
          </article>
          <article>
            <div></div>
          </article>
        </section>
      </div>
    </div>
  );
}

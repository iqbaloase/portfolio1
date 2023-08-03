import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio_1.png";
import IMG2 from "../../assets/portfolio_2.png";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Mobiz ERP System</h3>
          <div className="portfolio__item-cta">
            <a
              href="http://github.com"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>DBSO System</h3>
          <div className="portfolio__item-cta">
            <a
              href="http://github.com"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portfolio;

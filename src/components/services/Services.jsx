import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container service__container">
        <article className="service">
          <div className="service__head">
            <h3>Desktop Application</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Defines system objectives by analyzing user requirements</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Designing and developing new features and report to Mobiz</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Implement User License to Mobiz based on number of simultaneous
                users accessing the application
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Recommend system solutions by comparing advantages and
                disadvantage of custom developmen
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Bug Fixing</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>In-house application development to support production</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Research new technologies</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Develop C# application: Winform, WPF and Silverligh.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Develop and maintenance inventory and selling management system.
              </p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Layout and Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Layout Book and Design Cover..</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services;

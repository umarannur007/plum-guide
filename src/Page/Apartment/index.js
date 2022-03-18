import React from 'react';
import Icon from "../../Components/Icon";

import "./index.scss"
import Slider from "./Slider";

const Apartment = () => {
  return (

    <section className={"apartment"}>
      <div className="apartment__details">
        <div>
          <h1 className="apartment__name">Monsieur Didot</h1>
          <div className="apartment__amenities">
            <span>4 people</span>
            <span>2 bedrooms</span>
            <span>2 bathrooms</span>
            <span>Private terrasse</span>
            <span>Peaceful</span>
          </div>
          <div className="apartment__info">
            <div>
              <Icon name={"icon-location5"}/>
              <span>Notthing Hill, London</span>
            </div>
            <div>
              <Icon name={"icon-train1"}/>
              <span>Walk 6 mins (Westbourne Park Station)</span>
            </div>
            <div>
              <Icon name={"icon-stairs"}/>
              <span>Stairs</span>
            </div>
          </div>
        </div>
      </div>
      <Slider/>
    </section>

  );
};

export default Apartment;
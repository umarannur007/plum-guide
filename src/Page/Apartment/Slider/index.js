import React, {useState} from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./index.scss"
import Icon from "../../../Components/Icon";

const ApartmentSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(1)
  let sliderRef;

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    afterChange: i => setCurrentSlide(i+1)
  };
  const slider = data.map((image, i) => (

    <div key={i+1} className={"slider__img"}>
      <img
        src={image}
        alt=""/>
    </div>
  ))
  return (
    <div className={"slider"}>
      <div className="slider__arr slider__arr--left" onClick={() => sliderRef.slickPrev()}>
        <Icon name={"icon-arrow-left7"}/>
      </div>
      <Slider ref={c => (sliderRef = c)} {...settings}>
        {slider}
      </Slider>
      <div className="slider__arr slider__arr--right" onClick={() => sliderRef.slickNext()}>
        <div className={"slider__counter"}>{currentSlide}/6</div>
        <Icon name={"icon-arrow-right7"}/>
      </div>
    </div>
  );
}

const data = [
  "https://images.trvl-media.com/hotels/38000000/37020000/37017000/37016901/09f4a5bf.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
  "https://images.trvl-media.com/hotels/38000000/37020000/37017000/37016901/e346a793.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
  "https://images.trvl-media.com/hotels/38000000/37020000/37017000/37016901/be03e723.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
  "https://images.trvl-media.com/hotels/38000000/37020000/37017000/37016901/12193acf.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
  "https://images.trvl-media.com/hotels/38000000/37020000/37017000/37016901/5bafcc3c.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
  "https://images.trvl-media.com/hotels/38000000/37020000/37017000/37016901/b8582ddf.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium"
]

export default ApartmentSlider;
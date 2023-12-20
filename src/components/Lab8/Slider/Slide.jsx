import React from "react";
import SlideText from "./SlideText";
import SlideImage from "./SlideImage";

import "./Slider.scss"

export default function Slide({ data: {  img, title , description, link } }) {
  return (
    <a className="slide" href={link} target="_blank" rel="noreferrer">
      <SlideText title={title} description={description}/>
      <SlideImage src={img} alt={title} />
    </a>
  );
}

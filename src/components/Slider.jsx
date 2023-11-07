import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Style.css'

const Sliderr = ({ children, responsive }) => {
  return <Carousel responsive={responsive} infinite={true}>{children}</Carousel>;
};

export default Sliderr;

import React, { Component } from "react";
import Slider from "react-slick";
import "../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";
import "./DetailSlider.scss";

class DetailSlider extends Component {
  render() {
    const { imgUrl } = this.props;
    const settings = {
      dots: false,
      infinite: 1,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div className="DetailSlider">
        <Slider {...settings}>
          {imgUrl &&
            imgUrl.map((img, idx) => (
              <div key={idx}>
                <img src={img} alt={img} />
              </div>
            ))}
        </Slider>
      </div>
    );
  }
}
export default DetailSlider;

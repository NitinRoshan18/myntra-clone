import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./Slider.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 5 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const sliderImageUrl = [
  //First image url
  {
    url:
      "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2024/3/23/5d789d8e-195d-4cd1-ab70-0dbd5f02a28d1711197634657-Safari-_Aristocrat_and_More.png"
  },
  
  //Second image url
  {
    url:
      "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2024/3/23/f73661bd-f7ef-4e84-af38-cb29e06390861711198246296-Wrogn-_Nautica__MIN_50-70_off.png"
  },
  //Third image url
  {
    url:
      "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2024/3/23/ec982fe4-fe0b-4060-9812-cbdf0eb515401711198246215-Vero_Moda-ONLYMin_50_Off.png"
  },

  //Fourth image url

  {
    url:
      "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2024/3/23/fb5ae44b-e6b6-4e87-a207-52b0bc42ee561711198246000-Tommy_CK__min_30_Off.png"
  },
  //sixth  image
  {
    url:
      "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2024/3/23/d0465100-92db-4412-9d06-5b43b43ad7621711198244474-Allen_Solly-_Van_Heusen_-_Min_45_off.png"
  },
  //seventh image
  {
    url:
      "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2024/3/27/317b7d96-339d-4f9d-993b-9ade915e2a801711533798137-image_png_689387059.png"
  },
  //eighth image
  {
    url:
      "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2024/3/23/5f8dc73d-9258-4eec-b56a-a8d29a92f54e1711198245894-Skechers___Upto_40.png"
  },
  //nineth image
  {
    url:
      "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2024/3/23/a9716720-60c9-4f52-a8b6-77061c4aaa9d1711198244701-Crocs___Min_30.png"
  },
  //tenth image
  {
    url:
      "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2024/3/23/fbfe1342-c528-439c-87f1-1fa83680f6db1711198244953-Freakins-_Slyck-_Bewakoof_-_more_Min_60_off.png"
  },
];
const Slider = () => {
  return (
    <div className="parent">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider" key={index}>
              <img src={imageUrl.url} alt="movie" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Slider;

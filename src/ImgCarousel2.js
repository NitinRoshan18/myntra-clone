import React, { useState, useEffect } from "react";
import "./ImgCarousel.css"; // Import CSS file

const ImgCarousel2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/6b6c7162-0086-4967-90c8-ec4792ec200c1690773011082-Dorothy_Perkin-_Boohoo.png",

    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/2/9699db4e-8162-406a-85ba-e92116f0019f1690955825591-image_png2047004151.png",

    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/92d5e2ec-a736-4bfd-832b-6972121829c91690773010945-Aldo.png",

    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/331d0d67-95de-4e58-b774-add891464af01690773011037-Calvin_Klein.png",

    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/d400d2ce-5755-4c86-96b8-26899aea6ea61690773011130-GANT.png",

    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/d521c019-8fcd-4f36-a56f-7a1b9095e2661690773010958-Antony_Morato.png",

    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/81bcb28d-55f3-4d7b-bb5a-7cf7ee7fd8031690773011370-The_Collective.png",

    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/7aac1f32-1a1a-4ba6-924b-ee1c28553aed1690773011304-Nautica.png",

    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/437645a4-988c-4f53-aff3-b1fdb34938481690773011106-FCUK.png",

    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/0c399e2c-9797-483d-bf6c-0852d5d21db21690773010989-BHPC.png",

    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/044555a5-9987-4a06-8679-8aeb2dd963f91690773011013-boohooMan.png",

    "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/2/805eeb23-ec17-4b50-b798-1244133c02041690955797245-image_png_1993656242.png",
  ];

  const totalSlides = images.length;
  const slidesToShow = 6;
  const autoSlideInterval = 3000; // 3 seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === totalSlides - slidesToShow ? 0 : prevSlide + slidesToShow
      );
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [totalSlides, slidesToShow, autoSlideInterval]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === totalSlides - slidesToShow ? 0 : prevSlide + slidesToShow
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? totalSlides - slidesToShow : prevSlide - slidesToShow
    );
  };

  return (
    <div className="carousel-container">
      <button className="nav-btn" onClick={prevSlide}>
        Previous
      </button>
      <div className="image-container">
        {images
          .slice(currentSlide, currentSlide + slidesToShow)
          .map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className="carousel-image"
              
            />
          ))}
      </div>
      <button className="nav-btn" onClick={nextSlide}>
        Next
      </button>
      <div className="bullet-points">
        {Array.from({ length: Math.ceil(totalSlides / slidesToShow) }).map(
          (_, index) => (
            <span
              key={index}
              onClick={() => goToSlide(index * slidesToShow)}
              className={`bullet ${
                currentSlide >= index * slidesToShow &&
                currentSlide < (index + 1) * slidesToShow
                  ? "active"
                  : ""
              }`}
            ></span>
          )
        )}
      </div>
    </div>
  );
};

export default ImgCarousel2;

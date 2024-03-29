import { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import Title from "../title";
import CardCaroussel from "./cardCaroussel";
import NextArrow from "./NextArrow";
import PreviousArrow from "./PreviousArrow";
function Caroussel3D() {
  const [t] = useTranslation();

  const [slide, setSlide] = useState()
  const sliderRef = useRef();
  useEffect(() => {
    setSlide(sliderRef.current)
  }, [])
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    autoplay: true,
    centerPadding: "0px",
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section className="z-10 bg-primary py-16 flex flex-col items-center">
      <Title title={t('title3')} color="textAnimateWhite" />
      <div className="z-10 w-full" >
        <Slider
          ref={sliderRef}
          {...settings}>
          <CardCaroussel url={"https://hdsg.vercel.app/"} img={"/hdbc.png"} />
          <CardCaroussel url={"https://www.nourrisson-tunisie.tn/"} img={"/nourrisonTN.PNG"} />
          <CardCaroussel url={"https://carbonbasenft.com/"} img={"/nft.PNG"} />
          <CardCaroussel url={"https://mourouj-sport.herokuapp.com/"} img={"/ms.PNG"} />
          <CardCaroussel url={"https://www.nourrisson-diffusion.fr/"} img={"/nourrisonFR.PNG"} />




        </Slider>
      </div>
      <div className="z-10 flex w-full items-center xl:mt-10 justify-center ">
        <PreviousArrow slider={slide} />
        <NextArrow slider={slide} />
      </div>
    </section>
  );
}
export default Caroussel3D
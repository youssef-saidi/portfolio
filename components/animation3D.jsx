import React, { useEffect, useState } from "react";

const Animation3D = () => {
  const [currentImage, setCurrentImage] = useState(1);
  const [changepoint, setchangepoint] = useState(100);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(1);
  const NUMBERIMAGE = 28;
  useEffect(() => {
    const handleScroll = async () => {
      const currentScrollPos = window.pageYOffset;
      setIsScrollingUp(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);

      if (
        !isScrollingUp &&
        window.scrollY >= changepoint &&
        currentImage <= NUMBERIMAGE-1 &&
        currentImage >= 1
      ) {
        setCurrentImage(currentImage + 1);
        setchangepoint(changepoint + 80);
      } else if (
        isScrollingUp &&
        window.scrollY <= changepoint &&
        currentImage <= NUMBERIMAGE  &&
        currentImage >= 2
      ) {
        setCurrentImage(currentImage - 1);
        setchangepoint(changepoint - 80);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);
  return (
    <section className="relative  z-30">
      <div className="fixed top-10">
        <img
          className={
            currentImage !== NUMBERIMAGE
              ? "visible w-screen h-screen"
              : "hidden w-screen h-screen"
          }
          src={`/Img3D/image${currentImage}.png`}
          alt="My Image"
        />
      </div>

      <div
        className={currentImage === NUMBERIMAGE + 1 ? "visible" : "invisible"}
        style={{ paddingTop: window.innerHeight + 800 }}
      ></div>
    </section>
  );
};

export default Animation3D;


import { memo, useState, useEffect } from "react";
import Caroussel3D from "../components/caroussel/Caroussel3D"
import Services from "../components/services";
import Header from "../components/header";
import { useInView } from "react-intersection-observer"
import { useRouter } from 'next/router'
import Skills from "../components/skills";
import Contact from "../components/contact";
import Animation3D from "../components/animation3D";


export default function Home() {
  const router = useRouter();

  const [refHeader, inViewHeader] = useInView();
  const [refServices, inViewServices] = useInView();
  const [refProjects, inViewProjects] = useInView();
  const [refSkills, inViewSkills] = useInView();
  const [refContact, inViewContact] = useInView();
  const [refanimation, inViewanimation] = useInView();

  useEffect(() => {
    // if(inViewHeader){
    //   router.push('/')
    // }else if (inViewServices) {
    //   router.push('/#services')
    // }else if (inViewSkills) {
    //   router.push('/#skills')
    // }else if (inViewProjects) {
    //   router.push('/#projects')
    // }else if (inViewContact) {
    //   router.push('/#contact')
    // }
  }, [inViewHeader, inViewServices, inViewSkills, inViewProjects, inViewContact]);

  // const [currentImage, setCurrentImage] = useState(1);
  // const [changepoint, setchangepoint] = useState(100);
  // const [isScrollingUp, setIsScrollingUp] = useState(false);
  // const [prevScrollPos, setPrevScrollPos] = useState(1);
  // const NUMBERIMAGE = 28;
  // useEffect(() => {
  //   const handleScroll = async () => {
  //     const currentScrollPos = window.pageYOffset;
  //     setIsScrollingUp(prevScrollPos > currentScrollPos);
  //     setPrevScrollPos(currentScrollPos);

  //     if (
  //       !isScrollingUp &&
  //       window.scrollY >= changepoint &&
  //       currentImage <= NUMBERIMAGE - 1 &&
  //       currentImage >= 1
  //     ) {
  //       setCurrentImage(currentImage + 1);
  //       setchangepoint(changepoint + 100);
  //     } else if (
  //       isScrollingUp &&
  //       window.scrollY <= changepoint &&
  //       currentImage <= NUMBERIMAGE &&
  //       currentImage >= 2
  //     ) {
  //       setCurrentImage(currentImage - 1);
  //       setchangepoint(changepoint - 100);
  //     }
  //   };
  //   if ( window.scrollY===0) {
  //     setCurrentImage(1);

  //   }

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [prevScrollPos]);

  return (
    <main className="relative flex flex-col z-10">

      {/* <div className="relative h-screen bg-red-500">
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
      </div>
      <div
        className={currentImage === NUMBERIMAGE ? "visible" : "invisible"}
        style={{ paddingTop: window.innerHeight + 1900 }}
      > */}
        <div ref={refHeader} id="header" ></div>
        <Header />
        <div ref={refServices} id="services"></div>
        <Services />
        <div ref={refSkills} id="skills" className="pt-24"></div>
        <Skills />
        <div ref={refanimation} id="animation" className="pt-24"></div>

        <Caroussel3D />
        <div ref={refContact} id="contact"></div>
        <Contact />
      {/* </div> */}


    </main>
  )
};

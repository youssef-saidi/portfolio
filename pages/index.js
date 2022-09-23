
import { memo, useEffect  } from "react";
import Caroussel3D from "../components/caroussel/Caroussel3D"
import Services from "../components/services";
import Header from "../components/header";
import { useInView } from "react-intersection-observer"
import { useRouter } from 'next/router'
import Skills from "../components/skills";
import Contact from "../components/contact";


export default function  Home() {
  const router = useRouter();

  const [refHeader, inViewHeader] = useInView();
  const [refServices, inViewServices] = useInView();
  const [refProjects, inViewProjects] = useInView();
  const [refSkills, inViewSkills] = useInView();
  const [refContact, inViewContact] = useInView();

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
  }, [inViewHeader,inViewServices,inViewSkills,inViewProjects,inViewContact]);
  return (
    <main className="z-10 ">
      <div ref={refHeader} id="header" ></div>
      <Header />
      <div ref={refServices} id="services"></div>
      <Services />
      <div ref={refSkills} id="skills"></div>
      <Skills />
      <div ref={refProjects} id="projects"></div>
      <Caroussel3D />
      <div ref={refContact} id="contact"></div>
      <Contact />
    </main>
  )
} ;

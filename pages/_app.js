import Layout from '../components/layout'
import '../styles/globals.css'
import Particles from "react-tsparticles";
import AOS from 'aos';
import { useEffect } from 'react'
import "aos/dist/aos.css";


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  },[])

  return <Layout>
    <Component {...pageProps} />
    <Particles
      params={{
        fpsLimit: 60,
        particles: {
          color: {
            value: "#232C33"
          },
          links: {
            enable: true,
            color: "#232C33",
            distance: 100
          },
          move: {
            enable: true
          }
        }
      }}

    />

  </Layout>
}

export default MyApp

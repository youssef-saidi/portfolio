import React from 'react'
import { useTranslation } from 'react-i18next';
import Card from './services/card'
import Title from './title'


const Services = () => {
  const [t] = useTranslation();

  return (
    <section className='relative pt-16' >
      <svg className='relative 2xl:top-6 xl:top-7 lg:top-9 md:top-10 sm:top-12 top-14' width="100%" height="118" viewBox="0 0 2360 118" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1938.46 90.9202C1783.12 70.1593 1620.1 29.2953 1462.89 12.5411C1301.11 -4.74132 1132.37 -3.73467 970.334 12.9298C856.582 24.6209 746.134 43.8967 632.067 54.6509C420.106 74.4096 201.516 64.3827 0 25.6575L0 118H2360V93.8803C2226.64 116.924 2076.23 109.339 1938.46 90.9202Z" fill="#232C33" />
      </svg>


      <svg className='absolute top-36 right-0' width="66" height="286" viewBox="0 0 66 286" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M179.808 10.802C197.784 27.245 202.152 65.409 200.304 97.077C198.288 128.745 189.888 153.511 183.84 180.104C177.624 206.697 173.592 234.914 159.816 255.214C146.04 275.311 122.52 287.288 100.176 285.258C77.832 283.431 56.664 267.597 43.224 247.297C29.952 226.997 24.576 202.231 16.176 177.059C7.77598 152.09 -3.48002 126.715 2.73598 109.663C8.95198 92.611 32.64 83.882 51.624 67.845C70.608 51.808 84.888 28.463 107.568 14.05C130.416 -0.160006 162 -5.641 179.808 10.802Z" fill="#F9F9F9" />
      </svg>

      <div className='bg-primary py-36 flex flex-col items-center'>
        <Title title={t('title2')} color="textAnimateWhite" />
        <div className='grid md:grid-cols-2 grid-cols-1 justify-items-center z-10'>
          <Card img={"/webDesign.png"} title={"Devops"} description={t('service1')} />
          <Card img={"/webDev.png"} title={"Web Dev"} description={t('service2')} /> 
        </div>
      </div>
      <svg className='absolute bottom-48 left-0 ' width="96" height="165" viewBox="0 0 96 165" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M55.9615 15.513C67.1125 22.649 75.8065 36.252 83.5555 52.8655C91.399 69.5905 98.203 89.326 93.7615 104.49C89.32 119.654 73.5385 130.247 58.891 140.282C44.338 150.317 30.919 159.683 15.421 163.139C-0.0769997 166.484 -17.654 163.808 -26.2535 151.432C-34.853 139.167 -34.475 117.201 -31.5455 100.699C-28.616 84.197 -23.135 73.1585 -23.135 55.7645C-23.2295 38.3705 -28.8995 14.7325 -23.0405 5.47804C-17.1815 -3.66495 0.206501 1.57555 15.61 4.58605C31.108 7.59655 44.716 8.37704 55.9615 15.513Z" fill="#F9F9F9" />
      </svg>

      <svg className='relative 2xl:-top-6 xl:-top-7 lg:-top-9 md:-top-10 sm:-top-12 -top-14 rotate-180' width="100%" height="118" viewBox="0 0 2360 118" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1938.46 90.9202C1783.12 70.1593 1620.1 29.2953 1462.89 12.5411C1301.11 -4.74132 1132.37 -3.73467 970.334 12.9298C856.582 24.6209 746.134 43.8967 632.067 54.6509C420.106 74.4096 201.516 64.3827 0 25.6575L0 118H2360V93.8803C2226.64 116.924 2076.23 109.339 1938.46 90.9202Z" fill="#232C33" />
      </svg>
  
    </section>
  )
}

export default Services
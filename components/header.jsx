import Image from 'next/image'
import React from 'react'
import Button from './button'

const Header = () => {
    return (
        <section className="z-10 grid lg:grid-cols-2 grid-cols-1  pt-48 md:px-24 justify-items-center">
            <div className="z-10 flex flex-col lg:items-start items-center" data-aos="fade-right" data-aos-duration="4000"  data-aos-easing="ease-out-cubic">
                <h1 className="z-10 font-extrabold text-3xl z-40" >Hi ! I’m Youssef Saidi</h1>
                <h2 className="z-10 font-semibold text-primary text-header mt-2">A Freelance Web Developer</h2>
                <p className="z-10 font-extralight text-base pt-6 lg:text-start text-center">I'm a highly motivated full-stack web developer/designer with a great passion for creating simple, clean and handy codes. I'm blessed with a good eye for colors composition and typography.
                    Punctual and open-minded developer who adapts easily to various environments and who is open to work alone or in team.</p>
                <div className="z-10 grid grid-cols-2 lg:justify-items-start justify-items-center w-3/4 mt-5">
                    <a href="/SaidiYoussef.pdf" download="Cv-Saidi_Youssef.pdf">
                        <Button title="Download CV" color={"#F5F5F5"} bgcolor={"#2E90E1"} fill={"#232C33"} />
                    </a>
                    <a href="/#contact">
                        <Button title="Contact Me" color={"#F5F5F5"} bgcolor={"#232C33"} fill={"#2E90E1"} />
                    </a>
                </div>

            </div>

            <div className="z-10 relative flex items-center lg:justify-self-end lg:-top-16 top-16" data-aos="fade-left" data-aos-duration="4000"  data-aos-easing="ease-out-cubic">
                <Image className="z-20" alt="Youssef Saidi" src={"/me.png"} height="450" width={350} />
                <svg className="z-10 absolute -top-6 -left-24 z-0 " width="522" height="510" viewBox="0 0 522 510" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_3_29)">
                        <path d="M424.25 12.3494C466.802 30.8394 497.11 76.1696 509.967 123.289C523.131 170.409 518.539 219.616 507.518 264.946C496.497 310.575 478.435 352.326 451.802 391.692C425.168 431.356 389.657 468.932 344.349 487.72C299.347 506.509 244.549 506.807 199.241 488.317C153.933 470.125 117.504 432.847 82.6043 394.376C47.3989 355.905 13.418 315.943 5.76465 271.507C-1.8887 227.072 16.4793 178.163 39.1333 131.938C62.0933 85.4146 88.727 41.5755 128.218 21.5944C168.016 1.61329 220.058 5.192 273.326 3.10442C326.899 1.31507 381.697 -6.43879 424.25 12.3494Z" fill="#2E90E1" />
                    </g>
                    <defs>
                        <filter id="filter0_d_3_29" x="0" y="0" width="522" height="510" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_29" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_29" result="shape" />
                        </filter>
                    </defs>
                </svg>


            </div>

        </section>
    )
}

export default Header
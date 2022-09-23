import { useState, useEffect } from 'react'
import { useRouter } from "next/router";
import Link from 'next/link'





const Navbar = () => {
    const [openNav, setopenNav] = useState(false);
    const [changeNavbar, setchangeNavbar] = useState(false);

    const router = useRouter();
    useEffect(() => {
        if (window.scrollY >= 80) {
            setchangeNavbar(true)

        } else {
            setchangeNavbar(false)
        }
    });

    return (
        <nav className={`bg-white w-screen fixed z-30 ${changeNavbar && "shadow-lg"} `}>
            <div className="z-10 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="z-10 relative flex h-16 items-center justify-between">
                    <div className="z-10 absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button onClick={() => setopenNav(!openNav)} type="button" className="z-10 inline-flex items-center justify-center p-2 text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="z-10 sr-only">Open main menu</span>

                            {!openNav ?
                                <svg className="z-10 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                                :
                                <svg className="z-10 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>}
                        </button>
                    </div>
                    <div className="z-10 flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="z-10 hidden sm:ml-16 sm:block">
                            <ul className="z-10 flex space-x-8 list-none">
                                <li className={router.asPath == "/" ? "active" : "text-black "}>
                                    <Link href="/" className="z-10 py-2 lg:text-lg text-sm font-semibold tracking-wider" aria-current="page">Portfolio</Link>
                                </li>
                                <li className={router.asPath == "/#services" ? "active" : "text-black "}>
                                    <Link href="/#services" className="z-10 py-2 lg:text-lg text-sm font-semibold tracking-wider">Services</Link>
                                </li>
                                <li className={router.asPath == "/#skills" ? "active" : "text-black "}>
                                    <Link href="/#skills" className="z-10 py-2 lg:text-lg text-sm font-semibold tracking-wider">Skills</Link>
                                </li>
                                <li className={router.asPath == "/#projects" ? "active" : "text-black "}>
                                    <Link href="/#projects" className="z-10 py-2 lg:text-lg text-sm font-semibold tracking-wider">Projects</Link>
                                </li>
                                <li className={router.asPath == "/#contact" ? "active" : "text-black "}>
                                    <Link href="/#contact" className="z-10 py-2 lg:text-lg text-sm font-semibold tracking-wider">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="z-10 absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        {/* ----------Icons---------- */}
                        <Link href="https://www.facebook.com/youssefsaidi869/">
                            <svg className='mx-2 hover:fill-blue-500 cursor-pointer' width="25" height="25" viewBox="0 0 47 47" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.5 2.82001C12.079 2.82001 2.82001 12.079 2.82001 23.5C2.82001 33.8682 10.4575 42.4288 20.4093 43.9243V28.9811H15.2929V23.5451H20.4093V19.928C20.4093 13.9393 23.327 11.3101 28.3043 11.3101C30.6882 11.3101 31.9487 11.4868 32.5456 11.5676V16.3128H29.1503C27.0372 16.3128 26.2993 18.3159 26.2993 20.5738V23.5451H32.492L31.6517 28.9811H26.2993V43.9685C36.393 42.5989 44.18 33.9688 44.18 23.5C44.18 12.079 34.921 2.82001 23.5 2.82001Z" />
                            </svg>
                        </Link>
                        <Link href="">
                            <svg className='mx-2 hover:fill-indigo-700 cursor-pointer' width="20" height="20" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.8182 0C5.3 0 0 5.3 0 11.8182V28.1818C0 34.7 5.3 40 11.8182 40H28.1818C34.7 40 40 34.7 40 28.1818V11.8182C40 5.3 34.7 0 28.1818 0H11.8182ZM30.9091 7.27273C31.9091 7.27273 32.7273 8.09091 32.7273 9.09091C32.7273 10.0909 31.9091 10.9091 30.9091 10.9091C29.9091 10.9091 29.0909 10.0909 29.0909 9.09091C29.0909 8.09091 29.9091 7.27273 30.9091 7.27273ZM20 10C25.5182 10 30 14.4818 30 20C30 25.5182 25.5182 30 20 30C14.4818 30 10 25.5182 10 20C10 14.4818 14.4818 10 20 10ZM20 11.8182C15.4909 11.8182 11.8182 15.4909 11.8182 20C11.8182 24.5091 15.4909 28.1818 20 28.1818C24.5091 28.1818 28.1818 24.5091 28.1818 20C28.1818 15.4909 24.5091 11.8182 20 11.8182Z" />
                            </svg>
                        </Link>
                        <Link href="mailto:youssefsaidi869@gmail.com">
                            <svg className='mx-2 hover:fill-red-500 cursor-pointer' width="25" height="35" viewBox="0 0 47 47" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.28 21.9988V21.9866V9.76567L11.1672 9.68201H11.1578L8.5916 7.78321C7.0218 6.61761 4.7846 6.67401 3.3934 8.04641C2.4628 8.96761 1.88 10.246 1.88 11.6654V15.0513L11.28 21.9988ZM35.72 21.9866V21.9988L45.12 15.0513V11.6654C45.12 10.2648 44.556 8.98641 43.6348 8.06521C42.2624 6.69563 40.0957 6.53489 38.5362 7.68639L35.8328 9.68201L35.72 9.76567V21.9866ZM13.16 23.3759L22.9416 30.6064C23.2735 30.8518 23.7275 30.8518 24.0593 30.6064L33.84 23.3759V11.155L23.5 18.8L13.16 11.155V23.3759ZM35.72 24.3357V38.54C35.72 39.0589 36.1411 39.48 36.66 39.48H42.77C44.0681 39.48 45.12 38.4282 45.12 37.13V17.3872L35.72 24.3357ZM11.28 24.3357L1.88 17.3872V37.13C1.88 38.4282 2.93186 39.48 4.23 39.48H10.34C10.8589 39.48 11.28 39.0589 11.28 38.54V24.3357Z" />
                            </svg>
                        </Link>
                        <Link href="https://www.linkedin.com/in/saidi-youssef-0431671a5">
                            <svg className='mx-2 hover:fill-blue-700 cursor-pointer' width="20" height="20" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29.6387 0C39.248 0 40 0.752001 40 10.36V29.7027C40 39.252 39.2533 40 29.7027 40H10.2973C0.746666 40 0 39.252 0 29.7027V10.2973C0 0.746666 0.746666 0 10.2973 0H29.6387ZM13.028 31V14.728H7.97067V31H13.028ZM10.5013 12.4C12.1267 12.4 13.448 11.0787 13.448 9.45067C13.448 7.82533 12.1267 6.504 10.5013 6.504C8.872 6.504 7.552 7.824 7.552 9.45067C7.552 11.0773 8.87067 12.4 10.5013 12.4ZM32 31V22.076C32 17.6947 31.0533 14.324 25.9333 14.324C23.4733 14.324 21.824 15.6733 21.1493 16.952H21.08V14.728H16.228V31H21.2813V22.9493C21.2813 20.8267 21.6853 18.772 24.3173 18.772C26.9107 18.772 26.9453 21.2 26.9453 23.0867V31H32Z" />
                            </svg>
                        </Link>
                        <Link href="https://web.whatsapp.com/send?phone=+21694355732">
                            <svg className='mx-2 hover:fill-green-500 cursor-pointer' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="27" height="27" viewBox="0 0 30 30">
                                <path d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 17.251208 3.6323415 19.350068 4.7109375 21.150391 L 3.1074219 27 L 9.0820312 25.431641 C 10.829354 26.425062 12.84649 27 15 27 C 21.627 27 27 21.627 27 15 C 27 8.373 21.627 3 15 3 z M 10.892578 9.4023438 C 11.087578 9.4023438 11.287937 9.4011562 11.460938 9.4101562 C 11.674938 9.4151563 11.907859 9.4308281 12.130859 9.9238281 C 12.395859 10.509828 12.972875 11.979906 13.046875 12.128906 C 13.120875 12.277906 13.173313 12.453437 13.070312 12.648438 C 12.972312 12.848437 12.921344 12.969484 12.777344 13.146484 C 12.628344 13.318484 12.465078 13.532109 12.330078 13.662109 C 12.181078 13.811109 12.027219 13.974484 12.199219 14.271484 C 12.371219 14.568484 12.968563 15.542125 13.851562 16.328125 C 14.986562 17.342125 15.944188 17.653734 16.242188 17.802734 C 16.540187 17.951734 16.712766 17.928516 16.884766 17.728516 C 17.061766 17.533516 17.628125 16.864406 17.828125 16.566406 C 18.023125 16.268406 18.222188 16.319969 18.492188 16.417969 C 18.766188 16.515969 20.227391 17.235766 20.525391 17.384766 C 20.823391 17.533766 21.01875 17.607516 21.09375 17.728516 C 21.17075 17.853516 21.170828 18.448578 20.923828 19.142578 C 20.676828 19.835578 19.463922 20.505734 18.919922 20.552734 C 18.370922 20.603734 17.858562 20.7995 15.351562 19.8125 C 12.327563 18.6215 10.420484 15.524219 10.271484 15.324219 C 10.122484 15.129219 9.0605469 13.713906 9.0605469 12.253906 C 9.0605469 10.788906 9.8286563 10.071437 10.097656 9.7734375 C 10.371656 9.4754375 10.692578 9.4023438 10.892578 9.4023438 z"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>

            {openNav &&
                <div className="z-10 sm:hidden absolute bg-white w-screen shadow-lg pl-3">
                    <ul className="z-10 space-y-1 px-2 pt-2 pb-3 list-none">
                        <li className={router.asPath == "/" ? "active" : "text-black"}> <Link href="/" className="z-10 block  py-2 text-base font-semibold tracking-wider" aria-current="page">Portfolio</Link></li>

                        <li className={router.asPath == "/#services" ? "active" : "text-black"}> <Link href="/#services" className="z-10 block  py-2 text-base font-semibold tracking-wider">Services</Link></li>

                        <li className={router.asPath == "/skills" ? "active" : "text-black"}> <Link href="/skills" className="z-10 block  py-2 text-base font-semibold tracking-wider">Skills</Link></li>

                        <li className={router.asPath == "/projects" ? "active" : "text-black"}> <Link href="/projects" className="z-10 block  py-2 text-base font-semibold tracking-wider">Projects</Link></li>

                        <li className={router.asPath == "/contact" ? "active" : "text-black"}> <Link href="/contact" className="z-10 block  py-2 text-base font-semibold tracking-wider">Contact</Link></li>
                    </ul>
                </div>}
        </nav>
    )
}

export default Navbar
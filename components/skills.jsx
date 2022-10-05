import React from 'react'
import { useTranslation } from 'react-i18next';
import Title from './title'

const Skills = () => {
    const [t] = useTranslation();

    return (
        <section className='flex-col items-center justify-center'>
            <div className='flex flex-col cursor-pointer items-center '>
                <Title title={t('title1')} color="textAnimateblack" />
            </div>
            <ul className='icons-container grid lg:grid-cols-6 grid-cols-3 justify-items-center z-10 mb-16 sm:mx-24'>
                <li  data-aos="fade-down" data-aos-duration="2000"  data-aos-easing="ease-out-cubic"  >
                    <span href="" className='z-10 px-3 py-1 my-5 hover:bg-orange-500 hover:after:bg-orange-500 hover:before:bg-orange-500 flex-col cursor-pointer'>
                        <img src="/html.png" alt="html" />
                        <h1 className='font-bold text-sm'>Html</h1>
                    </span>
                </li>
                <li  data-aos="fade-down" data-aos-duration="2200"  data-aos-easing="ease-out-cubic">
                    <span href="" className='z-10 px-3 py-1 my-5 hover:bg-blue-500 hover:after:bg-blue-500 hover:before:bg-blue-500 flex-col cursor-pointer'>
                        <img src="/css.png" alt="css" />
                        <h1 className='font-bold text-sm'>Css</h1>
                    </span>
                </li>
                <li  data-aos="fade-down" data-aos-duration="2500"  data-aos-easing="ease-out-cubic">
                    <span href="" className='z-10 px-3 py-1 my-5 hover:bg-sky-400 hover:after:bg-sky-400 hover:before:bg-sky-400 flex-col cursor-pointer'>
                        <img src="/tailwind.png" alt="tailwind" />
                        <h1 className='font-bold text-sm'>Tailwind</h1>
                    </span>
                </li>
                <li  data-aos="fade-down" data-aos-duration="2700"  data-aos-easing="ease-out-cubic">
                    <span href="" className='z-10 px-3 py-1 my-5 hover:bg-yellow-300 hover:after:bg-yellow-300 hover:before:bg-yellow-300 flex-col cursor-pointer'>
                        <img src="/js.png" alt="javascript" />
                        <h1 className='font-bold text-sm'>JavaScript</h1>
                    </span>
                </li>
                <li  data-aos="fade-down" data-aos-duration="3000"  data-aos-easing="ease-out-cubic">
                    <span href="" className='z-10 px-3 py-1 my-5 hover:bg-sky-500 hover:after:bg-sky-500 hover:before:bg-sky-500 flex-col cursor-pointer'>
                        <img src="/react.png" alt="react" />
                        <h1 className='font-bold text-sm'>React</h1>
                    </span>
                </li>
                <li  data-aos="fade-down" data-aos-duration="3200"  data-aos-easing="ease-out-cubic">
                    <span href="" className='z-10 px-3 py-1 my-5 hover:bg-green-500 hover:after:bg-green-500 hover:before:bg-green-500 flex-col cursor-pointer'>
                        <img src="/node.png" alt="node" />
                        <h1 className='font-bold text-sm'>NodeJS</h1>
                    </span>
                </li>
                <li  data-aos="fade-down" data-aos-duration="3500"  data-aos-easing="ease-out-cubic">
                    <span href="" className='z-10 px-4 py-2 my-5 hover:bg-blue-500 hover:after:bg-blue-500 hover:before:bg-blue-500 flex-col cursor-pointer'>
                        <img src="/python.png" alt="python" />
                        <h1 className='font-bold '>Python</h1>
                    </span>
                </li>
                <li  data-aos="fade-down" data-aos-duration="3700"  data-aos-easing="ease-out-cubic">
                    <span href="" className='z-10 px-5 py-2 my-5 hover:bg-red-500 hover:after:bg-red-500 hover:before:bg-red-500 flex-col cursor-pointer'>
                        <img src="/java.png" alt="java" />
                        <h1 className='font-bold '>Java</h1>
                    </span>
                </li>
                <li  data-aos="fade-down" data-aos-duration="3800"  data-aos-easing="ease-out-cubic">
                    <span href="" className='z-10 px-5 py-2 my-5 hover:bg-blue-600 hover:after:bg-blue-600 hover:before:bg-blue-600 flex-col cursor-pointer'>
                        <img src="/c++.png" alt="c++" />
                        <h1 className='font-bold '>C++</h1>
                    </span>
                </li>
                <li  data-aos="fade-down" data-aos-duration="3900"  data-aos-easing="ease-out-cubic">
                    <span href="" className='z-10 px-5 py-2 my-5 hover:bg-blue-700 hover:after:bg-blue-700 hover:before:bg-blue-700 flex-col cursor-pointer'>
                        <img src="/c.png" alt="c" />
                        <h1 className='font-bold '>C</h1>
                    </span>
                </li>
                <li  data-aos="fade-down" data-aos-duration="3900"  data-aos-easing="ease-out-cubic">
                    <span href="" className='z-10 px-1 py-2 my-5 hover:bg-yellow-300 hover:after:bg-yellow-300 hover:before:bg-yellow-300 flex-col cursor-pointer'>
                        <img src="/conception.png" className='w-16 h-12' alt="conception" />
                        <h1 className='font-bold text-sm'>Conception</h1>
                    </span>
                </li>
                <li  data-aos="fade-down" data-aos-duration="4000"  data-aos-easing="ease-out-cubic">
                    <span href="" className='z-10 px-3 py-1 my-5 hover:bg-purple-500 hover:after:bg-purple-500 hover:before:bg-purple-500 flex-col cursor-pointer'>
                        <img src="/figma.png" alt="figma" />
                        <h1 className='font-bold text-sm'>Figma</h1>
                    </span>
                </li>
              
            </ul>

        </section>
    )
}

export default Skills
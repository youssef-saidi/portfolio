import React from 'react'
import Image from 'next/image'

const Card = ({img,title,description}) => {
    return (
        <div className='shadow-sm bg-transparent mx-16 sm:my-0 my-5 text-center box text-white' data-aos="zoom-in-up"  data-aos-duration="3000"  data-aos-easing="ease-out-cubic">
            <div className='flex flex-col bg-primary px-12  Card absolute items-center'>
                <div  style={{ position: 'relative', width: '50px', height: '50px' }} className="z-10 mt-4">
                <Image alt="Mountains" src={img}  layout="fill" objectFit="cover" />
                </div>
                <h1 className='font-semibold md:text-lg text-base py-4'>{title}</h1>
                <p className='font-normal text-sm'>{description}</p>
            </div>

        </div>
    )
}

export default Card
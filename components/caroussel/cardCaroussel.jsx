import React from 'react'
import Image from 'next/image'
import Button from '../button'
import Link from 'next/link'


const CardCaroussel = ({ url, img }) => {
    return (
        <div className="z-10 flex items-center justify-center cardHover z-10">
            <Image src={img} height={200} width={400} />
            <div className='middle z-10'>
                <a href={url} target={"_blank"} rel="noreferrer" >
                    <Button title="Link" color={"#F5F5F5"} bgcolor={"#232C33"} fill={"#2E90E1"} />
                </a>
            </div>
        </div>

    )
}

export default CardCaroussel
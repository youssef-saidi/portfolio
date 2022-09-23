import React from 'react'
import Image from 'next/image'
import Button from '../button'

const CardCaroussel = ({ url, img }) => {
    return (
        <div className="z-10 flex items-center justify-center cardHover z-10">
            <Image src={img} height={200} width={400} />
            <a href={url} className="z-10 middle">
                <Button title="Link" color={"#F5F5F5"} bgcolor={"#232C33"} fill={"#2E90E1"} />
            </a>
        </div>

    )
}

export default CardCaroussel
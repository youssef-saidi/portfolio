import React from 'react'

const Title = ({color ,title}) => {
  return (
    <h1 style={{color:color,  borderColor: color}} className={`title font-bold md:text-4xl text-xl mb-16 ${color}`} data-aos="flip-down" data-aos-duration="2000" >{title}</h1>
    )
}

export default Title
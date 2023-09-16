import React from 'react';

const OneSkills = ({title,img,bgcolor,animation_duration}) => {
    console.log(title)
    return (
        <li  data-aos="fade-down" data-aos-duration={animation_duration}  data-aos-easing="ease-out-cubic"  >
        <span className={`z-10 px-3 py-1 my-5 hover:${bgcolor} hover:after:${bgcolor} hover:before:${bgcolor} flex-col cursor-pointer`}>
            <img src={img} alt={title} />
            <h1 className='font-bold text-sm'>{title}</h1>
        </span>
    </li>
    );
}

export default OneSkills;

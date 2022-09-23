import React from 'react'

const Button = ({ title, color, bgcolor, fill }) => {
  return (

    <button style={{ color: color, background: bgcolor }} className="z-10 drop-shadow-2xl rounded-lg overflow-hidden hover:opacity-80 py-3 px-4 relative flex items-center justify-center" >

      <svg className="z-10 absolute right-0 z-0"  width="89" height="43" viewBox="0 0 89 43" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M59.75 2.91279C69.0591 1.66445 80.5993 2.45044 84.523 6.10299C88.5236 9.7093 84.9076 16.1359 85.8308 22.8862C86.7541 29.6365 92.1395 36.6641 86.3694 38.4211C80.5993 40.178 63.6737 36.6179 53.4414 37.1265C43.286 37.6351 39.9778 42.2586 35.9773 42.9058C31.9767 43.5994 27.3606 40.3167 22.8984 37.82C18.4362 35.2771 14.1278 33.5664 9.89644 31.1622C5.66503 28.758 1.51057 25.6603 0.356552 22.1464C-0.797467 18.6788 1.04896 14.7489 3.04926 10.0792C5.12649 5.4557 7.43453 0 13.0508 0C18.667 0 27.6683 5.40946 35.5926 6.42663C43.5168 7.49003 50.5179 4.16113 59.75 2.91279Z" fill={fill} fillOpacity="0.42" />
      </svg>

      <span className="z-10 font-semibold sm:text-base text-xs z-10">{title}</span>
    </button>
  )
}

export default Button
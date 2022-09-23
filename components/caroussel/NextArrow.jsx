const NextArrow = ({ slider }) => {
  return (
    <div className="z-10 relative sm:ml-5 ml-3 mt-5 z-40" onClick={() => { slider.slickNext() }}><img src="/RightButton.png" alt="" className="z-10 sm:w-10 sm:h-10 w-8 h-8 cursor-pointer" /></div>
  )
}
export default NextArrow
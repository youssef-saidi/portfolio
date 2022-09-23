const PreviousArrow = ({ slider }) => {
  return (
    <div className="z-10 relative sm:mr-5 mr-3 mt-5 z-40" onClick={() => { slider.slickPrev() }}><img src="/LeftButton.png" alt="" className="z-10 sm:w-10 sm:h-10 w-8 h-8 cursor-pointer relative " /></div>
  )
}
export default PreviousArrow
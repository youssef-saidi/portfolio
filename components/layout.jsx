import {useEffect,useState} from 'react'
import Navbar from './navbar'

const Layout = ({ children }) => {
  const [show, setshow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setshow(false)
    }, 3000);

  }, []);
  return (
    <>
      {
        show ?
          <main className='bg-White'>

            {/* <div className="load-square flex flex-col justify-center items-center h-screen  w-full font-bold">
            <h1 data-text='Welcome!' className="text-animation md:text-6xl  text-3xl  uppercase">Welcome!</h1>
            <div className="square-holder">
              <div className="square"></div>
            </div>
          </div> */}
            <div className="load-bubble flex flex-col justify-center items-center h-screen w-full font-bold" >
              <h1 data-text='Welcome!' className="text-animation md:text-7xl  text-3xl  uppercase">Welcome!</h1>

              <div className="spinner">
                <div className="bubble-1"></div>
                <div className="bubble-2"></div>
              </div>
            </div >
          </main>


          : <>
            <Navbar />
            {children}
          </>}
    </>
  )
}

export default Layout
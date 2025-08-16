import './Root.css'
import NavBar from './assets/Components/NavBar/NavBar'
import Footer from './assets/Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Root() {

  return (
    <>
     <NavBar></NavBar>
     <div className='min-h-screen'>
      <Outlet></Outlet>
     </div>
     <Footer></Footer>
    </>
  )
}

export default Root

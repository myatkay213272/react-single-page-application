import Logo from '../components/Logo'
import AppNav from '../components/AppNav'
import { Outlet } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="d-flex flex-column p-3 bg-dark justify-content-center align-items-center text-white"
    style={{ width: '800px',minHeight: '100vh' }}>
        <Logo/>
        <AppNav/>
       
        <Outlet/>   {/* <p className="mt-3">List of cities</p> */}
        <footer className="mt-auto text-center">
            <p className="text-white">&copy; Copyright {new Date().getFullYear()} by WorldWise Inc.</p>
        </footer>
    </div>
  )
}

export default Sidebar

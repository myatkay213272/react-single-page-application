import Logo from '../components/Logo'
import AppNav from '../components/AppNav'

const Sidebar = () => {
  return (
    <div className="d-flex flex-column p-3 my-4 ms-4 bg-dark justify-content-center align-items-center text-white" style={{ width: '500px',minHeight: '90vh' }}>
        <Logo/>
        <AppNav/>
        <p className="mt-3">List of cities</p>
        <footer className="mt-auto text-center">
            <p className="text-white">&copy; Copyright {new Date().getFullYear()} by WorldWise Inc.</p>
        </footer>
    </div>
  )
}

export default Sidebar

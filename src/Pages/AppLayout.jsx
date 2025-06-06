import Sidebar from '../components/Sidebar'
import Map from '../components/Map'

const AppLayout = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <Map />
    </div>
  )
}

export default AppLayout

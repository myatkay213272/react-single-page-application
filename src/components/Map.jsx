import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import PropTypes from 'prop-types';
import 'leaflet/dist/leaflet.css';
import { useCities } from "../contexts/CitiesContext";
import { useNavigate, useSearchParams } from "react-router-dom"
import { useMap } from "react-leaflet";
import { useEffect, useState } from "react";

const Map = () => {
  const { cities } = useCities();

  const [searchParams] = useSearchParams()
  const[mapPosition,setMapPosition] = useState([40,0])

  const mapLat = parseFloat(searchParams.get("lat"));
  const mapLng = parseFloat(searchParams.get("lng"));

  useEffect(()=>{
    if(mapLat && mapLng )setMapPosition([mapLat,mapLng])
  },[mapLat,mapLng])

  return (
    <div style={{ width: "800px", height: "99vh" }}>
      <MapContainer 
        center={mapPosition}
        zoom={6} scrollWheelZoom={false} 
        style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
       {cities.map(city =>
          city.position?.lat && city.position?.lng ? (
            <Marker
              position={[city.position.lat, city.position.lng]}
              key={city.id}
            >
              <Popup>
                <span>{city.emoji} {city.cityName}</span>
              </Popup>
            </Marker>
          ) : null
        )}

        <ChangeCenter position={mapPosition}/>

        <DetectClick />
      </MapContainer>
    </div>
  );
};


const ChangeCenter = ({position})=>{
  const map = useMap()
  map.setView(position)
  return null
}


const DetectClick = ()=>{
  const navigate = useNavigate()
  // e.preventDefault()

  useMapEvents({
    click: (e) =>{
      console.log(e)
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`)
    } 
  })
}

// Map.propTypes = {
//    position: PropTypes.shape({
//     mapLat: PropTypes.number.isRequired,
//     mapLng: PropTypes.number.isRequired,
//   }).isRequired,
// }

ChangeCenter.propTypes = {
  position : PropTypes.arrayOf(PropTypes.number).isRequired
}

export default Map;

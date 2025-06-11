import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import PropTypes from 'prop-types';
import 'leaflet/dist/leaflet.css';
import { useCities } from "../contexts/CitiesContext";
import { useSearchParams } from "react-router-dom"

const Map = () => {
  const { cities } = useCities();

  const [searchParams] = useSearchParams()
  const lat = searchParams.get("lat")
  const lng = searchParams.get("lng")

  const mapPosition = lat && lng ? [parseFloat(lat), parseFloat(lng)] : [40, 0];

  return (
    <div style={{ width: "800px", height: "99vh" }}>
      <MapContainer center={mapPosition} zoom={13} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities.map(city =>
          city.position?.lat && city.position?.lng ? (
            <Marker position={[city.position.lat, city.position.lng]} key={city.id}>
              <Popup>
                <span>{city.emoji} {city.cityName}</span>
              </Popup>
            </Marker>
          ) : null
        )}
      </MapContainer>
    </div>
  );
};


Map.propTypes = {
   position: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
}

export default Map;

import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap } from "react-leaflet";
import PropTypes from 'prop-types';
import 'leaflet/dist/leaflet.css';
import { useCities } from "../contexts/CitiesContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useGeolocation from "../hooks/useGeolocation";
import Button from "./Button"; 
import { useUrlPosition } from "../hooks/useUrlPosition";

const Map = () => {
  const { cities } = useCities();
  const [mapPosition, setMapPosition] = useState([40, 0]);
  const {
    isLoading: isLoadingPosition,
    position: geolocationPosition,
    getPosition,
  } = useGeolocation();
 const [mapLat,mapLng] = useUrlPosition()

  useEffect(() => {
    if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
  }, [mapLat, mapLng]);

  useEffect(() => {
    if (geolocationPosition)
      setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);
  }, [geolocationPosition]);

  return (
    <div className="container py-3">
      
      <div className="border rounded" style={{ width: "100%", height: "95vh", overflow: "hidden" }}>

        {
          !geolocationPosition && (
            <div className="d-flex justify-content-center">
              <Button
                className="btn btn-primary"
                onClick={getPosition}
                disabled={isLoadingPosition}
              >
                {isLoadingPosition ? "Loading..." : "Use your position"}
              </Button>
            </div>
          )
        }

        <MapContainer
          center={mapPosition}
          zoom={6}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%" }}
        >
          
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {cities.map((city) =>
            city.position?.lat && city.position?.lng ? (
              <Marker
                position={[city.position.lat, city.position.lng]}
                key={city.id}
              >
                <Popup>
                  <span>
                    {city.emoji} {city.cityName}
                  </span>
                </Popup>
              </Marker>
            ) : null
          )}
          <ChangeCenter position={mapPosition} />
          <DetectClick />
        </MapContainer>
      </div>
    </div>
  );
};

const ChangeCenter = ({ position }) => {
  const map = useMap();
  map.setView(position);
  return null;
};

ChangeCenter.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
};

const DetectClick = () => {
  const navigate = useNavigate();
  useMapEvents({
    click: (e) => {
      console.log(e);
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    }
  })
};

export default Map;

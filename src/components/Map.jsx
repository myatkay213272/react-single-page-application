import { useSearchParams } from "react-router-dom";

const Map = () => {
  const [searchParams, setSearchParams] = useSearchParams(); // Get and set query parameters
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const hasPosition = lat && lng;

  return (
    <div
      className="bg-secondary text-white d-flex flex-column justify-content-center align-items-center"
      style={{ width: "800px", minHeight: "100vh" }}
    >
      <h1>Map</h1>

      {hasPosition ? (
        <h2>Position: {lat}, {lng}</h2>
      ) : (
        <h2>No position selected</h2>
      )}

      <button
        className="btn btn-light mt-4"
        onClick={() => setSearchParams({ lat: 23, lng: 50 })}
      >
        Set Position to (23, 50)
      </button>
    </div>
  );
};

export default Map;

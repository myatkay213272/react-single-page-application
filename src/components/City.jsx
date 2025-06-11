import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useCities } from "../contexts/CitiesContext";
import { formatDate } from "../utils/formateDate";
import BackButton from "./BackButton";
// import Spinner from "./Spinner";

const City = () => {
  const { id } = useParams(); // Get city ID from the URL path
  // console.log(id);

  const { getCity, currentCity} = useCities();

  useEffect(() => {
  getCity(id);
}, [id, getCity]); 

  const { cityName, emoji, date, notes } = currentCity;

    // if(!isLoading) return <Spinner/>


  return (
    <div className="container my-5 d-flex justify-content-center">
      <div className="card shadow-sm" style={{ maxWidth: "600px", width: "100%" }}>
        <div className="card-header bg-primary text-white d-flex align-items-center">
          <span role="img" aria-label="city emoji" className="fs-3 me-3">
            {emoji}
          </span>
          <h4 className="mb-0">{cityName}</h4>
        </div>

        <div className="card-body">
          <h6 className="card-subtitle mb-2 text-muted">Visit Date</h6>
          <p className="card-text">{formatDate(date || null)}</p>

          {notes && (
            <>
              <h6 className="card-subtitle mb-2 text-muted">Your Notes</h6>
              <p className="card-text">{notes}</p>
            </>
          )}
        </div>

        <div className="card-footer bg-light text-end">
          <a
            href={`https://en.wikipedia.org/wiki/${cityName}`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-primary"
          >
            Learn more on Wikipedia &rarr;
          </a>
        </div>

        <div>
          <BackButton/>
        </div>
      </div>
    </div>
  );
};

export default City;

import { createContext, useState, useEffect, useContext, useCallback } from "react";
import PropTypes from "prop-types";
import { BASE_URL } from "./citiesUtils";  

export const CitiesContext = createContext();

const CitiesProvider = ({ children }) => {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [notes, setNotes] = useState("");
  const [currentCity, setCurrentCity] = useState({});

  useEffect(() => {
    const fetchCities = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
        console.log(data);
      } catch (err) {
        console.error("Fetch city failed:", err);
        alert("There was an error loading data....");
      } finally {
        setIsLoading(false);
      }
    };
    fetchCities();
  }, []);

  const getCity = useCallback(async(id)=>{
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      if (!res.ok) throw new Error("City not found");
      const data = await res.json();
      setCurrentCity(data);
      console.log("Cities from context:", data);
    } catch(err) {
      alert("There was an error loading data: " + err.message);
    } finally {
      setIsLoading(false);
    }
  },[]) 

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        notes,
        setNotes,
        currentCity,
        getCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
};

const useCities = () => {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside the CitiesProvider");
  return context;
};

CitiesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { CitiesProvider, useCities };

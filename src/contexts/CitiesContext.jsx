import { createContext ,useState,useEffect} from "react";
import PropTypes from "prop-types";

const BASE_URL = 'http://localhost:8001'


export const CitiesContext = createContext()

const CitiesProvider = ({children})=>{
    const [cities,setCities] = useState([])
  const [isLoading,setIsLoading] = useState(false)
  const [notes,setNotes] = useState('')

  useEffect(()=>{
    const fetchCities =async ()=>{
      try{
        setIsLoading(true)
        const res = await fetch(`${BASE_URL}/cities`)
        const data = await res.json()
        setCities(data)
        console.log(data)
      }catch(err){
        alert('There was an error loading data....')
      } finally{
        setIsLoading(false)
      }
    }  
    fetchCities()
  },[])

  return (
    <CitiesContext.Provider value={{cities,isLoading,notes,setNotes}}>
    {children}
  </CitiesContext.Provider>
  )
  
}

CitiesProvider.propTypes = {
    children : PropTypes.node.isRequired
}

export {CitiesProvider}
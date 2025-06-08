import { useParams } from "react-router-dom"
import { useSearchParams } from "react-router-dom"


const City = () => {

    const {id} = useParams()  // Get city ID from the URL path
    console.log(id)

    const [searchParams] = useSearchParams()// Get lat and lng from the query string
    const lat = searchParams.get("lat")
    const lng = searchParams.get("lng")
    
  return (
  <div>
    <h1>City {id}</h1>
    <p>Position : {lng} ,{lat}</p>
  </div>
) 
    
}

export default City


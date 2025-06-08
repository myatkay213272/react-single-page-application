import { useParams } from "react-router-dom"

const formateDate = (date)=>
    new Intl.DateTimeFormat("en",{
        day : "numeric",
        month : "long",
        year : "numeric",
        weekday : "long"
    }).format(new Date(date))

const City = () => {

    const {id} = useParams()

    const currentCity = {
        cityName : "Lisbon",
        emoji : '🚩',
        date : "2027-10-31T15:59:59.138Z",
        notes : "My favourite city so far!"
    }

    const {cityName,emoju,date,notes} = currentCity

  return 
  <h1>City {id}</h1>
    
}

City.propTypes = {
    city: PropTypes.shape({

    })

} 

export default City
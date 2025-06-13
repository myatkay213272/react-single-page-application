import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { useUrlPosition } from '../hooks/useUrlPosition'
import Button from './Button'
import BackButton from './BackButton'
import Spinner from './Spinner'
import Message from './Message'

const Form = () => {
  const [lat, lng] = useUrlPosition()
  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false)
  const [cityName, setCityName] = useState('')
  const [country, setCountry] = useState('')
  const [date, setDate] = useState('')
  const [noteText, setNoteText] = useState('')
  const [geocodingError,setGeocodingError] = useState('')

  
  const BASE_URL = 'https://api.bigdatacloud.net/data/reverse-geocode-client?localityLanguage=en';
  
  useEffect(() => {
    const fetchCityData = async () => {

      if(!lat && !lng) return 

      try {
        setIsLoadingGeocoding(true)
        const res = await fetch(`${BASE_URL}?latitude=${lat}&longitude=${lng}`);
        const data = await res.json()
        console.log(data)
        setCityName(data.city||'')
        setCountry(data.country || '')
      } catch (err) {
        setGeocodingError(err.message)
        console.error('Failed to fetch city data:', err)
      } finally {
        setIsLoadingGeocoding(false)
      }
    }

    if (lat && lng) fetchCityData()
  }, [lat, lng])

  const handleSubmit = (e)=>{
    e.preventDefault()
    if (!cityName) return 

    const newCity = {
      cityName ,
      country ,
      date ,
      noteText ,
      position : {lat,lng}
    }
    console.log(newCity)
  }

  if(isLoadingGeocoding) return <Spinner/>

  if(!lat && !lng) return <Message message='Start by clicking somewhere on the map'/>

  if (geocodingError) return <Message message={geocodingError}/>


  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded bg-light text-black">
      <div className="mb-3">
        <label className="form-label">City name</label>
        <input
          type="text"
          className="form-control"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Country</label>
        <input
          type="text"
          className="form-control"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>


      <div className="mb-3">
        <label className="form-label">When did you go to {cityName || 'this city'}?</label>
        <input
          type="date"
          className="form-control"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        {/* <DatePicker 
          onChange={date =>setDate(date)} 
          selected={date}
          dateFormat='dd/MM/yyy'
        /> */}
      </div>

      <div className="mb-3">
        <label className="form-label">Notes about your trip to {cityName || 'this city'}</label>
        <textarea
          className="form-control"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        ></textarea>
      </div>

      <div className="d-flex gap-2">
        <Button type="submit" variant="primary" disabled={isLoadingGeocoding}>
          {isLoadingGeocoding ? 'Loading...' : 'Add'}
        </Button>
        <BackButton />
      </div>
    </form>
  )
}

Form.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      cityName: PropTypes.string,
      country: PropTypes.string,
      emoji: PropTypes.string,
      date: PropTypes.string,
      notes: PropTypes.string,
      position: PropTypes.shape({
        lat: PropTypes.number,
        lng: PropTypes.number
      }),
      id: PropTypes.number
    })
  ).isRequired,
  setNotes: PropTypes.func.isRequired
}

export default Form

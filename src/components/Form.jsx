import  Button  from './Button'
import { useNavigate } from "react-router-dom"
import PropTypes from 'prop-types'
import { useContext } from 'react'
import { CitiesContext } from "../contexts/CitiesContext"; 

const Form = () => {
  const {notes,setNotes} = useContext(CitiesContext)

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setNotes(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted", notes)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>City name</label>
      <input
        type="text"
        name="city"
        value={notes.city}
        onChange={handleChange}
        className="form-control mb-2"
      />

      <label>When did you go?</label>
      <input
        type="text"
        name="date"
        value={notes.date}
        onChange={handleChange}
        className="form-control mb-2"
      />

      <label>Notes about your trip</label>
      <textarea
        name="details"
        value={notes.details}
        onChange={handleChange}
        className="form-control mb-3"
      ></textarea>

      <Button type="submit" variant="primary" className="me-2">Add</Button>
      <Button type="button" variant="secondary" onClick={() => navigate('/')}>← Back</Button>
    </form>
  )
}

Form.propTypes = {
  notes: PropTypes.shape({
    city: PropTypes.string,
    date: PropTypes.string,
    details: PropTypes.string,
  }).isRequired,
  setNotes: PropTypes.func.isRequired
}

export default Form

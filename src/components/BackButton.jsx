import { useNavigate } from "react-router-dom"

const navigate = useNavigate()

const BackButton = () => {
  return (
    <Button type="button" variant="secondary" onClick={() => navigate('/')}>← Back</Button>

  )
}

export default BackButton
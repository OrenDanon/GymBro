import { useNavigate } from 'react-router-dom'

export function About() {
  const navigate = useNavigate()

  function handleClick() {
    navigate('/') // Navigate to the home route
  }

  return (
    <button onClick={handleClick}>Go Home</button>
  )
}
import { useNavigate } from 'react-router-dom'

export function HomePage() {
    const navigate = useNavigate()


return (
<div style={{backgroundColor: "brown", width: '100px', height: '100px', display: 'none'}}>
<button onClick={() => navigate('/about')}>Go to About</button>
</div>
)
}
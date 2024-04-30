// import { useNavigate } from 'react-router-dom'

export function HomePage() {
  // const navigate = useNavigate()

  return (
    <main className='homepage-container'>
      <section className='homepage-top'>
        <header className='app-header'>
          <h1>hi</h1>
        </header>
        <div className='promo-pic'></div>
        <div className='top-half-content'></div>
      </section>
      <section className='homepage-bottom'>
        <div className="bottom-half-content"></div>
        <article className="feature-details"></article>
        <footer className="auth-section"></footer>
      </section>
    </main>
  )
}

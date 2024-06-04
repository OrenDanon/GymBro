// import { useNavigate } from 'react-router-dom'

export function HomePage() {
  // const navigate = useNavigate()

  return (
    <main className='homepage-container grid'>
      <section className='homepage-top grid'>
        <header className='app-header'>
          <h1>hiiiii</h1>
        </header>
        <div className='promo-pic'></div>
        <div className='top-half-content'></div>
      </section>
      <section className='homepage-bottom grid'>
        <div className="bottom-half-content"></div>
        <article className="feature-details"></article>
        <footer className="auth-section"></footer>
      </section>
    </main>
  )
}

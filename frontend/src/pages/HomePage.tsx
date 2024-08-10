// import { useNavigate } from 'react-router-dom'

import gymLiftersImg from '../assets/img/lifters.webp'
import inspirtionalLifterImg from '../assets/img/inspirational-guy.webp'
import personalizedProgramImg from '../assets/img/workout.png'
import logWorkoutImg from '../assets/img/log.png'
import motivationalQuotesImg from "../assets/img/motivation.png"
import workoutProgressImg from "../assets/img/progress.png"
import communitySocializeImg from "../assets/img/social.png"
import trackWorkoutsImg from "../assets/img/track.png"
import { useState, useEffect } from 'react'

export function HomePage() {
  // const navigate = useNavigate()

  const inspirationalWords: string[] = [
    'Be Strong',
    'Be Fearless',
    'Be Resilient',
    'Be Determined',
    'Be Unstoppable',
    'Be Focused',
    'Be Persistent',
    'Be Empowered',
    'Be Confident',
    'Be Victorious',
  ]

  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex(
        (prevIndex) => (prevIndex + 1) % inspirationalWords.length
      )
    }, 3000)
    return () => clearInterval(interval)
  })

  return (
    <main className='homepage-container'>
      {/* main div */}
      <section className='homepage-top'>
        {/* first section */}
        <header className='app-header'>
          {/* top section in first section */}
          <ul className='header-items'>
            <li className='homepage-nav-btn'>Home</li>
            <li className='homepage-nav-btn'>Progress</li>
            <li className='homepage-nav-btn'>Workouts</li>
            <li className='homepage-nav-btn'>Social</li>
            <li className='homepage-nav-btn'>Calender</li>
          </ul>
        </header>
        <section className='introduction-section'>
          {/* middle section in first section */}
          <div className='intro-text'>
            <p>
              Welcome to GymBro, your ultimate workout tracker. Designed to help
              you stay ontop of your fitness goals.
            </p>
            <button className='send-to-features'>Join as Guest</button>
          </div>
          <div className='intro-image'>
            <img
              className='lifters-pic'
              src={gymLiftersImg}
              alt='People working out at the gym'
            />
          </div>
        </section>
        <section className='inspiration-section'>
          <div className='inspiration-image'>
            <img
              className='inspirtional-lifter'
              src={inspirtionalLifterImg}
              alt='A guy lifting out a barbell inspiringly'
            />
          </div>
          <div className='inspiration-text'>
            {inspirationalWords.map((word, index) => (
              <span
                key={index}
                className={`word ${
                  index === currentWordIndex ? 'visible' : ''
                }`}
              >
                {word}
              </span>
            ))}
          </div>
        </section>
        {/* bottom section in first section */}
      </section>
      <section className='homepage-bottom'>
        {/* second section */}
        <section className='about-short'>
          <div className='app-purpose'>
            <p>
              Why I created this app? Hi, my name is Oren Danon - a 24 years old
              ex-footballer, gym enthusiast with passion to Fullstack
              Development. I decided to create this app for people like me, as
              the name of the app might imply - gym bros (and girls).
            </p>
            {/* <p>Who am I? My name is Oren Danon, a 24 years old ex-footballer, gym enthusiast with passion to Fullstack Development. 
                  This app was created by me to help myself and others log their workouts comfortably.</p> */}
          </div>
          <div className='user-benefits'>
            <p>
              How will this app help you? As I have mentioned I created this app
              to help myself, how? Well, to begin with the issue that I had is
              quite a unique one, logging my workouts. I could not find a proper
              tool to log my workouts - exercises, weights, reps, did I fail?
              Could I do more? So I decided to do just that, an app that would
              be up to my high standards, and I'm sure this app will help you
              one way or another.
            </p>
          </div>
        </section>
        {/* top section in second section */}
        <article className='feature-details'>
          <img
            className='personalized-program'
            src={personalizedProgramImg}
            alt='Personalized workout programs icon'
          />
          <img
            className='log-workouts'
            src={logWorkoutImg}
            alt='Logging workouts icon'
          />

          <img className='motivational-quotes' src={motivationalQuotesImg} alt='Motivational quotes icon' />

          <img className='workout-progress' src={workoutProgressImg} alt='Workout progress icon' />

          <img className='community-socializing' src={communitySocializeImg} alt='Community and socializing icon' />

          <img className='track-workouts' src={trackWorkoutsImg} alt='Track workouts icon' />
        </article>
        {/* middle section in second section */}
        <footer className='auth-section'>
          <div className='login-signup'></div>
          <div className='target-audience'></div>
        </footer>
        {/* bottom section in second section */}
      </section>
    </main>
  )
}

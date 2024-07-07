// import { useNavigate } from 'react-router-dom'

import gymLifters from "../assets/img/lifters.webp"
import inspirtionalLifter from "../assets/img/inspirational-guy.webp"
import { useState, useEffect } from "react"

export function HomePage() {
    // const navigate = useNavigate()

    const inspirationalWords: string[] = [
        "Be Strong",
        "Be Fearless",
        "Be Resilient",
        "Be Determined",
        "Be Unstoppable",
        "Be Focused",
        "Be Persistent",
        "Be Empowered",
        "Be Confident",
        "Be Victorious",
    ]

    const [currentWordIndex, setCurrentWordIndex] = useState<number>(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex(
                (prevIndex) => (prevIndex + 1) % inspirationalWords.length
            )
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    return (
        <main className="homepage-container">
            {/* main div */}
            <section className="homepage-top">
                {/* first section */}
                <header className="app-header">
                    {/* top section in first section */}
                    <ul className="header-items">
                        <li className="homepage-nav-btn">Home</li>
                        <li className="homepage-nav-btn">Progress</li>
                        <li className="homepage-nav-btn">Workouts</li>
                        <li className="homepage-nav-btn">Social</li>
                        <li className="homepage-nav-btn">Calender</li>
                    </ul>
                </header>
                <section className="introduction-section">
                    {/* middle section in first section */}
                    <div className="intro-text">
                        <p>
                            Welcome to GymBro, your ultimate workout tracker.
                            Designed to help you stay ontop of your fitness
                            goals.
                        </p>
                        <button className="send-to-features">
                            Join as Guest
                        </button>
                    </div>
                    <div className="intro-image">
                        <img
                            className="lifters-pic"
                            src={gymLifters}
                            alt="People working out at the gym"
                        />
                    </div>
                </section>
                <section className="inspiration-section">
                    <div className="inspiration-image">
                        <img
                            className="inspirtional-lifter"
                            src={inspirtionalLifter}
                            alt="A guy lifting out a barbell inspiringly"
                        />
                    </div>
                    <div className="inspiration-text">
                        {inspirationalWords.map((word, index) => (
                            <span
                            key={index}
                            className={`word ${
                                index === currentWordIndex ? "visible" : ""
                            }`}>
                                {word}
                            </span>
                        ))}
                    </div>
                </section>
                {/* bottom section in first section */}
            </section>
            <section className="homepage-bottom">
                {/* second section */}
                <section className="about-short"></section>
                <div className="app-purpose"></div>
                <div className="user-benefits"></div>
                {/* top section in second section */}
                <article className="feature-details"></article>
                {/* middle section in second section */}
                <footer className="auth-section">
                    <div className="login-signup"></div>
                    <div className="target-audience"></div>
                </footer>
                {/* bottom section in second section */}
            </section>
        </main>
    )
}

import React from 'react'
import bgImg from '../assets/images/lake-clark-bg.jpg'
import './landing.css'

export default function Landing() {
    return (
        <section className="landing-wrapper" style={{ backgroundImage: `url(${bgImg})` }}>
            <h1>Joel Dore</h1>
            <h2>Web Developer</h2>
        </section>
    )
}

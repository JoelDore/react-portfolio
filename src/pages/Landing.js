import React from 'react'
// import { Image } from 'react-bootstrap'
import bgImg from '../assets/images/lake-clark-bg.jpg'
import './landing.css'

export default function Landing() {
    return (
        <section className="landing-wrapper" style={{ backgroundImage: `url(${bgImg})` }}></section>
    )
}

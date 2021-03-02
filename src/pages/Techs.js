import React from 'react'
import SectionTitle from '../components/SectionTitle'
import TechGrid from '../components/TechGrid'
import './techs.css'

export default function Techs() {
    return (
        <section className="Techs py-5 px-3 px-sm-auto">
            <SectionTitle title="Technical Skills" />
            <TechGrid />
        </section>
    )
}

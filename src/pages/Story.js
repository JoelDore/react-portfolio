import React from 'react'
import SectionTitle from '../components/SectionTitle'
import StoryUnit from '../components/StoryUnit'
import './story.css'

export default function Story() {
    const story = [
        {
            problem: "Got an acceptance letter from UNH, but I have no clue what to study...",
            solution: `After a year of consideration, I declared a major in Mathematics,
            where my love of problem-solving could be harnessed and developed into hard skills.`
        },
        {
            problem: "Got an acceptance letter from UNH, but I have no clue what to study...",
            solution: `After a year of consideration, I declared a major in Mathematics,
            where my love of problem-solving could be harnessed and developed into hard skills.`
        },
        {
            problem: "Got an acceptance letter from UNH, but I have no clue what to study...",
            solution: `After a year of consideration, I declared a major in Mathematics,
            where my love of problem-solving could be harnessed and developed into hard skills.`
        },
        {
            problem: "Got an acceptance letter from UNH, but I have no clue what to study...",
            solution: `After a year of consideration, I declared a major in Mathematics,
            where my love of problem-solving could be harnessed and developed into hard skills.`
        },
    ]

    return (
        <section className="Story py-5 px-1 px-sm-5">
            <SectionTitle title="My Story" />
            <div className="story-grid">
                {
                    story.map(s => <StoryUnit problem={s.problem} solution={s.solution} />)
                }
            </div>
        </section>
    )
}

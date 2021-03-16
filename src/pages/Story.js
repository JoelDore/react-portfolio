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
            problem: `Of all the career paths in Maths that I knew of, none seem like the right fit- 
            so I am left with a part-time maintenance job at Hannaford Supermarket...`,
            solution: `Within a few years, I climbed through various supervisory roles,
            and ultimately accepted a position as Evening Operations Manager, helping lead multiple stores throughout NH/ME.`
        },
        {
            problem: "I have developed invaluable leadership and time-management skills, but my longing for creativity and technical problem-solving is strong...",
            solution: `My incredibly supportive wife took a travelling job in the medical field, giving me the flexibility to step down from my position 
            and enroll in UNH's Coding Boot Camp where my love for creativity and problem-solving has been growing ever since..`
        },
        {
            problem: "I have been told I can't code 24/7...",
            solution: `In my free time, I love to do puzzles, play piano/guitar/anything else I can find time to learn, and explore the beauty of nature with my wife.`
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

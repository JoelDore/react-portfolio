import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'

export default function StoryUnit({ problem, solution }) {
    return (
        <>
            <div className="problem">{problem}</div>
            <FaLongArrowAltRight />
            <div className="solution">{solution}</div>
        </>
    )
}

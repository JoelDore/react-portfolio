import React from 'react'
import './projectPreview.css'

export default function ProjectPreview({ data }) {
    console.log(data)
    return (
        <div className="project-preview" style={{ backgroundImage: `url(${data.imageSrc})` }}>
            <button type="button" className="overlay">{data.name}</button>
        </div>
    )
}

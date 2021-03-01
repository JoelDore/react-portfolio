import React from 'react'
import './projectPreview.css'

export default function ProjectPreview({ data, handleShow }) {
    return (
        <div className="project-preview" style={{ backgroundImage: `url(${data.imageSrc})` }}>
            <button type="button" className="overlay" onClick={() => handleShow(data)}>{data.name}</button>
        </div>
    )
}

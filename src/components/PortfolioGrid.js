import React, { useContext } from 'react'
import ProjectPreview from "../components/ProjectPreview";
import './portfolioGrid.css'
import ProjectDataContext from '../contexts/ProjectDataContext'

export default function PortfolioGrid() {
    const projectData = useContext(ProjectDataContext)
    return (
        <div className="Grid">
            {
                projectData.map(p => (
                    <ProjectPreview key={p.name} data={p} />
                ))
            }
        </div>
    )
}

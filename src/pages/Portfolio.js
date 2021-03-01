import React from 'react'
import SectionTitle from "../components/SectionTitle";
import PortfolioGrid from "../components/PortfolioGrid";
import projectData from '../utils/project-data'
import ProjectDataContext from '../contexts/ProjectDataContext'

export default function Portfolio() {
    return (
        <ProjectDataContext.Provider value={projectData}>
            <section className="Portfolio py-5 px-3 px-sm-5">
                <SectionTitle title="Portfolio"></SectionTitle>
                <PortfolioGrid />
            </section>
        </ProjectDataContext.Provider>
    )
}

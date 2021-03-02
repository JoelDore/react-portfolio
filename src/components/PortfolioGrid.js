import React, { useContext, useState } from 'react'
import ProjectPreview from "../components/ProjectPreview";
import ProjectModal from "../components/ProjectModal";
import ProjectDataContext from '../contexts/ProjectDataContext'

export default function PortfolioGrid() {
    const projectData = useContext(ProjectDataContext)

    const [show, setShow] = useState(false);
    const [currProject, setCurrProject] = useState({});

    const handleClose = () => setShow(false);
    const handleShow = (projectData) => {
        setCurrProject(projectData)
        setShow(true);
    }

    return (
        <>
            <div
                className="d-grid gap-3 place-items-center"
                style={{ gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))" }}
            >
                {
                    projectData.map(p => (
                        <ProjectPreview key={p.name} data={p} handleShow={handleShow} />
                    ))
                }
            </div>
            <ProjectModal handleClose={handleClose} show={show} data={currProject} />
        </>
    )
}

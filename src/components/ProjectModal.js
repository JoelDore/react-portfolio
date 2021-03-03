import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export default function ProjectModal({ show, handleClose, data }) {

    // Check if project 'image' is a .webm video
    const isWebm = data?.imageSrc?.slice(-5) === ".webm"

    return (
        <Modal centered={true} show={show} onHide={handleClose}>
            <Modal.Header className="bg-dark p-0 align-items-start">
                {isWebm ? (
                    <video
                        src={data.imageSrc}
                        type="video/webm"
                        autoplay loop muted playsInline
                    />
                ) : (
                        <img
                            src={data.imageSrc}
                            className="w-100"
                            alt="Project screenshot"
                        />
                    )}
                <Button type="button" onClick={handleClose} aria-label="Close"
                    className="btn-close bg-light mt-4 position-absolute end-0 translate-middle">
                </Button>
            </Modal.Header>

            <Modal.Body className="text-center bg-dark px-5">
                <h1 className="card-title mx-auto">{data.name}</h1>
                <h5 className="card-text">{data.description}</h5>
                <div className="pb-3">
                    {data?.techs?.map(tech => (
                        <button key={tech} className="btn btn-secondary m-1" disabled>{tech}</button>
                    ))}
                </div>
                <p className="card-text">{data.summary}</p>
            </Modal.Body>
            <Modal.Footer className="justify-content-center bg-dark">
                {
                    data.github && <a href={data.github} target="_blank" rel="noreferrer">
                        <button type="button" className="btn btn-primary">View GitHub Code</button>
                    </a>
                }
                {
                    data.deployed && <a href={data.deployed} target="_blank" rel="noreferrer">
                        <button type="button" className="btn btn-success">
                            View Deployed Site</button>
                    </a>
                }
            </Modal.Footer>
        </Modal>
    )
}

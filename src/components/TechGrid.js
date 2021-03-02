import React from 'react'
import TechBtn from './TechBtn'

export default function TechGrid() {
    return (
        <div className="wrapper">
            <div
                className="d-grid gap-3 gap-sm-4 gap-md-5"
                style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
            >
                <TechBtn name="MongoDB" color="success" mern />
                <TechBtn name="Express.js" color="warning" mern />
                <TechBtn name="React" color="info" mern textColor="light" />
                <TechBtn name="MySQL" color="success" />
                <TechBtn name="Node.js" color="warning" mern />
                <TechBtn name="CSS" color="primary" />
                <TechBtn name="HTML5" color="danger" />
                <TechBtn name="JavaScript" color="warning" />
                <TechBtn name="Bootstrap" color="primary" />
            </div>
        </div>
    )
}

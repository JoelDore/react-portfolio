import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'

export default function TechBtn({ name, color, mern, textColor }) {
    const [screenWidth, setScreenWidth] = useState(0)

    window.addEventListener("resize", () => setScreenWidth(window.innerWidth))

    return (
        <Button
            className={`w-100 btn rounded-0 
                btn-${color} 
                ${mern && "mern"} 
                ${textColor && "text-" + textColor}
                ${screenWidth < 768 && "btn-sm"}
                ${screenWidth > 992 && "btn-lg"}
            `}
            aria-disabled="true"
        >
            {name}
        </Button>
    )
}

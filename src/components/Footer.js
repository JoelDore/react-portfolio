import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './footer.css'
import mobileImg from '../assets/images/mobile-white.svg'
import linkedinImg from '../assets/images/linkedin-white.svg'
import githubImg from '../assets/images/github-white.svg'

const Footer = () => {
    return (
        <div className="footer p-3 text-center">
            <Row>
                <Col>
                    <a href="mailto:dore.joel.dore@gmail.com" target="_blank" rel="noreferrer">dore.joel.dore@gmail.com</a>
                    <div id="logos" className="my-sm-3 my-2">
                        <a href="tel:603-781-9883" title="603-781-9883" target="_blank" rel="noreferrer">
                            <img src={mobileImg} alt="Mobile phone logo" width="32" height="32" />
                        </a>
                        <a href="https://www.linkedin.com/in/joeldore/" title=".../in/joeldore" target="_blank" rel="noreferrer">
                            <img src={linkedinImg} alt="Linkedin logo" width="32" height="32" />
                        </a>
                        <a href="https://github.com/joeldore/" title=".../joeldore" target="_blank" rel="noreferrer">
                            <img src={githubImg} alt="GitHub logo" width="32" height="32" />
                        </a>
                    </div>
                    <small>© 2021 Joel Dore</small>
                </Col>
            </Row>
            <a href="https://www.buymeacoffee.com/JoelDore" target="_blank" rel="noreferrer">
                <img src="https://cdn.buymeacoffee.com/buttons/v2/default-white.png"
                    alt="Buy Me A Coffee?" id="coffee" />
            </a>
        </div>
    )
}

export default Footer

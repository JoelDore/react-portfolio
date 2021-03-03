import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import SectionTitle from '../components/SectionTitle'

export default function Contact() {
    return (
        <section className="Contact py-5 px-3 px-sm-auto">
            <SectionTitle title="Contact Me" />
            <Form
                className="mx-auto col-10 col-sm-6 col-md-4"
                action="https://formspree.io/f/xaylbqqr"
                method="POST"
            >
                <Form.Group className="mb-3 text-start">
                    <Form.Label htmlFor="contactName">Name:</Form.Label>
                    <Form.Control type="text" name="name" required />
                </Form.Group>
                <Form.Group className="mb-3 text-start">
                    <Form.Label htmlFor="contactEmail">Email:</Form.Label>
                    <Form.Control type="email" name="_replyto" required />
                </Form.Group>
                <Form.Group className="mb-3 text-start">
                    <Form.Label htmlFor="contactMessage">Message:</Form.Label>
                    <Form.Control
                        as="textarea"
                        style={{ resize: "none" }}
                        name="message"
                        rows={6}
                        placeholder="Questions? Comments? Suggestions?"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control
                        type="hidden"
                        name="_next"
                        value="https://joeldore.github.io/react-portfolio/"
                    />
                    <Button type="submit" variant="success" >Get in touch</Button>
                </Form.Group>
            </Form>
        </section>
    )
}

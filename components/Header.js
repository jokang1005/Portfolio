import Link from 'next/link'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function Header() {
    return(
        <>
            <header className="header">

            <Navbar sticky="top" bg="light" expand="lg">
                <Navbar.Brand href="/">Joanne Lee</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse sticky="top" id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav><a href="#about" className="head">About</a></Nav>
                    <Nav><a href="#projects" className="head">Projects</a></Nav>
                    <Nav><a href="#resume" className="head">Resume</a></Nav>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </header>
            <div className="parallax-2"></div>
        </>
    )
}
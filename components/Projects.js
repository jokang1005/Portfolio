import Card from "react-bootstrap/Card"
import CardGroup from "react-bootstrap/CardGroup"

export default function Header() {
    return(
        <>
            <h2 id="projects">Projects</h2>
            <CardGroup>
                <a href="https://plasticpollution.netlify.app">
                    <Card>
                        <Card.Title>Plastic Pollution</Card.Title>
                        <Card.Img variant="top" src="/plasticpollution.png" />
                        <Card.Body>
                        </Card.Body>
                    </Card>
                </a>
            </CardGroup>
                <div className="parallax-5"></div>
            <CardGroup>
                <a href="https://5f9d64cc6dedee0007caeda5--lucid-benz-946cf4.netlify.app/">
                    <Card>
                        <Card.Title>Zen Movie Review</Card.Title>
                        <Card.Img variant="top" src="/zenmovie.png" />
                        <Card.Body>
                        </Card.Body>
                    </Card>
                </a>
            </CardGroup>
            <div className="parallax-5"></div>
            <CardGroup>
                <a href="http://jlzenproject2.herokuapp.com/">
                    <Card>
                        <Card.Title>Tail Trails</Card.Title>
                        <Card.Img variant="top" src="/tailtrails.png" />
                        <Card.Body>
                        </Card.Body>
                    </Card>
                </a>
            </CardGroup>
            <div className="parallax-5"></div>
            <CardGroup>
                <a href="https://portfolio-xi-inky.vercel.app/">
                    <Card>
                        <Card.Title>Studio Ghibliography</Card.Title>
                        <Card.Img variant="top" src="/studioghibliography.png" />
                        <Card.Body>
                        </Card.Body>
                    </Card>
                </a>
            </CardGroup>
            <div className="parallax-6"></div>
        </>
    )
}
import { Card, Container, Row, Col, Image } from "react-bootstrap"
import antmanImage from "../assets/superhero/antman.jpg"
import batrmanImage from "../assets/superhero/batrman.jpg"
import eternalsImage from "../assets/superhero/eternals.jpg"
import guardianImage from "../assets/superhero/guardian.jpg"
import robinhoodImage from "../assets/superhero/robinhood.jpg"
import supermanImage from "../assets/superhero/superman.jpg"

const Trending = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white">SUPERHERO MOVIES</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id="superhero">
                        <Card className="bg-dark movieImage">
                            <Image src={ antmanImage } alt="Spiderman Movies" className="images" />
                            <div className="bg-dark ">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">ANTMAN</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with natural lead-in to
                                        additional content.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark movieImage">
                            <Image src={ batrmanImage } alt="Spiderman Movies" className="images" />
                            <div className="bg-dark ">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">BATMAN</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with natural lead-in to
                                        additional content.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark movieImage">
                            <Image src={ eternalsImage } alt="Spiderman Movies" className="images" />
                            <div className="bg-dark ">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">ETERNALS</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with natural lead-in to
                                        additional content.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark movieImage">
                            <Image src={ guardianImage } alt="Spiderman Movies" className="images" />
                            <div className="bg-dark ">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">GUARDIAN</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with natural lead-in to
                                        additional content.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark movieImage">
                            <Image src={ robinhoodImage } alt="Spiderman Movies" className="images" />
                            <div className="bg-dark ">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">ROBINHOOD</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with natural lead-in to
                                        additional content.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark movieImage">
                            <Image src={ supermanImage } alt="Spiderman Movies" className="images"  />
                            <div className="bg-dark ">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">SUPERMAN</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with natural lead-in to
                                        additional content.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default Trending
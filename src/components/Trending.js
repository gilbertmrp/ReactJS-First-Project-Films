import { Card, Container, Row, Col, Image } from "react-bootstrap"
import spidermanImage from "../assets/trending/spiderman.jpeg"
import carsImage from "../assets/trending/cars.jpg"
import extractionImage from "../assets/trending/extraction.jpg"
import infinityImage from "../assets/trending/infinity.jpg"
import interceptorImage from "../assets/trending/interceptor.jpg"
import lancasterImage from "../assets/trending/lancaster.jpg"

const SuperHero = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white">TRENDING MOVIES</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id="trending">
                        <Card className="bg-dark movieImage">
                            <Image src={ spidermanImage } alt="Spiderman Movies" className="images" />
                            <div className="bg-dark ">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">SPIDERMAN</Card.Title>
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
                            <Image src={ carsImage } alt="Spiderman Movies" className="images" />
                            <div className="bg-dark ">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">CARS MC.QUEEN</Card.Title>
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
                            <Image src={ extractionImage } alt="Spiderman Movies" className="images" />
                            <div className="bg-dark ">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">EXTRACTION</Card.Title>
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
                            <Image src={ infinityImage } alt="Spiderman Movies" className="images" />
                            <div className="bg-dark ">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">INFINITY</Card.Title>
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
                            <Image src={ interceptorImage } alt="Spiderman Movies" className="images" />
                            <div className="bg-dark ">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">INTERCEPTOR</Card.Title>
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
                            <Image src={ lancasterImage } alt="Spiderman Movies" className="images"  />
                            <div className="bg-dark ">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Card title</Card.Title>
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

export default SuperHero
import { Card, Container, Row, Col, Image, Button } from "react-bootstrap"
import ctsImage from "../assets/images/trending/cts.jpg"
import ggwImage from "../assets/images/trending/gara-gara-warisan.jpg"
import impImage from "../assets/images/trending/imperfect.jpg"
import mmmImage from "../assets/images/trending/milly-mamet-movie.jpg"
import nnsImage from "../assets/images/trending/ngeri-ngeri-sedap.jpg"
import ssnImage from "../assets/images/trending/susah-sinyal.jpg"

const Trending = () => {
    return (
        <div>
            <Container className="text-center">
                <br />
                <h1 className="text-white text-center" id="trending">TRENDING MOVIES</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage">
                            <Image src={ctsImage} alt="CTS Movie"/>
                            <Card.Title className="text-center p-2 m-1">Cek Toko Sebelah</Card.Title>
                            <Card.Text className="text-center">
                                Film Cek Toko Sebelah oleh Ernest Prakasa
                            </Card.Text>
                            <Card.Text className="text-center">Tahun: 2016</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage">
                            <Image src={ggwImage} alt="GGW Movie"/>
                            <Card.Title className="text-center p-2 m-1">Gara-Gara Warisan</Card.Title>
                            <Card.Text className="text-center">
                                Film Gara-Gara Warisan oleh Muhadly Acho
                            </Card.Text>
                            <Card.Text className="text-center">Tahun: 2022</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage">
                            <Image src={impImage} alt="IMP Movie"/>
                            <Card.Title className="text-center p-2 m-1">Imperfect</Card.Title>
                            <Card.Text className="text-center">
                                Film Imperfect oleh Ernest Prakasa
                            </Card.Text>
                            <Card.Text className="text-center">Tahun: 2019</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage">
                            <Image src={nnsImage} alt="NNS Movie"/>
                            <Card.Title className="text-center p-2 m-1">Ngeri-Ngeri Sedap</Card.Title>
                            <Card.Text className="text-center">
                                Film Ngeri-Ngeri Sedap oleh Bene Dion Rajaguguk
                            </Card.Text>
                            <Card.Text className="text-center">Tahun: 2022</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage">
                            <Image src={ssnImage} alt="Susah Sinyal Movie"/>
                            <Card.Title className="text-center p-2 m-1">Susah Sinyal</Card.Title>
                            <Card.Text className="text-center">
                                Film Susah Sinyal oleh Ernest Prakasa
                            </Card.Text>
                            <Card.Text className="text-center">Tahun: 2017</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage">
                            <Image src={mmmImage} alt="MMM Movie"/>
                            <Card.Title className="text-center p-2 m-1">Milly Mamet Movie</Card.Title>
                            <Card.Text className="text-center">
                                Film Milly Mamet Movie oleh Ernest Prakasa
                            </Card.Text>
                            <Card.Text className="text-center">Tahun: 2018</Card.Text>
                        </Card>
                    </Col>
                </Row>
                <Button variant="dark" href="/">HOME</Button>
            </Container>
        </div>
    )
}

export default Trending
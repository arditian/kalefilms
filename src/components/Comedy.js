import { Card, Container, Row, Col, Image, Button } from "react-bootstrap"
import laraImage from "../assets/images/comedy/lara-ati.jpg"
import mmImage from "../assets/images/comedy/madu-murni.jpg"
import msbImage from "../assets/images/comedy/my-stupid-boss.jpg"
import sriImage from "../assets/images/comedy/srimulat.jpg"
import yb3Image from "../assets/images/comedy/yowis-ben-3.jpg"
import ybfImage from "../assets/images/comedy/yowis-ben-finale.jpg"

const Comedy = () => {
    return (
        <div>
            <Container className="text-center">
                <br />
                <h1 className="text-white" id="comedy">COMEDY MOVIES</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage">
                            <Image src={laraImage} alt="Lara Movie" className="images"/>
                            <Card.Title className="text-center p-2 m-1">Lara Ati</Card.Title>
                            <Card.Text className="text-center">
                                Film Lara Ati oleh Bayu Skak
                            </Card.Text>
                            <Card.Text className="text-center">Tahun: 2022</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage">
                            <Image src={msbImage} alt="MSB Movie" className="images"/>
                            <Card.Title className="text-center p-2 m-1">My Stupid Boss</Card.Title>
                            <Card.Text className="text-center">
                                Film My Stupid Boss oleh Upi Avianto
                            </Card.Text>
                            <Card.Text className="text-center">Tahun: 2016</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage">
                            <Image src={yb3Image} alt="YB3 Movie" className="images"/>
                            <Card.Title className="text-center p-2 m-1">Yowis Ben 3</Card.Title>
                            <Card.Text className="text-center">
                                Film Yowis Ben 3 oleh Bayu Skak
                            </Card.Text>
                            <Card.Text className="text-center">Tahun: 2021</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage">
                            <Image src={mmImage} alt="MM Movie" className="images"/>
                            <Card.Title className="text-center p-2 m-1">Madu Murni</Card.Title>
                            <Card.Text className="text-center">
                                Film Madu Murni oleh Monty Tiwa
                            </Card.Text>
                            <Card.Text className="text-center">Tahun: 2022</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage">
                            <Image src={sriImage} alt="Srimulat Movie" className="images" />
                            <Card.Title className="text-center p-2 m-1">Srimulat: Hil yang Mustahal</Card.Title>
                            <Card.Text className="text-center">
                                Film Srimulat: Hil yang Mustahal oleh Fajar Nugros
                            </Card.Text>
                            <Card.Text className="text-center">Tahun: 2022</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage">
                            <Image src={ybfImage} alt="YBF Movie" className="images" />
                            <Card.Title className="text-center p-2 m-1">Yowis Ben Finale</Card.Title>
                            <Card.Text className="text-center">
                                Film Yowis Ben Finale oleh Bayu Skak
                            </Card.Text>
                            <Card.Text className="text-center">Tahun: 2021</Card.Text>
                        </Card>
                    </Col>
                </Row>
                <Button variant="dark" href="/">HOME</Button>
            </Container>
        </div>
    )
}

export default Comedy
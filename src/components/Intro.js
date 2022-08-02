//import { Button } from "bootstrap"
import { Col, Container, Row, Button } from "react-bootstrap"

const Intro = () => {
    return (
        <div className="intro">
          <Container className="text-white d-flex justify-content-center align-items-center text-center">
            <Row>
              <Col>
                <div className="title">KALE FILMS</div>
                <div className="title">MANTABS ABIS</div>
                <div className="introButton mt-3 text-center">
                    <Button variant="dark" href="#trending">Lihat Semua List</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
    )
}

export default Intro
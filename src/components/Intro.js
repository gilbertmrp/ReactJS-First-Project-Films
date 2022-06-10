import { Container, Col, Row, Button } from 'react-bootstrap';

const Intro = () => {
    return (
        <div className='intro'>
          <Container className='text-white text-center d-flex justify-content-center align-item-center'>
            <Row>
              <Col>
                <div className='title'>NONTON GRATIS</div>
                <div className='title'>GA PAKE KARCIS</div>
                <div className='introButton mt-4 text-center'>
                    <Button variant='dark' href="#trending">Lihat semua list</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
    )
}

export default Intro
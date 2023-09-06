// Link: https://reactrouter.com/en/main/components/link


// Link: https://react-bootstrap.netlify.app/docs/layout/grid/#container
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';


import './myprofile.css';
import ProfilePic from '../../assets/Profile photos/Nufarr.jpeg';
import Carusel1 from '../../assets/Profile photos/Forest1.jpg';
import Carusel2 from '../../assets/Profile photos/Forest2.jpg';
import Carusel3 from '../../assets/Profile photos/Forest3.jpg';



import { BrowserRouter as Router, Routes, Route , useNavigate} from "react-router-dom";



export default function MyProfile() {
   

    let navigate = useNavigate();
    const routeChange = () =>{
        let path = "/Surprise";
        navigate(path);
    }
    return (
        
        <Container fluid>
            <Row>
                <Col className="text1">
                    Welcome to your profile!
                </Col>
            </Row>
            <Row>
                <Col sm={1}/>
                <Col sm={4}>
                    <img src={ProfilePic} className="fix-img" alt="ProfiePic"></img>
                </Col>
                <Col sm={6} className="text2">
                    <p>Stats:</p>
                    <p>- personality: 7/10;</p>
                    <p>- engineer: 8/10;</p>
                    <p>- creativity: 6/10;</p>
                    <p>- Rock fan: 9/10;</p>
                </Col>
            </Row>
            <Row>
                <Col>
                <Carousel className='carusel'>
                    <Carousel.Item>
                        <img src={Carusel1} className="d-block w-100" alt="KleeSupremacy1"></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Carusel2} className="d-block w-100" alt="KleeSupremacy2"></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Carusel3} className="d-block w-100" alt="KleeSupremacy3"></img>
                    </Carousel.Item>
                 </Carousel>
                 </Col>
            </Row>
            <Row>
                <Col>
                    <div align='center'>
                    
                    <Button variant="primary" size="lg" className='button' onClick={routeChange}>
                        Apasa aici pentru o surpriza!
                    </Button>
                    
                    
                    </div>    
                </Col>
            </Row>
        </Container>
    )
}



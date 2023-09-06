import Spinner from 'react-bootstrap/Spinner';
import './Button.css';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function MyButton(){
    return (
        <ClimbingBoxLoader
            color="#a824c1"
            cssOverride={{
                display: 'block',
                margin: '20% auto 40%'
              }}
            size={60}
            />
            

    );
}
import React, { useState, useEffect} from 'react'
import { Alert, Card, Col, Container, Nav, Row, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams  } from 'react-router-dom';
import { getSearchPeople } from '../../application/actions';
const Person = (props:any) => {
    const params = useParams();
    //person
    const people =  useSelector((state: any) => state.person);
    const peoplesIsLoading = useSelector((state: any) => state.isLoading);
    const dispatch = useDispatch();
    console.log(params);
    useEffect(() => {
        const {name}= params
        if(!!name){
            dispatch(getSearchPeople(name));
        }
    },[]);
console.log(people);
    return (
        <Container>
            <Nav
             className="justify-content-end" 
            activeKey="/home"
            >
                <Nav.Item>
    <Nav.Link href="/">Dashboard</Nav.Link>
  </Nav.Item>
            </Nav>
  <Row  className="justify-content-md-center">
     <Alert  variant='success'>
        <h3 className="title is-1">Star wars Details</h3>
      </Alert>
      {people.length>0 &&
      <Col>
    <Card>
      <Card.Body>
       <Card.Text>
        <Row>
            <Col>Name</Col><Col>{`${people[0].name}`}</Col>
        </Row>
        <Row>
            <Col>Height</Col><Col>{`${people[0].height}`}</Col>
        </Row>
        <Row>
            <Col>Mass</Col><Col>{`${people[0].mass}`}</Col>
        </Row>
        <Row>
            <Col>Homeworld</Col><Col>{`${people[0].homeworld}`}</Col>
        </Row>
        </Card.Text>
        <Card.Link href="/">Back To List</Card.Link>
    </Card.Body>
    </Card>
    </Col>
      }
    
    {peoplesIsLoading &&
         <Row>
            <Col md={{ span: 6, offset: 5 }}>
                <Spinner animation="grow" variant="primary" />
                <Spinner animation="grow" variant="secondary" />
                <Spinner animation="grow" variant="success" />
                <Spinner animation="grow" variant="danger" />
                <Spinner animation="grow" variant="warning" />
                <Spinner animation="grow" variant="info" />
                <Spinner animation="grow" variant="dark" />
            </Col>
        </Row>
        }
  </Row>
</Container>
    )
}
export default  Person;
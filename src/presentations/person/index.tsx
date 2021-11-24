import React, { useState, useEffect, useMemo} from 'react'
import { Alert, Card, Col, Container, Nav, Row, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams  } from 'react-router-dom';
import { getSearchPeople, IPeople } from '../../application/actions';
import { BsFillPersonFill } from "react-icons/bs";
import { GiBodyHeight, GiFleshyMass } from "react-icons/gi";
import {MdHomeWork} from "react-icons/md";
const style= {
    row:{
         margin:10,
          padding:10,
          borderWidth:1,
          borderRadius:5,
          fontSize:20
    }
   
}
const Person = (props:any) => {
    //person
    const people =  useSelector((state: any) => state.person);
    const peoplesIsLoading = useSelector((state: any) => state.isLoading);
    const dispatch = useDispatch();
    const params = useParams<string>();
    
    useEffect(() => {
        const {name}= params
        if(!!name){
            dispatch(getSearchPeople(name));
        }
    },[]);
    const person:IPeople = useMemo(() => people[0], [people])

    return (
        <Container>
            <Row>
            <Nav
             className="justify-content-end" 
            activeKey="/home"
            >
                <Nav.Item>
                    <Nav.Link href="/">Dashboard</Nav.Link>
                </Nav.Item>
            </Nav>
            </Row>
  <Row  className="justify-content-md-center">
     <Alert  variant='success'>
     <Alert.Heading>Star wars Details</Alert.Heading>
      </Alert>
      {person &&
    <Card>
      <Card.Body>
       <Card.Text>
        <Row style={{
          backgroundColor: '#d5d5df',
          ...style.row
        }} >
            <Col><BsFillPersonFill color='#009933'/>{'  '}<strong>Name</strong></Col><Col>{`${person.name}`}</Col>
        </Row>
        <Row  style={{
          backgroundColor: '#acacc2',
          ...style.row
        }}>
            <Col><GiBodyHeight color='#009933'/>{'  '}<strong>Height</strong></Col><Col>{`${person.height}`}</Col>
        </Row>
        <Row style={{
          backgroundColor: '#bcbcc4',
          ...style.row
        }}>
            <Col><GiFleshyMass color='#009933'/>{'  '}<strong>Mass</strong></Col><Col>{`${person.mass}`}</Col>
        </Row>
        <Row style={{
          backgroundColor: '#acacc2',
          ...style.row
        }}>
            <Col><MdHomeWork color='#009933'/>{' '}<strong>Homeworld</strong></Col><Col>{`${person.homeworld}`}</Col>
        </Row>
        </Card.Text>
        <Card.Link href="/">Back To List</Card.Link>
    </Card.Body>
    </Card>
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
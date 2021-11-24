import Button from 'react-bootstrap/Button'
import React, { useState, useEffect} from 'react';
import { Alert, Col, Container, Pagination, Row, Spinner, Table } from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate  } from 'react-router-dom';
import { getListPeoples, IPeople } from '../../application/actions';
import { BsFillPersonFill, BsFillEyeFill } from "react-icons/bs";

const Main = (props:any) => {
    const [page, setPage] = useState<number>(1);
    const peoples =  useSelector((state: any) => state.peoples);
    const peoplesIsLoading:boolean =  useSelector((state: any) => state.isLoadingList);

    const dispatch = useDispatch();
    let navigate = useNavigate();

    useEffect(() => {
        const pageNo:String = page.toString();
        dispatch(getListPeoples(pageNo));
    },[]);

    useEffect(() => {
        const pageNo:String = page.toString();
        dispatch(getListPeoples(pageNo));
    },[page, dispatch]);


    return (
    <Container>
        <Row className="justify-content-md-center">
        <Row>
            <Col>
                <Alert  variant='success'>
                    <h3>{`Star Wars Dashboard`}</h3>
                </Alert>
            </Col>
        </Row>
        <Table striped bordered hover>
        <thead>
            <tr>
            <th>#</th>
            <th>Fullname</th>
            <th>Height</th>
            <th>Gender</th>
            <th>Mass</th>
            <th>Homeworld</th>
            <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {peoples && peoples.map((person:IPeople, index:number)=>(
            <tr key={`${index}___${person.name?.replace(' ','__')}`}>
                <td>{index+1}</td>
                <td><BsFillPersonFill size={30} color='#009933'/>{' '}{person.name}</td>
                <td>{person.height}</td>
                <td>{person.gender}</td>
                <td>{person.mass}</td>
                <td>{person.homeworld}</td>
                <td><Button onClick={()=>navigate(`/view-details/${person.name}`)} size="sm" variant="outline-success"><BsFillEyeFill size={20}/></Button></td>
            </tr>
            ))}
           
        </tbody>
        </Table>
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
       <Row>
            <Col md={{ span: 6, offset: 5 }}>
                <Pagination>{[1,2,3,4,5].map(num=>(
                    <Pagination.Item onClick={()=>setPage(num)} key={num} active={num ===page}>
                        {num}
                    </Pagination.Item>
                    ))}
                </Pagination>
            </Col>
        </Row>
        
        
        </Row>
    </Container>
    )
}
export default Main;




import Button from 'react-bootstrap/Button'
import React, { useState, useEffect} from 'react';
import { Col, Container, Pagination, Row, Spinner, Table } from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import { getListPeoples, IPeople } from '../../application/actions';

const Main = (props:any) => {
    const [page, setPage] = useState<number>(1);
    const peoples =  useSelector((state: any) => state.peoples);
    const peoplesIsLoading:boolean =  useSelector((state: any) => state.isLoadingList);

    const dispatch = useDispatch();

    useEffect(() => {
        const pageNo:String = page.toString();
        dispatch(getListPeoples(pageNo));
    },[]);

    useEffect(() => {
        const pageNo:String = page.toString();
        dispatch(getListPeoples(pageNo));
    },[page, dispatch]);

    const onDetailView=()=>{
        return// <Redirect to="/view-details"/>
    }

    return (
    <Container>
        <Row className="justify-content-md-center">
        <Row>
            <Col md={{ span: 6, offset: 5 }}><h3>{`Star Wars`}</h3></Col>
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
                <td>{person.name}</td>
                <td>{person.height}</td>
                <td>{person.gender}</td>
                <td>{person.mass}</td>
                <td>{person.homeworld}</td>
                <td><Button size="sm" variant="outline-success">View</Button></td>
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


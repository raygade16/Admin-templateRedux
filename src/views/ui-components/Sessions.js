import React, { useState, useEffect, useContext } from 'react';
import UserContext from "../../components/UserContext";
import {
    Card,
    CardBody,
    CardTitle,
    Table,
    Spinner
} from 'reactstrap';
import {
    getDataIds,getSortSessions,isDevLogin
} from '../../service/Sessions';

import { dateFormat, timeFormat } from '../../service/Consts';
import sprayDevicedImg from '../../assets/images/spray-device.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InfiniteScroll from 'react-infinite-scroller';
import 'bootstrap/dist/css/bootstrap.min.css';

const Loading = () => {
    return (<Spinner style={{ color: 'rgb(69, 124, 160)' }} animation="border" size="md" />);
}
const Sessions = () => {
    const userContext = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const [sessions, setSessions] = useState([]);
   
    useEffect( () => {
        setLoading(true);
        getSortSessions().then((res)=>{
            // console.log(">>",res.result);
            if(res && res.result.length){
                setSessions(res.result);
            }
           
        });
        setLoading(false);
    }, []);

    return (
        <div>
            <Card>
                <CardTitle className="border-bottom p-3 mb-0" style={{ color: 'white', backgroundColor: 'rgb(69, 124, 160)', fontSize: '21px' }}>
                    <b>Customers</b>
                </CardTitle>
                <CardBody style={{padding:10}}>
                 <Table striped bordered hover>
                           <thead style={{fontSize:14.5}}>
                                <tr style={{ color: 'rgb(69, 124, 160)' }}>
                                    <th style={{ whiteSpace: 'nowrap',zIndex:1 }}>ID</th>
                                    <th style={{ whiteSpace: 'nowrap',zIndex:1  }}>Name</th>
                                    <th style={{ whiteSpace: 'nowrap' ,zIndex:1 }}>Email</th>
                                    <th style={{ whiteSpace: 'nowrap',zIndex:1  }}>phone</th>
                                    <th style={{ whiteSpace: 'nowrap' ,zIndex:1 }}>address</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sessions.length > 0 && !loading ? sessions.map((item,indx) => (
                                    <tr key={indx} style={item.isRinse == 0 || item.isRinse ==undefined ? { color: 'black'} : item.isFinished == 0 ? { color: 'black',backgroundColor:'#48C9B0'} : {color: 'black',backgroundColor:'#EF99AB'}}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.address}</td>
                                    </tr>
                                )): !loading ? <tr style={{padding:20,paddingLeft:10, fontSize:20, color: 'rgb(69, 124, 160)',backgroundColor:"white" }}><td>No data found.</td></tr>:<span/>}
                            </tbody>
                    </Table>
                </CardBody>
            </Card>
        </div>
    );
}

export default Sessions;
import React, { useState, useEffect, useContext } from 'react';
import UserContext from "../../components/UserContext";
import {
    Form,
    FormGroup,
    Input,
    Button,
    InputGroup,
    InputGroupAddon,
    InputGroupText
} from 'reactstrap';
import Logo from '../../assets/images/Unimed-x-Lighthouse-01.png';
// import { userLoginAPI } from '../../service/LoginUser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import loginRef from '../ui-components/LoginRef';

const Login = ({ history }) => {

    const userContext = useContext(UserContext);
    const [passwordShow, setPasswordShow] = useState(false);
    const passwordVisiblity = () => {
        setPasswordShow(passwordShow ? false : true);
    };

    var username = ""
    var password = ""
    const doLogin = () => {
            if(username.value == "admin" && password.value == "admin"){
                userContext.doLogin(true);
                history.push("/sessions");
            }else{
                toast.error("Invalid login!!!");
            }
    }

    useEffect(async () => {
        if(localStorage.getItem('userToken')){
            history.push("/sessions")
        }
    }, []);

    return (
        <div className="main-content">
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <nav className="navbar-top navbar-horizontal navbar-dark navbar navbar-expand-md">
                {/* <div className="px-4 container"> */}
                {/* <img src={Logo} style={{ width: "25%", marginLeft: '10px' }} /> */}
                {/* </div> */}
            </nav>
            <div className="py-7 py-lg-7" style={{ position: 'relative', background: "linear-gradient(87deg,#11cdef,#1171ef)", paddingBottom: '6rem', paddingTop: "6rem" }}>
                <div className="container">
                    <div className="mb-7 text-center"></div>
                </div>
                <div className="separator separator-bottom separator-skew zindex-100">
                    <svg className="polygon" xmlns="https://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0" >
                        <polygon points="2560 0 2560 100 0 100" style={{ fill: "#172b4d" }}></polygon>
                    </svg>
                </div>
            </div>
            <div className="mt--8 pb-5 container">
                <div className="justify-content-center row">
                    <div className="col-md-7 col-lg-5">
                        <div className="shadow border-0 card" style={{ backgroundColor: "#f7fafc" }}>
                            <div className="bg-white border-0 card-header" style={{ padding: "1.25rem 1.5rem" }}>
                                <div className="align-items-center row">
                                    <div className="col-2"></div>
                                    <div className="col-8">
                                        {/* <h3 className="mb-0">Login</h3> */}
                                        <img src={Logo} style={{ width: "100%" }} />
                                    </div>
                                    <div className="col-2"></div>
                                </div>
                            </div>
                            <div className="px-lg-12 py-lg-12 card-body" style={{ padding: '1.5rem' }}>
                                <Form role="form">
                                    {/* <FormGroup>
                                    <img style={{ width: '80%' }}></img>
                                </FormGroup> */}
                                    <FormGroup className="mb-3">
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend" style={{ border: "1px solid #457ca0" }}>
                                                <InputGroupText><i className="fas fa-user" style={{ color: 'rgb(69, 124, 160)' }}></i>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input innerRef={(b) => { username = b }} style={{ height: 'calc(2.75rem + 2px)', border: "1px solid #457ca0", color: '#212529' }} type="text" name="username" placeholder="user@unimedcorp.com" />
                                        </InputGroup>
                                    </FormGroup>
                                    <FormGroup>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend" style={{ border: "1px solid #457ca0" }}>
                                                <InputGroupText><i className="fas fa-key" style={{ color: 'rgb(69, 124, 160)' }}></i></InputGroupText>
                                            </InputGroupAddon>
                                            <Input innerRef={(b) => { password = b }} style={{ height: 'calc(2.75rem + 2px)', border: "1px solid #457ca0", color: '#212529' }} type={passwordShow ? "text" : "password"} name="password" placeholder="password" />
                                            <InputGroupAddon addonType="prepend" style={{ border: "1px solid #457ca0" }}>
                                                <InputGroupText>
                                                    {passwordShow !== false ?
                                                        <i onClick={passwordVisiblity} className="fa fa-eye" style={{ color: 'rgb(69, 124, 160)' }}></i>
                                                        :
                                                        <i onClick={passwordVisiblity} className="fa fa-eye-slash" style={{ color: 'rgb(69, 124, 160)' }}></i>
                                                    }
                                                </InputGroupText>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </FormGroup>
                                    {/* <FormGroup> */}
                                    <div className="text-center">
                                        <Button style={{ borderRadius: '.375rem', fontSize: '.875rem', fontWeight: '700', backgroundColor: 'rgb(69, 124, 160)', borderColor: 'rgb(69, 124, 160)' }} type="button" onClick={doLogin} className="my-4 btn btn-lg" color="primary">
                                            Sign in
                                    </Button>
                                    
                                    </div>
                                    <div className="text-center">
                                        <Button style={{ borderRadius: '.375rem', fontSize: '.875rem', fontWeight: '700', backgroundColor: 'rgb(69, 124, 160)', borderColor: 'rgb(69, 124, 160)' }} type="button" onClick={doLogin} className="my-4 btn btn-lg" color="primary">
                                            About
                                    </Button>
                                    
                                    </div>
                                    {/* </FormGroup> */}
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Login;

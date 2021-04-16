import React, { useContext } from 'react';
import UserContext from "../../components/UserContext";
import {
    Nav,
    NavItem,
    Navbar,
    NavbarBrand,
    Collapse,
    DropdownItem,
    Button,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu
} from 'reactstrap';

import profilephoto from '../../assets/images/users/1.jpg';

/*--------------------------------------------------------------------------------*/
/* Import images which are need for the HEADER                                    */
/*--------------------------------------------------------------------------------*/

import unimedLogo from '../../assets/images/unimed-logo.png';
import unimedText from '../../assets/images/unimed-text.png';

const Header = () => {
    const userContext = useContext(UserContext);
    /*--------------------------------------------------------------------------------*/
    /*To open SIDEBAR-MENU in MOBILE VIEW                                             */
    /*--------------------------------------------------------------------------------*/
    const showMobilemenu = () => {
        document.getElementById('main-wrapper').classList.toggle('show-sidebar');
    }

    var doLogout = (e) => {
        userContext.doLogin(false);
        localStorage.removeItem('userToken');
    }

    return (
        <header className="topbar navbarbg" data-navbarbg="skin1">
            <Navbar className="top-navbar" dark expand="md">
                <div className="navbar-header" id="logobg" data-logobg="skin6">
                    {/*--------------------------------------------------------------------------------*/}
                    {/* Logos Or Icon will be goes here for Light Layout && Dark Layout                */}
                    {/*--------------------------------------------------------------------------------*/}
                    <button className="btn-link nav-toggler d-block d-md-none" onClick={() => showMobilemenu()}>
                        <i className="ti-menu ti-close" style={{ fontSize: '20px', verticalAlign: 'middle' }} />
                    </button>
                    <NavbarBrand>
                        <b className="logo-icon">
                        <i style={{fontSize:40, marginTop:15}} className="fab fa-react" />
                            {/* <img src={unimedLogo} style={{ maxWidth:50}} alt="homepage" className="dark-logo" /> */}
                            {/* <img
                                src={logolighticon}
                                alt="homepage"
                                className="light-logo"
                            /> */}
                        </b>
                        <span className="logo-text">
                            {/* <img src={unimedText} style={{ maxWidth:'80%'}} alt="homepage" className="dark-logo" /> */}
                            <span>Customer example</span>
                            {/* <img
                                src={logolighttext}
                                className="light-logo"
                                alt="homepage"
                            /> */}
                        </span>
                    </NavbarBrand>
                    {/*--------------------------------------------------------------------------------*/}
                    {/* Mobile View Toggler  [visible only after 768px screen]                         */}
                    {/*--------------------------------------------------------------------------------*/}
                    <button className="btn-link nav-toggler d-block d-md-none" onClick={doLogout}>
                        <i className="fa fa-power-off mr-1 ml-1" style={{ color: 'red', fontSize: '20px', verticalAlign: 'middle' }} />
                    </button>
                </div>
                <Collapse className="navbarbg" navbar data-navbarbg="skin1" >
                    <Nav className="ml-auto float-right" navbar>
                        {/* <NavItem>
                            <a href="link" className="btn btn-danger mr-2" style={{ marginTop: '15px' }}>Upgrade to Pro</a>
                        </NavItem> */}
                        {/*--------------------------------------------------------------------------------*/}
                        {/* Start Profile Dropdown                                                         */}
                        {/*--------------------------------------------------------------------------------*/}
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret className="pro-pic">
                                <img
                                    src={profilephoto}
                                    alt="user"
                                    className="rounded-circle"
                                    width="31"
                                />
                            </DropdownToggle>
                            <DropdownMenu right className="user-dd">
                                {/* <DropdownItem divider /> */}
                                <DropdownItem href="#/login" onClick={doLogout}>
                                    <i className="fa fa-power-off mr-1 ml-1" style={{ color: 'red' }} /> Logout
                                </DropdownItem>
                                {/* <DropdownItem divider /> */}
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        {/*--------------------------------------------------------------------------------*/}
                        {/* End Profile Dropdown                                                           */}
                        {/*--------------------------------------------------------------------------------*/}
                    </Nav>
                </Collapse>
            </Navbar>
        </header>
    );
}
export default Header;

import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'reactstrap';
import PerfectScrollbar from 'react-perfect-scrollbar'
import {isDevLogin} from '../../service/Sessions';

const Sidebar = (props) => {

    /*--------------------------------------------------------------------------------*/
    /*To Expand SITE_LOGO With Sidebar-Menu on Hover                                  */
    /*--------------------------------------------------------------------------------*/
    const expandLogo = () => {
        document.getElementById("logobg").classList.toggle("expand-logo");
    }
    /*--------------------------------------------------------------------------------*/
    /*Verifies if routeName is the one active (in browser input)                      */
    /*--------------------------------------------------------------------------------*/

    const activeRoute = (routeName) => {
        return props.location.pathname.indexOf(routeName) > -1 ? 'selected' : '';
    }

    return (
        <aside className="left-sidebar" id="sidebarbg" data-sidebarbg="skin6" onMouseEnter={expandLogo.bind(null)} onMouseLeave={expandLogo.bind(null)}>
            <div className="scroll-sidebar">
                <PerfectScrollbar className="sidebar-nav">
                    {/*--------------------------------------------------------------------------------*/}
                    {/* Sidebar Menus will go here                                                */}
                    {/*--------------------------------------------------------------------------------*/}
                    <Nav id="sidebarnav">
                        {props.routes.map((prop, key) => {
                            if (prop.redirect) {
                                return null;
                            }
                            else {
                                return (
                                    /*--------------------------------------------------------------------------------*/
                                    /* Adding Sidebar Item                                                            */
                                    /*--------------------------------------------------------------------------------*/
                                    <li  style={isDevLogin() == 1 ? { visibility:'visible'} : prop.path=="/rinse"?{display:'none'}:{visibility:'visible'}} className={activeRoute(prop.path) + (prop.pro ? ' active active-pro' : '') + ' sidebar-item'} key={key}>
                                        <NavLink to={prop.path} className="sidebar-link" activeClassName="active">
                                            {/* <i className={prop.icon} /> */}
                                            <img style={{ width: '40px' }} src={prop.image} />&nbsp;&nbsp;
                                            <span className="hide-menu" style={{ color: 'rgb(69, 124, 160)', fontSize: '16px' }}><b>{prop.name}</b></span>
                                        </NavLink>
                                    </li>
                                );
                            }
                        })}
                    </Nav>
                </PerfectScrollbar>
            </div>
        </aside>
    );
}
export default Sidebar;

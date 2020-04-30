import React, { Component, Fragment } from 'react';
import { Link, Route } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    NavbarText
  } from 'reactstrap';

class MenuTab extends Component {
    render() {
        return (
            <>
                <Navbar color="light" light expand="md">
                    <div className = "Menu" style={{marginLeft:'50rem'}}>
                        <Nav navbar>
                            <NavItem >  <Link to="/Live/BestLive">인기 영상 </Link>  </NavItem>
                            <NavItem >  <Link to="/Live/RecommandLive" style ={{marginLeft:'5rem'}}>추천 </Link>  </NavItem>
                        </Nav>               
                    </div>
                </Navbar>
               
            </>
        );
    }
}

export default MenuTab;
import React from 'react';
import { Container } from 'reactstrap';
import NavMenu from '../NavMenu';
import './Layout.css'

const Layout = ({ children }) => {
    return (
        <div id="page">
            <NavMenu />
            <Container tag="main">
                {children}
            </Container>
        </div>
    );
};

export default Layout;


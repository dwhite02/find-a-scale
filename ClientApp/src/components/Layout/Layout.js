import React, {useState} from 'react';
import { Container } from 'reactstrap';
import NavMenu from '../NavMenu';
import './Layout.css'
import InitialScreen from '../InitialScreen';

const Layout = ({ children }) => {
    const [isInitialScreen, setIsInitialScreen] = useState(true);

    const handleScreenChange = () => {
        setIsInitialScreen(false);
    }

    return (
        <div id="page">
            { isInitialScreen ? (

                <InitialScreen onClick={handleScreenChange}/>

            ) : (
                <>
                    <NavMenu />
                    <Container tag="main">
                        {children}
                    </Container>
                </>
            )}
            
        </div>
    );
};

export default Layout;


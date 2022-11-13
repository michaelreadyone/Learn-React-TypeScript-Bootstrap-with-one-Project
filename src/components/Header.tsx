import * as React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Navbar from 'react-bootstrap/esm/Navbar';

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <Navbar fixed="top" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand>
                React Typescript Bootstrap Tutorial
            </Navbar.Brand>
        </Container>
    </Navbar>
  );
};

export default Header;

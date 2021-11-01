import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

interface Props {
  siteName?: string;
  image?: string;
}

const Header: React.StatelessComponent<Props> = ({ siteName, image }) => {
  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand>
            <img
              alt='covid_baby'
              src={image}
              className='d-inline-block align-top'
            />{' '}
            {siteName}
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

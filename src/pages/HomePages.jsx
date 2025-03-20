import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
//npm install bootstrap si no lo tienen instalado
// verificar si está instalado
//vnpm list react-bootstrap

const HomePages = () => {
    let nombre= "Jonathan";

    //midulive

  return (
    <>
    <Container bg="dark" data-bs-theme="dark">
        <Navbar>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            
        </Navbar>
    </Container>

    <div className=''>
        <h1>Home {nombre}</h1>
    </div>
    </>
  )
}

//export default HomePages

const NavigationBar = () => {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Mi Sitio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#about">Acerca</Nav.Link>
              <Nav.Link href="#contact">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };
  
  export default NavigationBar;

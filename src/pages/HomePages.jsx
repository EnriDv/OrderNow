import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//npm install bootstrap si no lo tienen instalado
// verificar si está instalado
//vnpm list react-bootstrap
//npm install @fortawesome/react-fontawesome --save
//npm install @fortawesome/free-solid-svg-icons --save


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
    <Navbar bg="dark" variant="dark" expand="lg" className="px-3">
      <Container>
        <Navbar.Brand href="#home">Mi Sitio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />     
        <Navbar.Collapse id="basic-navbar-nav" className="w-100">

          <div className="d-flex w-100 justify-content-between align-items-center">
            <div className="containerInput mx-auto d-flex align-items-center">
              <input className="form-control inputBuscar" placeholder="Buscar" />
              <button className="btn btn-success ms-2">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>

            <Nav>
              <Nav.Link href="#account">Mi Cuenta</Nav.Link>
              <Nav.Link href="#configurations">Configuraciones</Nav.Link>
              <Nav.Link href="#preferences">Preferencias</Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  };
  
  export default NavigationBar;

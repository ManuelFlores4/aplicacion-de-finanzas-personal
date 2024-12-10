import React from 'react';
import { Navbar, Nav, Container, Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Configuración de Chart.js


function App() {
  return (
    <div>
      {/* Menú de navegación */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">Aplicacion financiamiento personal</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/">Inicio</Nav.Link>
              <Nav.Link href="#productos">Cuentas</Nav.Link>
              <Nav.Link href="#grafico">Gráfico</Nav.Link>
              <Nav.Link href="#contacto">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Gráfico de ventas */}
      


      {/* Información adicional */}
      <Container className="my-5">
        <Card>
          <Card.Body>
            <Card.Title>Sobre el financiamiento personal</Card.Title>
            <Card.Text>
              En nuestra tienda encontrarás las últimas tendencias en ropa para todas las edades y estilos. Nos
              especializamos en ofrecer productos de alta calidad a precios accesibles.
            </Card.Text>
            <Button variant="primary" href="#productos">
              Ver Productos
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default App;



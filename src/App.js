import React from 'react';
import { Navbar, Nav, Container, Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Configuración de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Datos y opciones del gráfico
const chartData = {
  labels: ['Comidas y Bebidas', 'Compras', 'Viviendas', 'Transporte', 'Gastos financieros'],
  datasets: [
    {
      label: 'Gastos (en unidades)',
      data: [120, 90, 70, 40, 60],
      backgroundColor: ['#007bff', '#6610f2', '#6f42c1', '#e83e8c', '#dc3545'],
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Gastos por Categoría',
    },
  },
};

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
      <Container className="my-5" id="grafico">
        <h2 className="mb-4">Gráfico de gastos de este mes</h2>
        <Bar data={chartData} options={chartOptions} />
      </Container>

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



import React from 'react';
import { Form, Button, Tab, Tabs, Container } from 'react-bootstrap';
import th from './img/finzen.jpeg';

const Login = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: '#d4af37' }}>
      <div style={{ maxWidth: '400px', width: '100%', background: 'white', borderRadius: '10px', padding: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>
        <div className="text-center mb-4">
        <img
              className="d-block mx-auto"
              style={{ width: '50%', height: '80%' }}
              src={th}
              alt="Pantalones de Moda"
            />
        </div>
        <Tabs defaultActiveKey="login" id="login-register-tabs" className="mb-3">
          <Tab eventKey="login" title="Iniciar sesión">
            <Form>
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control type="email" placeholder="Ingresa tu correo electrónico" />
              </Form.Group>

              <Form.Group controlId="formPassword" className="mb-3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Ingresa tu contraseña" />
              </Form.Group>

              <Button variant="success" type="submit" className="w-100">
                Iniciar sesión
              </Button>
            </Form>
          </Tab>
          <Tab eventKey="register" title="Registrarse">
            <Form>
              <Form.Group controlId="formRegisterEmail" className="mb-3">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control type="email" placeholder="Ingresa tu correo electrónico" />
              </Form.Group>

              <Form.Group controlId="formRegisterPassword" className="mb-3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Crea una contraseña" />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Registrarse
              </Button>
            </Form>
          </Tab>
        </Tabs>

        <div className="text-center">
          <small className="text-muted">
            ¿No tienes una cuenta? <a href="#">Regístrate</a>
          </small>
        </div>
      </div>
    </Container>
  );
};

export default Login;

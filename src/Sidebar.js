import React from 'react';
import { Nav } from 'react-bootstrap';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Nav className="flex-column">
                <Nav.Link href="#dashboard">Panel</Nav.Link>
                <Nav.Link href="#transactions">Transacciones</Nav.Link>
                <Nav.Link href="#statistics">Estadísticas</Nav.Link>
            </Nav>
        </div>
    );
};

export default Sidebar;

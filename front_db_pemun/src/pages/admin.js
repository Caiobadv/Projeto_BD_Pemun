import React from 'react';
import { Link } from 'react-router-dom';
import './admin.css';
const Admin = () => {
    return (
        <div className="admin-container">
            <header className="admin-header">
                <h1>Administração</h1>
                <nav>
                    <ul className="admin-navigation-list">
                        <li className="admin-navigation-item">
                            <Link to="/admin/produto" className="admin-navigation-link">Produto</Link>
                        </li>
                        <li className="admin-navigation-item">
                            <Link to="/admin/ingresso" className="admin-navigation-link">Ingresso</Link>
                        </li>
                        <li className="admin-navigation-item">
                            <Link to="/admin/pacote" className="admin-navigation-link">Pacote</Link>
                        </li>
                        <li className="admin-navigation-item">
                            <Link to="/admin/pedido" className="admin-navigation-link">Pedido</Link>
                        </li>
                        <li className="admin-navigation-item">
                            <Link to="/admin/item" className="admin-navigation-link">Item</Link>
                        </li>
                        <li className="admin-navigation-item">
                            <Link to="/admin/evento" className="admin-navigation-link">Evento</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <p>Bem-vindo à página de administração. Escolha uma das opções acima para gerenciar.</p>
            </main>
        </div>
    );
};

export default Admin;

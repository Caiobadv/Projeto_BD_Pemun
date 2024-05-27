import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import LogoVerde from '../Images/LogoVerde.png';
import insta from '../Images/insta.png';
import email from '../Images/email.png';
import linktree from '../Images/linktree.png';

import './carrinho.css';

function Carrinho () {

    const { userId } = useParams();
    const [carrinhos, setCarrinhos] = useState([]);
    const [form, setForm] = useState({ cpf_user: '', product: '', quantity: '' });
    const [note, setNote] = useState('');

    useEffect(() => {
        fetchCarrinhos();
    }, []);

    const fetchCarrinhos = async () => {
        try {
        const response = await axios.get(`http://localhost:8080/users/${cpf_user}/carrinhos`);
        setCarrinhos(response.data);
        } catch (error) {
        console.error('Erro ao buscar os carrinhos', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleAddCarrinho = async () => {
        try {
        const response = await axios.post(`http://localhost:8080/users/${cpf_user}/carrinhos`, {
            product: form.product,
            quantity: form.quantity
        });
        setCarrinhos([...carrinhos, response.data]);
        setForm({ id: '', product: '', quantity: '' });
        } catch (error) {
            console.error('Erro ao adicionar o carrinho', error);
        }
    };

    const handleDeleteCarrinho = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/users/${cpf_user}/carrinhos/${id}`);
            setCarrinhos(carrinhos.filter(carrinho => carrinho.id !== id));
        } catch (error) {
            console.error('Erro ao deletar o carrinho', error);
        }
    };

    const totalQuantity = carrinhos.reduce((acc, curr) => acc + curr.quantity, 0);
    const totalValue = carrinhos.reduce((acc, curr) => acc + curr.quantity * curr.productPrice, 0).toFixed(2);

    return (
        <div>
            <header class="site-header">
                <div class="header-top">
                <img src={LogoVerde} alt="Logo PEMUN" class="logo"/> 
                <nav class="navigation">
                    <ul class="navigation-list">
                    <li class="navigation-item"><Link to='/' class="navigation-link">Home</Link></li>
                    <li class="navigation-item"><Link to='/edicao' class="navigation-link">Edição VI</Link></li>
                    <li class="navigation-item"><Link to='/arquivos' class="navigation-link">Arquivos</Link></li> 
                    <li className="navigation-item"><Link to="/staff" className="navigation-link">Staff</Link></li>
                    <li class="navigation-item"><Link to='/loja' class="navigation-link">Nossa Loja</Link></li>
                    <li class="navigation-item"><Link to='/carrinho' class="navigation-link">Carrinho</Link></li>
                    </ul>
                </nav>
                <a href="https://linktr.ee/Pemun" class="button contato-button">Contato</a>
                </div>
            </header>

            <div className="carrinho-container">
                <h1>Carrinho</h1>
                <button className="clear-cart-btn" onClick={() => setCarrinhos([])}>Limpar Carrinho</button>
                <div className="cart-items">
                    {carrinhos.map(carrinho => (
                    <div key={carrinho.id} className="cart-item">
                        <div className="cart-item-details">
                        <h2>{carrinho.product}</h2>
                        <p>{carrinho.productDescription}</p>
                        <div className="quantity-control">
                            <button>-</button>
                            <span>{carrinho.quantity}</span>
                            <button>+</button>
                        </div>
                        <p className="item-total">R$ {carrinho.quantity * carrinho.productPrice}</p>
                        <button className="remove-item-btn" onClick={() => handleDeleteCarrinho(carrinho.id)}>X</button>
                        </div>
                    </div>
                    ))}
                </div>
                <div className="cart-note">
                    <textarea
                    placeholder="Alguma observação?"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    maxLength="214"
                    />
                </div>
                <div className="cart-summary">
                    <p>Quantidade Total: {totalQuantity}</p>
                    <p>Valor Total: R$ {totalValue}</p>
                    <button className="checkout-btn">Fechar Pedido</button>
                </div>
                </div>
            
            <footer class="site-footer">
                <div class="footer-content">
                <div class="footer-logo-socials">
                    <img src={LogoVerde} alt="Logo PEMUN" class="footer-logo"/>
                    <div class="social-icons">
                    <a href="https://www.instagram.com/pernambucomun/" class="social-icon"><img src={insta} alt="Instagram"/></a>
                    <a href="mailto:pernambucomun@gmail.com" class="social-icon"><img src={email} alt="email"/></a>
                    <a href="https://linktr.ee/Pemun" class="social-icon"><img src={linktree} alt="Linktree"/></a>
                    </div>
                </div>
                
                <div class="footer-credits">
                    <p>Designed and Developed by Ana Beatriz Alves, Caio Barreto e Virna Amaral</p>
                    <p class="cor-verde">© Copyright 2024, All Rights Reserved by PEMUN</p>
                </div>
                </div>
            </footer>
        </div>
    );
}

export default Carrinho;
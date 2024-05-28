import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import LogoVerde from '../Images/LogoVerde.png';
import insta from '../Images/insta.png';
import email from '../Images/email.png';
import linktree from '../Images/linktree.png';
import '../App.css';
import './comiteagnu.css'
import './Produto.css';

function Carrinho() {

    const [itens, setItens] = useState([]);
    const [carrinhoId, setCarrinhoId] = useState(1); // Id do carrinho (pode ser fixo ou dinâmico)

    useEffect(() => {
        fetchItensDoCarrinho();
    }, []);

    const fetchItensDoCarrinho = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/${carrinhoId}`);
            setItens(response.data);
        } catch (error) {
            console.error('Erro ao buscar itens do carrinho', error);
        }
    };

    return (
        <div>
            <header className="site-header">
                <div className="header-top">
                    <img src={LogoVerde} alt="Logo PEMUN" className="logo" />
                    <nav className="navigation">
                        <ul className="navigation-list">
                            <li className="navigation-item"><Link to='/' className="navigation-link">Home</Link></li>
                            <li className="navigation-item"><Link to='/edicao' className="navigation-link">Edição VI</Link></li>
                            <li className="navigation-item"><Link to='/arquivos' className="navigation-link">Arquivos</Link></li>
                            <li className="navigation-item"><Link to='/staff' className="navigation-link">Staff</Link></li>
                            <li className="navigation-item"><Link to='/loja' className="navigation-link">Nossa Loja</Link></li>
                            <li className="navigation-item"><Link to='/carrinho' className="navigation-link">Carrinho</Link></li>
                        </ul>
                    </nav>
                    <a href="https://linktr.ee/Pemun" className="button contato-button">Contato</a>
                </div>
            </header>

            <div className="carrinho-list">
                <h2>Itens no Carrinho</h2>
                <ul>
                    {itens.map((item) => (
                        <li key={item.id_item}>
                            {item.nome_item} - Quantidade: {item.qtd_total_item} - Preço: R${item.preco_item}
                        </li>
                    ))}
                </ul>
            </div>

            <footer className="site-footer">
                <div className="footer-content">
                    <div className="footer-logo-socials">
                        <img src={LogoVerde} alt="Logo PEMUN" className="footer-logo" />
                        <div className="social-icons">
                            <a href="https://www.instagram.com/pernambucomun/" className="social-icon"><img src={insta} alt="Instagram" /></a>
                            <a href="mailto:pernambucomun@gmail.com" className="social-icon"><img src={email} alt="email" /></a>
                            <a href="https://linktr.ee/Pemun" className="social-icon"><img src={linktree} alt="Linktree" /></a>
                        </div>
                    </div>

                    <div className="footer-credits">
                        <p>Designed and Developed by Ana Beatriz Alves, Caio Barreto e Virna Amaral</p>
                        <p className="cor-verde">© Copyright 2024, All Rights Reserved by PEMUN</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Carrinho;

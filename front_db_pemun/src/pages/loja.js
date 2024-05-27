import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// import SearchBar from './searchbar';

import LogoVerde from '../Images/LogoVerde.png';
import insta from '../Images/insta.png';
import email from '../Images/email.png';
import linktree from '../Images/linktree.png';

import '../App.css';
import './comiteagnu.css'
import './Produto.css';

function Loja(){

    const [produtos, setProdutos] = useState([]);
    
    useEffect(() => {
        fetchProdutos();
    }, []);

    const fetchProdutos = async () => {
        try {
            const response = await axios.get('http://localhost:8080/produtos');
            setProdutos(response.data);
        } catch (error) {
            console.error('Erro ao buscar produtos', error);
        }
    };

    return(
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
                <a  href="https://linktr.ee/Pemun" class="button contato-button">Contato</a>
                </div>
            </header>
            
            <div className="produto-list">
            <h2>Produtos</h2>
            <ul>
                    {produtos.map((produto) => (
                        <li key={produto.id_produto}>
                            <Link to={`/loja/produto/${produto.id_produto}`}>
                                {produto.id_item_produto} - {produto.cor_produto} - {produto.tamanho}
                            </Link>
                        </li>
                    ))}
                </ul>
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

export default Loja;
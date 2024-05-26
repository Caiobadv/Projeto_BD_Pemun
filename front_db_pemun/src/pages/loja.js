import React from 'react';

import { Link } from 'react-router-dom';

import SearchBar from './searchbar';

import LogoVerde from '../Images/LogoVerde.png';

import AnaBeatrizAlbuquerque from '../Images/0539 - ana beatriz albuquerque.jpeg';

import insta from '../Images/insta.png';
import email from '../Images/email.png';
import linktree from '../Images/linktree.png';

import '../App.css';
import './comiteagnu.css'

function Loja(){
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
                    </ul>
                </nav>
                <a  href="https://linktr.ee/Pemun" class="button contato-button">Contato</a>
                </div>
            </header>
            <div>
                <SearchBar/>
            </div>

            <h1>Itens</h1>
            <div className="comite-directoria">
                <h2>Ingressos</h2>
                <div className="directoria-members">
                    <div className="member">
                        <Link to='/produto'>
                            <img src={AnaBeatrizAlbuquerque} alt="Ana Beatriz Albuquerque"/>
                            <h3>Festa em Ipanema</h3>
                            <h6>R$ 29,99</h6>
                        </Link>
                    </div>
                    <div className="member">
                        <Link to='/produto'>
                            <img src={AnaBeatrizAlbuquerque} alt="Ana Beatriz Albuquerque"/>
                            <h3>Não Acredito Que Te Vetei</h3>
                            <h6>R$ 29,99</h6>
                        </Link>
                    </div>
                    <div className="member">
                        <Link to='/produto'>
                            <img src={AnaBeatrizAlbuquerque} alt="Ana Beatriz Albuquerque"/>
                            <h3>PEMUN VII</h3>
                            <h6>R$ 99,99</h6>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="comite-directoria">
                <h2>Produtos</h2>
                <div className="directoria-members">
                    <div className="member">
                        <Link to='/produto'>
                            <img src={AnaBeatrizAlbuquerque} alt="Ana Beatriz Albuquerque"/>
                            <h3>Festa em Ipanema</h3>
                            <h6>R$ 29,99</h6>
                        </Link>
                    </div>
                    <div className="member">
                        <Link to='/produto'>
                            <img src={AnaBeatrizAlbuquerque} alt="Ana Beatriz Albuquerque"/>
                            <h3>Não Acredito Que Te Vetei</h3>
                            <h6>R$ 29,99</h6>
                        </Link>
                    </div>
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

export default Loja;
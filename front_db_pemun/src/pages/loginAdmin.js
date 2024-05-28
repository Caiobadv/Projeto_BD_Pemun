import React from 'react';

import { Link } from 'react-router-dom';

import LogoVerde from '../Images/LogoVerde.png';

import insta from '../Images/insta.png';
import email from '../Images/email.png';
import linktree from '../Images/linktree.png';
import loginPng from '../Images/login.png'

import './carrinho.css';
import '../App.css';
import './home.css'
import './loginAdmin.css'

function LoginAdmin(){
    return(
        <div align="center">
            <header className="site-header">
                <div className="header-top">
                <img src={LogoVerde} alt="Logo PEMUN" className="logo"/> 
                <nav className="navigation">
                    <ul className="navigation-list">
                    <li className="navigation-item"><Link to='/' className="navigation-link">Home</Link></li>
                    <li className="navigation-item"><Link to='/edicao' className="navigation-link">Edição VI</Link></li>
                    <li className="navigation-item"><Link to='/arquivos' className="navigation-link">Arquivos</Link></li> 
                    <li className="navigation-item"><Link to='/staff' className="navigation-link">Staff</Link></li>
                    <li className="navigation-item"><Link to='/loja' className="navigation-link">Nossa Loja</Link></li>
                    </ul>
                </nav>
                <a href="https://linktr.ee/Pemun" className="button contato-button">Contato</a>
                </div>
            </header>

            <div className="container-admin">
                <div className="banner">
                    <div className='p-admin'>
                        <img src={loginPng} width="300" alt="imagem-login"/>
                        <br/>Seja bem vindo, acesse e aproveite todo o conteúdo,
                        <br/>somos uma equipe de profissionais empenhados em
                        <br/>trazer o melhor conteúdo direcionado a você usuário. 
                    </div>
                </div>

                <div className="box-login">
                    <h1>Olá Secre,<br/>Seja bem vindo de volta!</h1>

                    <div className="box">
                        <h2>Faça o seu login agora...</h2>
                        <input type="text" name="username" id="username" placeholder="username"/>
                        <input type="password" name="password" id="password" placeholder="password"/>
                    </div>
                    <header>
                    <button className="button-admin"><Link to='/admin' className="navigation-link-admin">Login</Link></button>
                    </header>
                </div>
            </div>

            <footer className="site-footer">
                <div className="footer-content">
                <div className="footer-logo-socials">
                    <img src={LogoVerde} alt="Logo PEMUN" className="footer-logo"/>
                    <div className="social-icons">
                    <a href="https://www.instagram.com/pernambucomun/" className="social-icon"><img src={insta} alt="Instagram"/></a>
                    <a href="mailto:pernambucomun@gmail.com" className="social-icon"><img src={email} alt="email"/></a>
                    <a href="https://linktr.ee/Pemun" className="social-icon"><img src={linktree} alt="Linktree"/></a>
                    </div>
                </div>
                
                <div className="footer-credits">
                    <p>Designed and Developed by Ana Beatriz Alves e Caio Barreto</p>
                    <p className="cor-verde">© Copyright 2024, All Rights Reserved by PEMUN</p>
                </div>
                </div>
            </footer>
        </div>
    );
}

export default LoginAdmin;
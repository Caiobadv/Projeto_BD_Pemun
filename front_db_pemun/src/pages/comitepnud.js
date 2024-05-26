import React from 'react';

import { Link } from 'react-router-dom';

import LogoVerde from '../Images/LogoVerde.png';
import PnudLogo from '../Images/pnud-removebg-preview.png';

import VirnaAmaral from '../Images/Virna Amaral.jpg';
import FernandaMarques from '../Images/Maria Marques.jpeg';
import RafaelAlves from '../Images/IMG_7971 - Rafael Alves.jpeg';
import FlavioMuniz from '../Images/FLÃVIO ROMERO SANTOS DE SÃ MUNIZ.jpeg';
import MariliaLascio from '../Images/Marilia Di Lascio.jpeg';

import CaioBarreto from '../Images/Caio Barreto.jpeg';
import MariaDubeux from '../Images/IMG_1220 - Maria Eugênia Dubeux.jpeg';
import AnaAlves from '../Images/IMG_1205 - Ana Beatriz Alves.jpeg';

import insta from '../Images/insta.png';
import email from '../Images/email.png';
import linktree from '../Images/linktree.png';

import '../App.css';
import './comiteagnu.css'

function ComitePnud() {
    return (
        <div>
            <header className="site-header">
                <div className="header-top">
                <img src={LogoVerde} alt="Logo PEMUN" className="logo"/> 
                <nav className="navigation">
                    <ul className="navigation-list">
                    <li className="navigation-item"><Link to="/" className="navigation-link">Home</Link></li>
                    <li className="navigation-item"><Link to="/edicao" className="navigation-link">Edição VI</Link></li>
                    <li className="navigation-item"><Link to="/arquivos" className="navigation-link">Arquivos</Link></li>
                    <li className="navigation-item"><Link to="/staff" className="navigation-link">Staff</Link></li>
                    </ul>
                </nav>
                <a  href="https://linktr.ee/Pemun" className="button contato-button">Contato</a>
                </div>
            </header>
            <main>
                <section className="comite-section">
                <div className="comite-header">
                    <img src={PnudLogo} alt="Logo Comité" className="comite-logo"/>
                    <div className="comite-title">
                        <h1>Programa das Nações Unidas para o Desenvolvimento</h1>
                        <h2>MarathOnu 2030: Cooperação para Paz, Prosperidade, Pessoas e Planeta</h2>
                        <a href="https://www.sympla.com.br/evento/pemun-edicao-vi-simulacao-presencial/2453687" className="button guia-button">Inscreva-se</a>
                        <div className="comite-buttons">
                            <a href="https://drive.google.com/drive/folders/10VLNm0incqFMv8UwBVacvfu6B6z2KDUe?usp=share_link" className="button guia-button">Guia de Estudos</a>
                            <a href="https://drive.google.com/drive/folders/1XNfE3BtoJEyay2ZMs4AgcY9xo30gPNmb?usp=share_link" className="button guia-button">Guia Anexo</a>
                        </div>
                    </div>
                </div>
                <div className="comite-summary">
                    <h3>Resumo do Comitê</h3>
                    <p>Os princípios e objetivos do PNUD são baseados na Agenda 2030 para o Desenvolvimento Sustentável (ODS), que visa erradicar a pobreza, proteger o planeta e garantir que todas as pessoas desfrutem de paz e prosperidade.  Uma das características marcantes da atuação do PNUD é o seu foco na inovação, reconhecendo o programa que as soluções tradicionais muitas vezes não são suficientes para resolver os desafios complexos que o mundo enfrenta e, por isso, busca constantemente novas abordagens e tecnologias para enfrentar questões globais.

                        Inegavelmente a tecnologia desempenha um papel fundamental na consecução das ODS, podendo um hackathon ser uma plataforma para desenvolver aplicativos, sistemas e tecnologias que ajudem a impulsionar o progresso em direção às metas da agenda, promovendo uma abordagem baseada em dados e tecnologia para enfrentar os desafios globais.
                        
                        Concentrando-se em quatro pilares essenciais - Paz, Pessoas, Prosperidade e Planeta - este hackathon busca reunir mentes inovadoras para criar soluções para os desafios globais, sendo uma oportunidade única para indivíduos de diversas áreas se reunirem e abordarem questões cruciais relacionadas ao desenvolvimento sustentável.
                        
                        Durante o evento, terão contato com desafios multidisciplinares, ao trabalharem em áreas abrangentes como paz e justiça, igualdade, prosperidade econômica e preservação do meio ambiente, e equipes diversas, formadas por pessoas de diferentes áreas de expertise, para promover abordagens inovadoras e abrangentes.</p>
                </div>
                <div className="comite-representaciones">
                    <h2>Representações</h2>
                    <ul className="representaciones-list">
                    <li>Equipe Paz: 5 Delegados;</li>
                    <li>Equipe Prosperidade: 5 Delegados;</li>
                    <li>Equipe Pessoas: 5 Delegados;</li>
                    <li>Equipe Planeta: 5 Delegados</li>
                    </ul>
                </div>
                <div className="comite-directoria">
                    <h2>Diretoria</h2>
                    <div className="directoria-members">
                    <div className="member">
                        <img src={VirnaAmaral} alt="Ana Luisa Porpino"/>
                        <h3>Virna Amaral</h3>
                    </div>
                    <div className="member">
                        <img src={FernandaMarques} alt="Ana Luisa Porpino"/>
                        <h3>Maria Fernanda Marques</h3>
                    </div>
                    <div className="member">
                        <img src={RafaelAlves} alt="Ana Luisa Porpino"/>
                        <h3>Rafael Alves</h3>
                    </div>
                    <br/>
                    <div className="member">
                        <img src={FlavioMuniz} alt="Ana Luisa Porpino"/>
                        <h3>Flavio Muniz</h3>
                    </div>
                    <div className="member">
                        <img src={MariliaLascio} alt="Ana Luisa Porpino"/>
                        <h3>Marilia Di Lascio</h3>
                    </div>
                    </div>
                </div>
                <div className="tutores-section">
                    <div className="tutores-container">
                        <div align='left'>
                            <h2>Tutores</h2>
                            <p>Membros do Secretariado, Alumni e convidados que orientaram a elaboração do Comitê.</p>
                        </div>
                        <div className="tutor">
                            <img src={CaioBarreto} alt="Caio Barreto"/>
                            <p>Caio Barreto</p>
                        </div>
                        <div className="tutor">
                            <img src={MariaDubeux} alt="Maria Eugênia Dubeux"/>
                            <p>Maria Eugênia Dubeux</p>
                        </div>
                        <div className="tutor">
                            <img src={AnaAlves} alt="Ana Beatriz Alves"/>
                            <p>Ana Beatriz Alves</p>
                        </div>
                    </div>
                </div>
                </section>
            </main>
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
                    <p>Designed and Developed by Ana Beatriz Alves, Caio Barreto e Virna Amaral</p>
                    <p className="cor-verde">© Copyright 2024, All Rights Reserved by PEMUN</p>
                </div>
                </div>
            </footer>
        </div>
    );
}

export default ComitePnud;
import React from 'react';

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
            <header class="site-header">
                <div class="header-top">
                <img src={LogoVerde} alt="Logo PEMUN" class="logo"/> 
                <nav class="navigation">
                    <ul class="navigation-list">
                    <li class="navigation-item"><a href="index.html" class="navigation-link">Home</a></li>
                    <li class="navigation-item"><a href="edicao.html" class="navigation-link">Edição VI</a></li>
                    <li class="navigation-item"><a href="arquivos.html" class="navigation-link">Arquivos</a></li> 
                    <li class="navigation-item"><a href="staff.html" class="navigation-link">Staff</a></li>
                    </ul>
                </nav>
                <a  href="https://linktr.ee/Pemun" class="button contato-button">Contato</a>
                </div>
            </header>
            <main>
                <section class="comite-section">
                <div class="comite-header">
                    <img src={PnudLogo} alt="Logo Comité" class="comite-logo"/>
                    <div class="comite-title">
                    <h1>Programa das Nações Unidas para o Desenvolvimento</h1>
                    <h2>MarathOnu 2030: Cooperação para Paz, Prosperidade, Pessoas e Planeta</h2>
                    <a href="https://www.sympla.com.br/evento/pemun-edicao-vi-simulacao-presencial/2453687" class="button guia-button">Inscreva-se</a>
                    <div class="comite-buttons">
                        <a href="https://drive.google.com/drive/folders/10VLNm0incqFMv8UwBVacvfu6B6z2KDUe?usp=share_link" class="button guia-button">Study Guide</a>
                        <a href="https://drive.google.com/drive/folders/1XNfE3BtoJEyay2ZMs4AgcY9xo30gPNmb?usp=share_link" class="button guia-button">Annex Guide</a>
                    </div>
                    </div>
                </div>
                <div class="comite-summary">
                    <h3>Resumo do Comitê</h3>
                    <p>Os princípios e objetivos do PNUD são baseados na Agenda 2030 para o Desenvolvimento Sustentável (ODS), que visa erradicar a pobreza, proteger o planeta e garantir que todas as pessoas desfrutem de paz e prosperidade.  Uma das características marcantes da atuação do PNUD é o seu foco na inovação, reconhecendo o programa que as soluções tradicionais muitas vezes não são suficientes para resolver os desafios complexos que o mundo enfrenta e, por isso, busca constantemente novas abordagens e tecnologias para enfrentar questões globais.

                        Inegavelmente a tecnologia desempenha um papel fundamental na consecução das ODS, podendo um hackathon ser uma plataforma para desenvolver aplicativos, sistemas e tecnologias que ajudem a impulsionar o progresso em direção às metas da agenda, promovendo uma abordagem baseada em dados e tecnologia para enfrentar os desafios globais.
                        
                        Concentrando-se em quatro pilares essenciais - Paz, Pessoas, Prosperidade e Planeta - este hackathon busca reunir mentes inovadoras para criar soluções para os desafios globais, sendo uma oportunidade única para indivíduos de diversas áreas se reunirem e abordarem questões cruciais relacionadas ao desenvolvimento sustentável.
                        
                        Durante o evento, terão contato com desafios multidisciplinares, ao trabalharem em áreas abrangentes como paz e justiça, igualdade, prosperidade econômica e preservação do meio ambiente, e equipes diversas, formadas por pessoas de diferentes áreas de expertise, para promover abordagens inovadoras e abrangentes.</p>
                </div>
                <div class="comite-representaciones">
                    <h2>Representações</h2>
                    <ul class="representaciones-list">
                    <li>Equipe Paz: 5 Delegados;</li>
                    <li>Equipe Prosperidade: 5 Delegados;</li>
                    <li>Equipe Pessoas: 5 Delegados;</li>
                    <li>Equipe Planeta: 5 Delegados</li>
                    </ul>
                </div>
                <div class="comite-directoria">
                    <h2>Diretoria</h2>
                    <div class="directoria-members">
                    <div class="member">
                        <img src={VirnaAmaral} alt="Ana Luisa Porpino"/>
                        <h3>Virna Amaral</h3>
                    </div>
                    <div class="member">
                        <img src={FernandaMarques} alt="Ana Luisa Porpino"/>
                        <h3>Maria Fernanda Marques</h3>
                    </div>
                    <div class="member">
                        <img src={RafaelAlves} alt="Ana Luisa Porpino"/>
                        <h3>Rafael Alves</h3>
                    </div>
                    <div class="member">
                        <img src={FlavioMuniz} alt="Ana Luisa Porpino"/>
                        <h3>Flavio Muniz</h3>
                    </div>
                    <div class="member">
                        <img src={MariliaLascio} alt="Ana Luisa Porpino"/>
                        <h3>Marilia Di Lascio</h3>
                    </div>
                    </div>
                </div>
                <div class="tutores-section">
                    <h2>Tutores</h2>
                    <p>Membros do Secretariado, Alumni e convidados que orientaram a elaboração do Comitê.</p>
                    <div class="tutores-container">
                    <div class="tutor">
                        <img src={CaioBarreto} alt="Caio Barreto"/>
                        <p>Caio Barreto</p>
                    </div>
                    <div class="tutor">
                        <img src={MariaDubeux} alt="Maria Eugênia Dubeux"/>
                        <p>Maria Eugênia Dubeux</p>
                    </div>
                    <div class="tutor">
                        <img src={AnaAlves} alt="Ana Beatriz Alves"/>
                        <p>Ana Beatriz Alves</p>
                    </div>
                    </div>
                </div>
                </section>
            </main>
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

export default ComitePnud;
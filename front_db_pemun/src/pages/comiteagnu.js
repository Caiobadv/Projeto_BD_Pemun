import React from 'react';
import LogoVerde from '../Images/LogoVerde.png';
import AgnuLogo from '../Images/agnu-removebg-preview.png';
import AnaBeatrizAlbuquerque from '../Images/0539 - ana beatriz albuquerque.jpeg';
import LeilaSantos from '../Images/IMG_8280 - Leila Santos.jpeg';
import AnaLuizaMenacho from '../Images/IMG_8273 - Ana Luiza Menacho.jpeg';
import MarioPereira from '../Images/IMG_8288 - Mario Pereira.jpeg';
import GiuliaMartins from '../Images/9571 - Giulia Martins.jpg';
import GabriellaNebieker from '../Images/IMG_8595 - Gabriella.jpeg';
import MariaClaraFerraz from '../Images/IMG_8656 - Maria Clara Ferraz.jpeg';
import insta from '../Images/insta.png';
import email from '../Images/email.png';
import linktree from '../Images/linktree.png';

import '../App.css';
import './comiteagnu.css'

function ComiteAgnu() {
  return (
      <div>
          <header className="site-header">
            <div className="header-top">
                <img src={LogoVerde} alt="Logo PEMUN" className="logo"/> 
                <nav className="navigation">
                    <ul className="navigation-list">
                    <li className="navigation-item"><a href="index.html" className="navigation-link">Home</a></li>
                    <li className="navigation-item"><a href="edicao.html" className="navigation-link">Edição VI</a></li>
                    <li className="navigation-item"><a href="arquivos.html" className="navigation-link">Arquivos</a></li> 
                    <li className="navigation-item"><a href="staff.html" className="navigation-link">Staff</a></li>
                    </ul>
                </nav>
                <a  href="https://linktr.ee/Pemun" className="button contato-button">Contato</a>
            </div>
        </header>
        <main>
            <section className="comite-section">
            <div className="comite-header">
                <img src={AgnuLogo} alt="Logo Comité" className="comite-logo"/>
                <div className="comite-title">
                <h1>Assembléia Geral das Nações Unidas</h1>
                <h2>Tópico A: Eliminação do plástico como promoção do desenvolvimento sustentável </h2>
                <h2>Tópico B:  A atuação das redes sociais na perpetuação do discurso de ódio</h2>
                <a href="https://www.sympla.com.br/evento/pemun-edicao-vi-simulacao-presencial/2453687" className="button guia-button">Inscreva-se</a>
                <div className="comite-buttons">
                </div>
                </div>
            </div>
            <div className="comite-summary">
                <h3>Resumo do Comitê</h3>
                <p>Ao explorarmos os temas da poluição por plástico e do discurso de ódio na internet nesta simulação da Assembleia Geral das Nações Unidas (AGNU), estamos diante de desafios que transcendem fronteiras geográficas e culturais, demandando uma abordagem coletiva e inclusiva. 

                    Em razão dos temas sugericos, fica evidante a complexidade dessas questões e a necessidade urgente de ações coordenadas e eficazes para enfrentá-las. A poluição por plástico representa uma ameaça crescente ao meio ambiente e à saúde pública, enquanto o discurso de ódio na internet desafia os valores fundamentais de respeito, diversidade e inclusão. Ambos os tópicos são pilares essenciais para a construção de um mundo sustentável, justo e seguro no contexto do século XXI em razão do seu caráter latente e emergente.
                    
                    Este comitê se apresenta como uma oportunidade ímpar para aprofundar tais temáticas por meio do diálogo entre delegações para tentar achar um denominador comum frente aos desafios que se impõem.</p>
            </div>
            <div className="comite-representaciones">
                <h2>Representações</h2>
                <ul className="representaciones-list">
                <li>Estado Independente de Pápua Nova-Guiné</li>
                <li>Estados Federados da Micronésia</li>
                <li>República Federal da Alemanha</li>
                <li>Reino Unido da Grã Bretanha e Irlanda do Norte</li>
                <li>Comunidade da Austrália</li>
                <li>Nova Zelândia</li>
                <li>República da Índia</li>
                <li>República Federal da Somália</li>
                <li>Emirados Árabes Unidos</li>
                <li>República Argentina</li>
                <li>República de Burkina Faso</li>
                <li>República Francesa</li>
                <li>Estados Unidos da América</li>
                <li>República da África Do Sul</li>
                <li>República de Taiwan</li>
                <li>República Popular da China</li>
                <li>Federação Russa</li>
                <li>República da Costa Rica</li>
                <li>República Federativa do Brasil</li>
                <li>Reino da Noruega</li>
                <li>República da Indonésia</li>
                </ul>
            </div>
            <div className="comite-directoria">
                <h2>Diretoria</h2>
                <div className="directoria-members">
                <div className="member">
                    <img src={AnaBeatrizAlbuquerque} alt="Ana Beatriz Albuquerque"/>
                    <h3>Ana Beatriz Albuquerque</h3>
                </div>
                <div className="member">
                    <img src={LeilaSantos} alt="Leila Santos"/>
                    <h3>Leila Santos</h3>
                </div>
                <div className="member">
                    <img src={AnaLuizaMenacho} alt="Ana Luiza Menacho"/>
                    <h3>Ana Luiza Menacho</h3>
                </div>
                <div className="member">
                    <img src={MarioPereira} alt="Mario Pereira"/>
                    <h3>Mario Pereirar</h3>
                </div>
                <div className="member">
                    <img src={GiuliaMartins} alt="Giulia Martins"/>
                    <h3>Giulia Martins</h3>
                </div>
                </div>
            </div>
            <div className="tutores-section">
                <h2>Tutores</h2>
                <p>Membros do Secretariado, Alumni e convidados que orientaram a elaboração do Comitê.</p>
                <div className="tutores-container">
                <div className="tutor">
                    <img src={GabriellaNebieker} alt="Gabriella Nebieker"/>
                    <p>Gabriella Nebieker</p>
                </div>
                <div className="tutor">
                    <img src={MariaClaraFerraz} alt="Maria Clara Ferraz"/>
                    <p>Maria Clara Ferraz</p>
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
                <p>Designed and Developed by Ana Beatriz Alves e Caio Barreto</p>
                <p className="cor-verde">© Copyright 2024, All Rights Reserved by PEMUN</p>
            </div>
            </div>
        </footer>
      </div>
    );
}

export default ComiteAgnu;
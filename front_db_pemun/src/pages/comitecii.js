import React from 'react';
import LogoVerde from '../Images/LogoVerde.png';
import insta from '../Images/insta.png';
import email from '../Images/email.png';
import linktree from '../Images/linktree.png';
import LogoCii from '../Images/CII_V6-removebg-preview.png';
import RaissaFarias from '../Images/1992 - Raí_ssa farias.jpeg';
import AtlasAlexandre from '../Images/IMG_8102 - Atlas Alexandre.jpeg';
import BiancaCavalcanti from '../Images/IMG_8112 - Bianca Nascimento.jpeg';
import GraziellaRamos from '../Images/IMG_8136 - Graziella Ramos.jpeg';
import MariaJuliaVitor from '../Images/IMG_8090 - Maria Júlia.jpeg';
import AnaFlavia from '../Images/IMG_1197 - Ana Flávia.jpeg';
import SofiaGabrielle from '../Images/IMG_8124 - Sofia Gabrielle.jpeg';
import TathyaneCavalcante from '../Images/IMG_8106 - Tathyane.jpeg';
import LayssaTavares from '../Images/IMG_1295 - Layssa Tavares.jpeg';
import GabrielBotelho from '../Images/IMG_8770 - Gabriel Botelho.jpeg';


import '../App.css';
import './comiteagnu.css'

function ComiteCii(){
    return(
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
                    <img src={LogoCii} alt="Logo Comité" class="comite-logo"/>
                    <div class="comite-title">
                    <h1>Comitê de Imprensa Internacional</h1>
                    <h2>Carta Capital, BBC, Fox News, Al Jazeera, Instagram, Twitter, Site, Produção Midiática, Fotojornalismo</h2>
                    <a href="https://www.sympla.com.br/evento/pemun-edicao-vi-simulacao-presencial/2453687" class="button guia-button">Inscreva-se</a>
                    <div class="comite-buttons">
                    {/* <!--  <a href="https://drive.google.com/drive/folders/10VLNm0incqFMv8UwBVacvfu6B6z2KDUe?usp=share_link" class="button guia-button">Study Guide</a>
                        <a href="https://drive.google.com/drive/folders/1XNfE3BtoJEyay2ZMs4AgcY9xo30gPNmb?usp=share_link" class="button guia-button">Annex Guide</a> --> */}
                    </div>
                    </div>
                </div>
                <div class="comite-summary">
                    <h3>Resumo do Comitê</h3>
                    <p>É de responsabilidade do Comitê de Imprensa Internacional (CII) compilar, sumarizar e noticiar os principais acontecimentos da simulação, seja de um ponto de vista externo à simulação, falando do evento em si, de seus integrantes e bastidores, ou de maneira simulada, que se dá redigindo e publicando as notícias e falas dos delegados, escrevendo matérias, montando entrevistas e até mesmo entrando ao vivo em momentos específicos da simulação. 
                        Dessa forma, o CII é a ponte que unifica os acontecimentos e integrantes do evento dentro da simulação; sem ele não haveria interação entre os delegados de comitês distintos, participantes da PEMUN como um todo e tampouco entre a simulação e o público geral. Os delegados que decidirem fazer sua  inscrição no CII ficarão responsáveis por construir essa conexão entre todas as partes e permitir que esse fluxo de informações assegure o maior aproveitamento do evento.
                        Apurar os temas de forma crítica, analítica e midiática ao longo da simulação proporcionando o desenvolvimento de um abrangente repertório sociocultural acerca dos diversos países e contextos debatidos. Uma imersão política, cultural e social única.</p>
                </div>
                <div class="comite-representaciones">
                    <h2>Representações</h2>
                    <ul class="representaciones-list">
                    <li>Mídias (12 delegados): 
                        5 Delegado Twitter;2 Delegados Spotted;5 Delegado Instagram.</li>
                    <li>Redação (18 delegados):

                        9 Delegados Fixos;
                        9 Delegado Volantes.</li>
                    <li>Podcast (9 delegados):

                        2 Delegados Entrevistador;
                        3 Delegados Roteirista;
                        4 Delegados de Gravação/Edição.</li>
                    <li>Volantes (2 delegados)</li>
                    </ul>
                </div>
                <div class="comite-directoria">
                    <h2>Directoria</h2>
                    <div class="directoria-members">
                    <div class="member">
                        <img src={RaissaFarias} alt="Raíssa Farias"/>
                        <h3>Raíssa Farias</h3>
                    </div>
                    <div class="member">
                        <img src={AtlasAlexandre} alt="Atlas Alexandre"/>
                        <h3>Atlas Alexandre</h3>
                    </div>
                    <div class="member">
                        <img src={BiancaCavalcanti} alt="Bianca Cavalcanti"/>
                        <h3>Bianca Cavalcanti</h3>
                    </div>
                    <div class="member">
                        <img src={GraziellaRamos} alt="Graziella Ramos"/>
                        <h3>Graziella Ramos</h3>
                    </div>
                    <div class="member">
                        <img src={MariaJuliaVitor} alt="Maria Julia Vitor"/>
                        <h3>Maria Julia Vitor</h3>
                    </div>
                    <div class="member">
                        <img src={AnaFlavia} alt="Ana Flávia"/>
                        <h3>Ana Flávia</h3>
                    </div>
                    <div class="member">
                        <img src={SofiaGabrielle} alt="Sofia Gabrielle"/>
                        <h3>Sofia Gabrielle</h3>
                    </div>
                    <div class="member">
                        <img src={TathyaneCavalcante} alt="Tathyane Cavalcante"/>
                        <h3>Tathyane Cavalcante</h3>
                    </div>
                    </div>
                </div>
                <div class="tutores-section">
                    <h2>Tutores</h2>
                    <p>Membros do Secretariado, Alumni e convidados que orientaram a elaboração do Comitê.</p>
                    <div class="tutores-container">
                    <div class="tutor">
                        <img src={LayssaTavares} alt="Layssa Tavares"/>
                        <p>Layssa Tavares</p>
                    </div>
                    <div class="tutor">
                        <img src={GabrielBotelho} alt="Gabriel Botelho"/>
                        <p>Gabriel Botelho</p>
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
                    <p>Designed and Developed by Ana Beatriz Alves e Caio Barreto</p>
                    <p class="cor-verde">© Copyright 2024, All Rights Reserved by PEMUN</p>
                </div>
                </div>
            </footer>
        </div>
    );
}

export default ComiteCii;
import React from 'react';

import LogoVerde from '../Images/LogoVerde.png';
import TpiLogo from '../Images/TPI-removebg-preview.png';

import BeatrizBatista from '../Images/IMG_8461 - Beatriz Batista.jpeg';
import ConsueloBraga from '../Images/IMG_8456 - Consuelo.jpeg';
import LuisaFerraz from '../Images/IMG_8073 - Luisa Ferraz.jpg';
import JuliaPaula from '../Images/IMG_8446 - Julia Paula.jpeg';
import RobertoMoura from '../Images/IMG_8463 - Roberto Moura.jpeg';
import VictorMoura from '../Images/IMG_8442 - Vitor Moura.jpeg';

import GabriellaNebieker from '../Images/IMG_8595 - Gabriella.jpeg';
import HelenaMendes from '../mages/IMG_8627 - Helena Mendes.jpeg';
import RafaellaAlmeida from '../Images/WhatsApp Image 2024-05-03 at 16.59.59.jpeg';

import insta from '../Images/insta.png';
import email from '../Images/email.png';
import linktree from '../Images/linktree.png';

import '../App.css';
import './comiteagnu.css'

function ComiteTpi() {
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
                    <img src={TpiLogo} alt="Logo Comité" class="comite-logo"/>
                    <div class="comite-title">
                    <h1>Tribunal Penal Internacional</h1>
                    <h2>Caso A: Promotoria v. Al Mahdi</h2>
                    <h2>Caso B: Promotoria v. Bemba</h2>
                    <a href="https://www.sympla.com.br/evento/pemun-edicao-vi-simulacao-presencial/2453687" class="button guia-button">Inscreva-se</a>
                    <div class="comite-buttons">
                        <a href="https://drive.google.com/drive/folders/10VLNm0incqFMv8UwBVacvfu6B6z2KDUe?usp=share_link" class="button guia-button">Guia de Estudos</a>
                        <a href="https://drive.google.com/drive/folders/1XNfE3BtoJEyay2ZMs4AgcY9xo30gPNmb?usp=share_link" class="button guia-button">Guia Procedimental</a>
                    </div>
                    </div>
                </div>
                <div class="comite-summary">
                    <h3>Resumo do Comitê</h3>
                    <p>O caso Al Mahdi envolve um ex-líder rebelde do grupo extremista Ansar Dine que, durante sua atuação no grupo, foi mandante em ataques que destruíram monumentos históricos importantíssimos para a humanidade situados, especificamente, na cidade de Mali. Além de ter sido o primeiro fundamentalista islâmico a enfrentar acusações perante o TPI e o primeiro acusado que veio a assumir a culpa pelo crime que lhe foi imputado, foi também ele o primeiro indivíduo a ser processado unicamente por destruição cultural como delito. Ao decidir processar Al Mahdi, deu-se mais luz à responsabilização dos perpetradores de destruições como essa. De todo modo, o significado desse julgamento transcende o caso específico, delineando um caminho importante para a proteção do patrimônio cultural em situações jurídicas semelhantes no futuro.

                        Já o caso Bemba, de Jean-Pierre Bemba, trata do julgamento do ex-vice-presidente do Congo, acusado de crimes de guerra e crimes contra a humanidade. O caso Bemba acabou por criar um precedente pela aplicação da teoria da responsabilidade de comando por omissão, sendo esta a principal consequência, razão, tambem, pela qual, após alguns anos, suscitaria o enfraquecimento da legitimidade do TPI. Deveria o Sr. Bemba ser absolvido ou condenado? A discussão permanece.</p>
                </div>
                <div class="comite-representaciones">
                    <h2>Representações</h2>
                    <ul class="representaciones-list">
                    <li>7 (sete) Magistrados:

                        1 Presidente;
                        1 Vice-presidente;
                        5 Juízes.</li>
                    <li>6 (seis) Representantes da Acusação</li>
                    <li>6 (seis) Advogados(as) de Defesa</li>
                    </ul>
                </div>
                <div class="comite-directoria">
                    <h2>Diretoria</h2>
                    <div class="directoria-members">
                    <div class="member">
                        <img src={BeatrizBatista} alt="Ana Luisa Porpino"/>
                        <h3>Beatriz Batista Leitão</h3>
                    </div>
                    <div class="member">
                        <img src={ConsueloBraga} alt="Ana Luisa Porpino"/>
                        <h3>Consuêlo Pierre Branco</h3>
                    </div>
                    <div class="member">
                        <img src={LuisaFerraz} alt="Ana Luisa Porpino"/>
                        <h3>Luísa Campos Ferraz</h3>
                    </div>
                    <div class="member">
                        <img src={JuliaPaula} alt="Ana Luisa Porpino"/>
                        <h3>Maria Júlia de Paula</h3>
                    </div>
                    <div class="member">
                        <img src={RobertoMoura} alt="Ana Luisa Porpino"/>
                        <h3>Roberto Moura</h3>
                    </div>
                    <div class="member">
                        <img src={VictorMoura} alt="Ana Luisa Porpino"/>
                        <h3>Victor de Moura</h3>
                    </div>
                    </div>
                </div>
                <div class="tutores-section">
                    <h2>Tutores</h2>
                    <p>Membros do Secretariado, Alumni e convidados que orientaram a elaboração do Comitê.</p>
                    <div class="tutores-container">
                    <div class="tutor">
                        <img src={GabriellaNebieker} alt="Gabriella Nebieker"/>
                        <p>Gabriella Nebieker</p>
                    </div>
                    <div class="tutor">
                        <img src={HelenaMendes} alt="Helena Mendes"/>
                        <p>Helena Mendes</p>
                    </div>
                    <div class="tutor">
                        <img src={RafaellaAlmeida} alt="Rafaella Almeida"/>
                        <p>Rafaella Almeida</p>
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

export default ComiteTpi;
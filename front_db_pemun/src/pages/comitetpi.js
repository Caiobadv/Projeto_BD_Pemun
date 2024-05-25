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
                    <img src={TpiLogo} alt="Logo Comité" className="comite-logo"/>
                    <div className="comite-title">
                    <h1>Tribunal Penal Internacional</h1>
                    <h2>Caso A: Promotoria v. Al Mahdi</h2>
                    <h2>Caso B: Promotoria v. Bemba</h2>
                    <a href="https://www.sympla.com.br/evento/pemun-edicao-vi-simulacao-presencial/2453687" className="button guia-button">Inscreva-se</a>
                    <div className="comite-buttons">
                        <a href="https://drive.google.com/drive/folders/10VLNm0incqFMv8UwBVacvfu6B6z2KDUe?usp=share_link" className="button guia-button">Guia de Estudos</a>
                        <a href="https://drive.google.com/drive/folders/1XNfE3BtoJEyay2ZMs4AgcY9xo30gPNmb?usp=share_link" className="button guia-button">Guia Procedimental</a>
                    </div>
                    </div>
                </div>
                <div className="comite-summary">
                    <h3>Resumo do Comitê</h3>
                    <p>O caso Al Mahdi envolve um ex-líder rebelde do grupo extremista Ansar Dine que, durante sua atuação no grupo, foi mandante em ataques que destruíram monumentos históricos importantíssimos para a humanidade situados, especificamente, na cidade de Mali. Além de ter sido o primeiro fundamentalista islâmico a enfrentar acusações perante o TPI e o primeiro acusado que veio a assumir a culpa pelo crime que lhe foi imputado, foi também ele o primeiro indivíduo a ser processado unicamente por destruição cultural como delito. Ao decidir processar Al Mahdi, deu-se mais luz à responsabilização dos perpetradores de destruições como essa. De todo modo, o significado desse julgamento transcende o caso específico, delineando um caminho importante para a proteção do patrimônio cultural em situações jurídicas semelhantes no futuro.

                        Já o caso Bemba, de Jean-Pierre Bemba, trata do julgamento do ex-vice-presidente do Congo, acusado de crimes de guerra e crimes contra a humanidade. O caso Bemba acabou por criar um precedente pela aplicação da teoria da responsabilidade de comando por omissão, sendo esta a principal consequência, razão, tambem, pela qual, após alguns anos, suscitaria o enfraquecimento da legitimidade do TPI. Deveria o Sr. Bemba ser absolvido ou condenado? A discussão permanece.</p>
                </div>
                <div className="comite-representaciones">
                    <h2>Representações</h2>
                    <ul className="representaciones-list">
                    <li>7 (sete) Magistrados:

                        1 Presidente;
                        1 Vice-presidente;
                        5 Juízes.</li>
                    <li>6 (seis) Representantes da Acusação</li>
                    <li>6 (seis) Advogados(as) de Defesa</li>
                    </ul>
                </div>
                <div className="comite-directoria">
                    <h2>Diretoria</h2>
                    <div className="directoria-members">
                    <div className="member">
                        <img src={BeatrizBatista} alt="Ana Luisa Porpino"/>
                        <h3>Beatriz Batista Leitão</h3>
                    </div>
                    <div className="member">
                        <img src={ConsueloBraga} alt="Ana Luisa Porpino"/>
                        <h3>Consuêlo Pierre Branco</h3>
                    </div>
                    <div className="member">
                        <img src={LuisaFerraz} alt="Ana Luisa Porpino"/>
                        <h3>Luísa Campos Ferraz</h3>
                    </div>
                    <div className="member">
                        <img src={JuliaPaula} alt="Ana Luisa Porpino"/>
                        <h3>Maria Júlia de Paula</h3>
                    </div>
                    <div className="member">
                        <img src={RobertoMoura} alt="Ana Luisa Porpino"/>
                        <h3>Roberto Moura</h3>
                    </div>
                    <div className="member">
                        <img src={VictorMoura} alt="Ana Luisa Porpino"/>
                        <h3>Victor de Moura</h3>
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
                        <img src={HelenaMendes} alt="Helena Mendes"/>
                        <p>Helena Mendes</p>
                    </div>
                    <div className="tutor">
                        <img src={RafaellaAlmeida} alt="Rafaella Almeida"/>
                        <p>Rafaella Almeida</p>
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

export default ComiteTpi;
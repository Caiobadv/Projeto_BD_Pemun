import React from "react";

import LogoVerde from '../Images/LogoVerde.png';
import UnscLogo from '../Images/unsc_v3__2_-removebg-preview.png';
import AliciaMaximo from '../Images/Alí­cia Máximo.jpg';
import IsadoraBatista from '../Images/ISADORA BATISTA.jpg';
import LuccaLimongi from '../Images/IMG_8251 - Lucca Limongi.jpeg';
import MariaHuergo from '../Images/IMG_8239 - Maria Fernanda Huergo.jpeg';
import RaviAlmeida from '../Images/Ravi Souza.jpg';
import GabrielBotelho from '../Images/IMG_8770 - Gabriel Botelho.jpeg';
import ClaraFerraz from '../Images/IMG_8656 - Maria Clara Ferraz.jpeg';

import insta from '../Images/insta.png';
import email from '../Images/email.png';
import linktree from '../Images/linktree.png';

import '../App.css';
import './comiteagnu.css'

function ComiteUnsc() {
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
                    <img src={UnscLogo} alt="Logo Comité" className="comite-logo"/>
                    <div className="comite-title">
                    <h1>United Nations Security Council</h1>
                    <h2>Topic A: The weaponization of technology in armed conflicts</h2>
                    <h2>Topic B: The situation in Central Sahel</h2>
                    <a href="https://www.sympla.com.br/evento/pemun-edicao-vi-simulacao-presencial/2453687" className="button guia-button">Inscreva-se</a>
                    <div className="comite-buttons">
                        <a href="https://drive.google.com/drive/folders/10VLNm0incqFMv8UwBVacvfu6B6z2KDUe?usp=share_link" className="button guia-button">Study Guide</a>
                        <a href="https://drive.google.com/drive/folders/1XNfE3BtoJEyay2ZMs4AgcY9xo30gPNmb?usp=share_link" className="button guia-button">Annex Guide</a>
                    </div>
                    </div>
                </div>
                <div className="comite-summary">
                    <h3>Committee Summary</h3>
                    <p>The weaponization of technology — an ongoing progress, ever since the late century — marks a transformative shift in the dynamics of global power, as it reshapes the nature of conflicts and international peace. Rapid advancements in technology have not only accelerated progress and instigated a new way of observing conflicts, but also opened new barriers for teasing and pushing the limits of war and the peak of usage of violence. From cyberspace to artificial intelligence, and even outer space, the convergence of “cutting-edge” technologies has catalysed a situation where innovation holds immense potential not just for progress, but also, and mainly, for disruption and conflict.
            
                    Through its first suggested topic, the discussion will open towards the limits of the usage of technology in conflict, exploring its nuances and how it can overpower a side in a conflict and affect millions of people in the most different manners possible: mass destruction, hunger, armed conflicts, displacement, and the deprivation and disruption of the human dignity.
                    
                    Likewise, the second topic will put a spotlight on an often forgotten and less talked region, at the center of one of the most cruel, continuous conflicts of contemporary history, happenimg in the countries of Burkina Faso, Mali, and Niger. The debate will open towards matters involving climate change and environmental disruption, hunger, extreme poverty, displacement, economical crisis, armed conflicts, and socio-political issues that contemplate antidemocratic and imperialistic tendencies as a colonialism heritage.</p>
                </div>
                <div className="comite-representaciones">
                    <h2>Representations</h2>
                    <ul className="representaciones-list">
                    <li>United Kingdom of Great Britain and Northern Ireland</li>
                    <li>French Republic</li>
                    <li>People's Republic of China</li>
                    <li>Russian Federation</li>
                    <li>United States of America</li>
                    <li>Republic of India</li>
                    <li>People's Democratic Republic of Algeria</li>
                    <li>Japan</li>
                    <li>Republic of Ecuador</li>
                    <li>Republic of Korea</li>
                    <li>Republic of Malta</li>
                    <li>Republic of Mozambique</li>
                    <li>Democratic People's Republic of Korea</li>
                    <li>Republic of Sierra Leone</li>
                    <li>Republic of Slovenia</li>
                    <li>Swiss Confederation</li>
                    <li>Burkina Faso</li>
                    <li>Human Rights Watch</li>
                    <li>Co-operative Republic of Guyana</li>
                    <li>Republic of Mali</li>
                    <li>Republic of Niger</li>
                    <li>State of Israel</li>
                    <li>State of Palestine</li>
                    <li>Ukraine</li>
                    </ul>
                </div>
                <div className="comite-directoria">
                    <h2>Board of Directors</h2>
                    <div className="directoria-members">
                    <div className="member">
                        <img src={AliciaMaximo} alt="Alícia Máximo"/>
                        <h3>Alicia Máximo</h3>
                    </div>
                    <div className="member">
                        <img src={IsadoraBatista} alt="Isadora Batista"/>
                        <h3>Isadora Magalhães</h3>
                    </div>
                    <div className="member">
                        <img src={LuccaLimongi} alt="Lucca Limongi"/>
                        <h3>Lucca Limongi</h3>
                    </div>
                    <div className="member">
                        <img src={MariaHuergo} alt="Maria Fernanda Huergo"/>
                        <h3>Maria Fernanda Huergo</h3>
                    </div>
                    <div className="member">
                        <img src={RaviAlmeida} alt="Ana Luisa Porpino"/>
                        <h3>Ravi Almeida</h3>
                    </div>
                    </div>
                </div>
                <div className="tutores-section">
                    <h2>Tutors</h2>
                    <p>Members of the Secretariat, Alumini and guests who guided the preparation of the Committee.</p>
                    <div className="tutores-container">
                    <div className="tutor">
                        <img src={GabrielBotelho} alt="Gabriel Botelho"/>
                        <p>Gabriel Botelho</p>
                    </div>
                    <div className="tutor">
                        <img src={ClaraFerraz} alt="Maria Clara Ferraz"/>
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
                    <p>Designed and Developed by Ana Beatriz Alves, Caio Barreto e Virna Amaral</p>
                    <p className="cor-verde">© Copyright 2024, All Rights Reserved by PEMUN</p>
                </div>
                </div>
            </footer>

        </div>
    );
}

export default ComiteUnsc;

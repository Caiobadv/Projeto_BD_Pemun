import React from 'react';

import { Link } from 'react-router-dom';

import LogoVerde from '../Images/LogoVerde.png';

import Secretariado from '../Images/secretariado.png';
import Diretoria from '../Images/diretoria.png';

import AnaAlves from '../Images/IMG_1205 - Ana Beatriz Alves.jpeg';
import RicardoAlbuquerque from '../Images/IMG_1161 - Ricardo Albuquerque.jpeg';
import CaioBarreto from '../Images/Caio Barreto.jpeg';
import MariaDubeux from '../Images/IMG_1220 - Maria Eugênia Dubeux.jpeg';
import MarianaAssis from '../Images/IMG_8077 - Mariana Assis.jpeg';
import LayssaTavares from '../Images/IMG_1295 - Layssa Tavares.jpeg';
import ClaraFerraz from '../Images/IMG_8656 - Maria Clara Ferraz.jpeg';
import VitoriaSousa from '../Images/IMG_8255 - Vitória Sousa.jpeg';
import ViniciusRenato from '../Images/IMG_8585 - Vinícius Renato.jpeg';
import MarianaTorres from '../Images/IMG_1236 - Mariana Torres.jpeg';
import GabrielBotelho from '../Images/IMG_8770 - Gabriel Botelho.jpeg';
import MariaAlagao from '../Images/IMG_8756 - Maria Luísa Alagão.jpeg';
import GabriellaNebieker from '../Images/IMG_8595 - Gabriella.jpeg';
import HelenaMendes from '../Images/IMG_8627 - Helena Mendes.jpeg';
import LouisGuerra from '../Images/IMG_8616 - Louise Reimine.jpeg';

import AgnuStaff from '../Images/AGNUCOMM.png';
import CamStaff from '../Images/camcomm.png';
import EscapStaff from '../Images/escapcomm.png';
import CiiStaff from '../Images/CIIcomm.png';
import UncheStaff from '../Images/unchecomm.png';
import CorteStaff from '../Images/corteidhcomm.png';
import CcoiStaff from '../Images/ccoicomm.png';
import GabStaff from '../Images/gabcomm.png';
import OnuMulheresStaff from '../Images/onuMulherescomm.png';
import PnudStaff from '../Images/pnudcomm.jpeg';
import TpiStaff from '../Images/tpicomm.png';
import UnscStaff from '../Images/UNSCcomm.png';

import insta from '../Images/insta.png';
import email from '../Images/email.png';
import linktree from '../Images/linktree.png';

import '../App.css';
import './staff.css'

function Staff() {
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
                    <li class="navigation-item"><Link to='/loja' class="navigation-link">Nossa Loja</Link></li>
                    </ul>
                    </nav>
                    <a  href="https://linktr.ee/Pemun" className="button contato-button">Contato</a>
                </div>
                </header>

                <section id="staff">
                    <h2 className="section-title">Staff</h2>
                    <p className="section-description">Nossa equipe, ou Staff, divide-se entre Secretariado e Diretoria.</p>
                    <div className="staff-container">
                    <div className="team-category">
                        <div className="team-image">
                        <img src={Secretariado} alt="Equipe Secretariado"/>
                        </div>
                        <h3>Secretariado</h3>
                        <p>Dividido nos setores Acadêmico, Administrativo-Financeiro, Comunicação-Marketing e Tecnologia-Inovação, o Secretariado é a materialização da gestão do projeto, atuando do início ao fim em questões de tutoria e orientação, logística e parcerias, divulgação e consultoria.</p>
                    </div>
                    <div className="team-category">
                        <div className="team-image">
                        <img src={Diretoria} alt="Equipe Diretoria"/>
                        </div>
                        <h3>Diretoria</h3>
                        <p>Os Diretores são o coração do nosso projeto, sendo responsáveis por propor os comitês e temas a serem simulados, formular os guias de auxílio (estudo, anexo, procedimental e técnico) e treinar os futuros delegados, ainda sendo os mediadores dos debates que acontecem em cada comitê.</p>
                    </div>
                    </div>
                </section>
                
                <section id="secretariado">
                <div className="container">
                    <h2 className="team-title">Secretariado</h2>
                    <div className="row">
                    <div className="team-member">
                        <img src={AnaAlves} alt="Ana Beatriz Alves" className="team-photo"/>
                        <div className="team-info">
                        <h3 className="member-name">Ana Beatriz Alves</h3>
                        <p className="member-role">Secretária Geral</p>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src={RicardoAlbuquerque} alt="Ricardo Albuquerque" className="team-photo"/>
                        <div className="team-info">
                        <h3 className="member-name">Ricardo Albuquerque</h3>
                        <p className="member-role">Vice-Secretário Geral</p>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="team-member">
                        <img src={CaioBarreto} alt="Caio Barreto" className="team-photo"/>
                        <div className="team-info">
                        <h3 className="member-name">Caio Barreto</h3>
                        <p className="member-role">Secretário de Tecnologia e Inovação</p>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src={MariaDubeux} alt="Maria Eugênia Dubeux" className="team-photo"/>
                        <div className="team-info">
                        <h3 className="member-name">Maria Eugênia Dubeux</h3>
                        <p className="member-role">Secretária Acadêmica</p>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src={MarianaAssis} alt="Mariana Assis" className="team-photo"/>
                        <div className="team-info">
                        <h3 className="member-name">Mariana Assis</h3>
                        <p className="member-role">Secretária Administrativa-Financeira</p>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src={LayssaTavares} alt="Layssa Tavares" className="team-photo"/>
                        <div className="team-info">
                        <h3 className="member-name">Layssa Tavares</h3>
                        <p className="member-role">Secretária de Comunicação e Marketing</p>
                        </div>
                    </div>
                    </div>
                    <div className="row">  
                    <div className="team-member">
                        <img src={ClaraFerraz} alt="Maria Clara Ferraz" className="team-photo"/>
                        <div className="team-info">
                        <h3 className="member-name">Maria Clara Ferraz</h3>
                        <p className="member-role">Secretária Acadêmica</p>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src={VitoriaSousa} alt="Vitória Sousa" className="team-photo"/>
                        <div className="team-info">
                        <h3 className="member-name">Vitória Sousa</h3>
                        <p className="member-role">Secretária Acadêmica</p>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src={ViniciusRenato} alt="Vinícius Santos" className="team-photo"/>
                        <div className="team-info">
                        <h3 className="member-name">Vinícius Santos</h3>
                        <p className="member-role">Secretário Administrativo-Financeiro</p>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src={MarianaTorres} alt="Mariana Torres" className="team-photo"/>
                        <div className="team-info">
                        <h3 className="member-name">Mariana Torres</h3>
                        <p className="member-role">Secretária Acadêmica</p>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src={GabrielBotelho} alt="Gabriel Botelho" className="team-photo"/>
                        <div className="team-info">
                        <h3 className="member-name">Gabriel Botelho</h3>
                        <p className="member-role">Secretário Acadêmico</p>
                        </div>
                    </div>
                    </div>
                    <div className="row"> 
                    <div className="team-member">
                        <img src={MariaAlagao} alt="Maria Luísa Alagão" className="team-photo"/>
                        <div className="team-info">
                        <h3 className="member-name">Maria Luísa Alagão</h3>
                        <p className="member-role">Secretária Administrativa-Financeira</p>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src={GabriellaNebieker} alt="Vitória Sousa" className="team-photo"/>
                        <div className="team-info">
                        <h3 className="member-name">Vitória Sousa</h3>
                        <p className="member-role">Secretária Acadêmica</p>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src={HelenaMendes} alt="Helena Mendes" className="team-photo"/>
                        <div className="team-info">
                        <h3 className="member-name">Helena Mendes</h3>
                        <p className="member-role">Secretária Acadêmica</p>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src={LouisGuerra} alt="Louise Reimine" className="team-photo"/>
                        <div className="team-info">
                        <h3 className="member-name">Louise Reimine</h3>
                        <p className="member-role">Secretária de Comunicação e Marketing</p>
                        </div>
                    </div>
                    </div>
                </div>
                </section>

                <section id="diretoria">
                    <h2 className="section-title">Diretoria</h2>
                    <div className="committee-grid">
                    <div className="committee">
                        <img src={AgnuStaff} alt="Assembleia Geral das Nações Unidas" className="committee-photo"/>
                        <h3 className="committee-name">Assembleia Geral das Nações Unidas (AGNU)</h3>
                        <Link to= '/comiteagnu'>
                            <button className="info-button" onclick="location.href='comiteagnu.html'">Saiba Mais</button>
                        </Link>
                    </div>
                    <div className="committee">
                        <img src={CamStaff} alt="Comisión de Asuntos Migratorios" className="committee-photo"/>
                        <h3 className="committee-name">Comisión de Asuntos Migratorios (CAM)</h3>
                        <Link to= '/comitecam'>
                            <button className="info-button" onclick="location.href='ComiteCam.html'">Saiba Mais</button>
                        </Link>
                    </div>
                    <div className="committee">
                        <img src={EscapStaff} alt="Comissão Econômica e Social para a Ásia e o Pacífico(ESCAP)" className="committee-photo"/>
                        <h3 className="committee-name">Comissão Econômica e Social para a Ásia e o Pacífico (ESCAP)</h3>
                        <Link to= '/comiteescap'>
                            <button className="info-button" onclick="location.href='ComiteEscap.html'">Saiba Mais</button>
                        </Link>
                    </div>
                    <div className="committee">
                        <img src={CiiStaff} alt="Comitê de Imprensa Internacional (CII)" className="committee-photo"/>
                        <h3 className="committee-name">Comitê de Imprensa Internacional (CII)</h3>
                        <Link to= '/comitecii'>
                            <button className="info-button" onclick="location.href='comitecii.html'">Saiba Mais</button>
                        </Link>
                    </div>
                    <div className="committee">
                        <img src={UncheStaff} alt="Conferência das Nações Unidas sobre o Meio Ambiente Humano (UNCHE)" className="committee-photo"/>
                        <h3 className="committee-name">Conferência das Nações Unidas sobre o Meio Ambiente Humano (UNCHE)</h3>
                        <Link to= '/comiteunche'>
                            <button className="info-button" onclick="location.href='comiteunche.html'">Saiba Mais</button>
                        </Link>
                    </div>
                    <div className="committee">
                        <img src={CorteStaff} alt="Corte Interamericana de Direitos Humanos (Corte IDH)" className="committee-photo"/>
                        <h3 className="committee-name">Corte Interamericana de Direitos Humanos (Corte IDH)</h3>
                        <Link to= '/comitecorte'>
                            <button className="info-button" onclick="location.href='comitecorte.html'">Saiba Mais</button>
                        </Link>
                    </div>
                    <div className="committee">
                        <img src={CcoiStaff} alt="Creative Community Outreach Initiative (CCOI)" className="committee-photo"/>
                        <h3 className="committee-name">Creative Community Outreach Initiative (CCOI)</h3>
                        <Link to= '/comiteccoi'>
                            <button className="info-button" onclick="location.href='comiteccoi.html'">Saiba Mais</button>
                        </Link>
                    </div>
                    <div className="committee">
                        <img src={GabStaff} alt="Gabinete Histórico de Guerra (GAB)" className="committee-photo"/>
                        <h3 className="committee-name">Gabinete Histórico de Guerra (GAB)</h3>
                        <Link to= '/comitegab'>
                            <button className="info-button" onclick="location.href='comitegab.html'">Saiba Mais</button>
                        </Link>
                    </div>
                    <div className="committee">
                        <img src={OnuMulheresStaff} alt="Organização das Nações Unidas para Mulheres (ONU Mulheres)" className="committee-photo"/>
                        <h3 className="committee-name">Organização das Nações Unidas para Mulheres (ONU Mulheres)</h3>
                        <Link to= '/comiteonu'>
                            <button className="info-button" onclick="location.href='comiteonu.html'">Saiba Mais</button>
                        </Link>
                    </div>
                    <div className="committee">
                        <img src={PnudStaff} alt="Programa das Nações Unidas para o Desenvolvimento (PNUD)" className="committee-photo"/>
                        <h3 className="committee-name">Programa das Nações Unidas para o Desenvolvimento (PNUD)</h3>
                        <Link to= '/comitepnud'>
                            <button className="info-button" onclick="location.href='comitepnud.html'">Saiba Mais</button>
                        </Link>
                    </div>
                    <div className="committee">
                        <img src={TpiStaff} alt="Tribunal Penal Internacional (TPI)" className="committee-photo"/>
                        <h3 className="committee-name">Tribunal Penal Internacional (TPI)</h3>
                        <Link to= '/comitetpi'>
                            <button className="info-button" onclick="location.href='comitetpi.html'">Saiba Mais</button>
                        </Link>
                    </div>
                    <div className="committee">
                        <img src={UnscStaff} alt="United Nations Security Council (UNSC)" className="committee-photo"/>
                        <h3 className="committee-name">United Nations Security Council (UNSC)</h3>
                        <Link to= '/comiteunsc'>
                            <button className="info-button" onclick="location.href='comiteunsc.html'">Saiba Mais</button>
                        </Link>
                    </div>
                    </div>
                </section>

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

export default Staff;
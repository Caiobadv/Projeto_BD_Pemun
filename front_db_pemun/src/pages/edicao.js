import React from 'react';

import { Link } from 'react-router-dom';

import LogoVerde from '../Images/LogoVerde.png';
import BannerEdicao from '../Images/Group 3.png';
import IconLoc from '../Images/localiza.png';

import AgnuLogo from '../Images/agnu-removebg-preview.png';
import CamLogo from '../Images/CAM_V3-removebg-preview.png';
import EscapLogo from '../Images/escap_v7-removebg-preview.png';
import CiiLogo from '../Images/CII_V6-removebg-preview.png';
import UncheLogo from '../Images/unche_v5-removebg-preview.png';
import CorteLogo from '../Images/corte-removebg-preview.png';
import CcoiLogo from '../Images/CCOI3-removebg-preview.png';
import GabLogo from '../Images/GAB_V4-removebg-preview.png';
import OnuMulheresLogo from '../Images/onu_mulheres-removebg-preview.png';
import PnudLogo from '../Images/pnud-removebg-preview.png';
import TpiLogo from '../Images/TPI-removebg-preview.png';
import UnscLogo from '../Images/unsc_v3__2_-removebg-preview.png';

import insta from '../Images/insta.png';
import email from '../Images/email.png';
import linktree from '../Images/linktree.png';

import '../App.css';
import './edicao.css';

function Edicao() {
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
                <div className="container">
                    <img src={BannerEdicao} alt="PEMUN Event Banner" className="full-width-image"/>
                </div>
            </main>
            <section className="localizacao">
                <div className="container">
                    <div className="endereco">
                        <img src={IconLoc} alt="Ícone de localização" className="icon-localizacao"/>
                        <p className="endereco-texto">Unit PE - Recife<br/>Av. Mal. Mascarenhas de Morais, 3905 - Imbiribeira, Recife - PE, 51150-003</p>
                    </div>
                </div>
                <div className="event-dates">
                    <div className="container">
                        <div className="date-item">
                            <span className="date">03/07</span>
                            <div className="event">Cerimônia de Abertura</div>
                        </div>
                        <div className="date-item">
                            <span className="date">04/07</span>
                            <div className="event">Dias</div>
                        </div>
                        <div className="date-item">
                            <span className="date">05/07</span>
                            <div className="event">de</div>
                        </div>
                        <div className="date-item">
                            <span className="date">06/07</span>
                            <div className="event">Simulação</div>
                        </div>
                        <div className="date-item">
                            <span className="date">07/07</span>
                            <div className="event">Festa de Encerramento</div>
                        </div>
                        <div className="event-signup-button">
                            <a href="https://www.sympla.com.br/pemun-edicao-vi--simulacao-presencial__2453687" className="button signup-button">INSCREVA-SE</a>
                        </div>                
                    </div>
                </div>
            </section>
            <section className="comites">
                <h2 className="comites-title">Confira os comitês que serão simulados!</h2>
                <div className="comites-grid">
                <div className="comite-item">
                    <Link to='/comiteagnu' className='navigation-link'>
                    <img src={AgnuLogo} alt="Assembleia Geral das Nações Unidas"/>
                    <h3>AGNU</h3>
                    <p>Assembleia Geral das Nações Unidas - Ensino Médio</p>
                    </Link>
                </div>
                <div className="comite-item">
                    <Link to='/comitecam' className='navigation-link'>
                    <img src={CamLogo} alt="Comisión de Asuntos Migratorios"/>
                    <h3>CAM</h3>
                    <p>Comisión de Asuntos Migratorios - Simulado em Espanhol</p>
                    </Link>
                </div>
                <div className="comite-item">
                    <Link to='/comiteescap' className='navigation-link'>
                    <img src={EscapLogo} alt="Comissão Econômica e Social para a Ásia e o Pacífico"/>
                    <h3>ESCAP</h3>
                    <p>Comissão Econômica e Social para a Ásia e o Pacífico</p>
                    </Link>
                </div>
                <div className="comite-item">
                    <Link to='/comitecii' className='navigation-link'>
                    <img src={CiiLogo} alt="Comitê de Imprensa Internacional"/>
                    <h3>CII</h3>
                    <p>Comitê de Imprensa Internacional</p>
                    </Link>
                </div>
                <div className="comite-item">
                    <Link to='/comiteunche' className='navigation-link'>
                    <img src={UncheLogo} alt="Conferência das Nações Unidas sobre o Meio Ambiente Humano"/>
                    <h3>UNCHE</h3>
                    <p>Conferência das Nações Unidas sobre o Meio Ambiente Humano</p>
                    </Link>
                </div>
                <div className="comite-item">
                    <Link to='/comitecorte' className='navigation-link'>
                    <img src={CorteLogo} alt="Corte Interamericana de Direitos Humanos"/>
                    <h3>CORTE IDH</h3>
                    <p>Corte Interamericana de Direitos Humanos</p>
                    </Link>
                </div>
                <div className="comite-item">
                    <Link to='/comiteccoi' className='navigation-link'>
                    <img src={CcoiLogo} alt="Creative Community Outreach Initiative"/>
                    <h3>CCOI</h3>
                    <p>Creative Community Outreach Initiative</p>
                    </Link>
                </div>
                <div className="comite-item">
                    <Link to='/comitegab' className='navigation-link'>
                    <img src={GabLogo} alt="Gabinete Histórico de Guerra"/>
                    <h3>GAB</h3>
                    <p>Gabinete Histórico de Guerra - Gabinete Duplo</p>
                    </Link>
                </div>
                <div className="comite-item">
                    <Link to='/comiteonu' className='navigation-link'>
                    <img src={OnuMulheresLogo} alt="Organização das Nações Unidas para Mulheres"/>
                    <h3>ONU MULHERES</h3>
                    <p>Organização das Nações Unidas para Mulheres</p>
                    </Link>
                </div>
                <div className="comite-item">
                    <Link to='/comitepnud' className='navigation-link'>
                    <img src={PnudLogo} alt="Programa das Nações Unidas para o Desenvolvimento"/>
                    <h3>PNUD</h3>
                    <p>Programa das Nações Unidas para o Desenvolvimento - Agregação Cultural</p>
                    </Link>
                </div>
                <div className="comite-item">
                    <Link to='/comitetpi' className='navigation-link'>
                    <img src={TpiLogo} alt="Tribunal Penal Internacional"/>
                    <h3>TPI</h3>
                    <p>Tribunal Penal Internacional</p>
                    </Link>
                </div>
                <div className="comite-item">
                    <Link to='/comiteunsc' className='navigation-link'>
                    <img src={UnscLogo} alt="United Nations Security Council"/>
                    <h3>UNSC</h3>
                    <p>United Nations Security Council - Simulado em Inglês</p>
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
                    <p>Designed and Developed by Ana Beatriz Alves, Caio Barreto e Virna Amaral</p>
                    <p className="cor-verde">© Copyright 2024, All Rights Reserved by PEMUN</p>
                </div>
                </div>
            </footer>
        </div>
    );
}

export default Edicao;
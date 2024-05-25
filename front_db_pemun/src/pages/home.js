import React from 'react';

import { Link } from 'react-router-dom';

import principal from '../Images/principal.jpg';
import Imagem1 from '../Images/Imagem1Carrosel.JPG';
import Missao1 from '../Images/missao1.png';
import Missao2 from '../Images/missao2.png';
import Missao3 from '../Images/missao3.png';
import LogoRedBull from '../Images/redbull.png';
import LogoSOI from '../Images/Soi.webp'
import LogoSONU from '../Images/SONU.jpeg';
import LogoPBMUN from '../Images/pbmun.png';
import LogoUNIT from '../Images/UNIT.png';
import LogoUFPE from '../Images/FEDERAL.png';
import LogoFAMUN from '../Images/famun_2024_horizontal-removebg-preview.png';
import LogoIBMRMUN from '../Images/image-removebg-preview.png';
import LogoVerde from '../Images/LogoVerde.png';

import insta from '../Images/insta.png';
import email from '../Images/email.png';
import linktree from '../Images/linktree.png';
import LogoBranco from '../Images/LogoBranco.png';

import '../App.css';
import './home.css'

function Home() {
  return (
      <div>
        <header className="site-header">
          <div className="header-top">
            <img src={LogoVerde} alt="Logo PEMUN" className="logo" />
            <nav className="navigation">
              <ul className="navigation-list">
                <li className="navigation-item"><Link to="/" className="navigation-link">Home</Link></li>
                <li className="navigation-item"><Link to="/edicao" className="navigation-link">Edição VI</Link></li>
                <li className="navigation-item"><Link to="/arquivos" className="navigation-link">Arquivos</Link></li>
                <li className="navigation-item"><Link to="/staff" className="navigation-link">Staff</Link></li>
              </ul>
            </nav>
            <a href="https://linktr.ee/Pemun" className="button contato-button">Contato</a>
          </div>
        </header>

        <section id="home" className="intro-section">
          <img src={principal} alt="Background" className="intro-image"/>
        </section>
        <div className="content-below-image">
          <img src={LogoBranco} alt="Background" className="logo" />
          <h2>EDIÇÃO VI</h2>
          <p>2024</p>
          <Link to="/edicao" className="access-button">Acessar</Link>
          <p>Confira os materiais da 6ª Edição!</p>
        </div>

        <section id="quem-somos" className="about-section">
          <div className="about-text">
            <h2>Quem somos?</h2>
            <h1>Primeiro modelo de simulação das Nações Unidas e organismos internacionais para universitários de Pernambuco</h1>
            <p className="about-paragraph">A partir da vontade de incluir Pernambuco na tradição de simulações, trazendo a oportunidade para a prática de habilidades de diplomacia, oratória, negociação e cooperação internacional, estudantes de Ciência Política e Direito da UFPE se uniram para criar o projeto em 2017, realizando nossa 1ª edição em 2018.</p>
            <Link to="/arquivos" className="edicoes-passadas">Confira as edições passadas da PEMUN</Link>
            
          </div>
          <section id="imagem-destacada" className="imagem-destacada">
            <img src={Imagem1} alt="Descrição da imagem" />
          </section>
        </section>

        <section id="missao" className="mission-section">
          <h2 className="cor-verde">Nossa missão</h2>
          <div className="mission-columns">
            <div className="mission-column">
              <img src={Missao1} alt="Descrição da Imagem 1" />
              <p><br/>Praticar os aprendizados do ambiente acadêmico, representando diplomatas, juízes internacionais e chefes de Estado, discutindo questões da agenda internacional.</p>
            </div>
            <div className="mission-column">
              <img src={Missao2} alt="Descrição da Imagem 2" />
              <p><br/>Aprender regras e procedimentos específicos de ambientes diplomáticos, inseridos no processo de elaboração de resolução.</p>
            </div>
            <div className="mission-column">
              <img src={Missao3} alt="Descrição da Imagem 3" />
              <p><br/>Desenvolver o raciocínio crítico, a capacidade deliberativa, o senso de trabalho coletivo e habilidades analíticas.</p>
            </div>
          </div>
          <div className="mission-stats">
            <div className="stat">
              <h3>5</h3>
              <p>edições realizadas</p>
            </div>
            <div className="stat">
              <h3>30+</h3>
              <p>guias produzidos</p>
            </div>
            <div className="stat">
              <h3>4+</h3>
              <p>simulações parceiras</p>
            </div>
            <div className="stat">
              <h3>+</h3>
              <p>muito mais por vir...</p>
            </div>
          </div>
        </section>

        <section id="countdown" className="countdown-section">
          <h2 className="cor-verde">Atualmente estamos na preparação para nossa 6ª Edição!</h2>
          <div className="main-container">
            <div className="countdown-text">
              <h3>Anota aí...</h3>
              <h3>Esperamos você entre</h3>
              <h3>os dias 3 e 7 de Julho</h3>
              <h3>de 2024!</h3>
            </div>
            <div className="countdown-timer">
              <div className="time-box">
                <span id="days" className="time-number"></span>
                <div className="time-label">dias</div>
              </div>
              <div className="time-box">
                <span id="hours" className="time-number"></span>
                <div className="time-label">horas</div>
              </div>
              <div className="time-box">
                <span id="minutes" className="time-number"></span>
                <div className="time-label">minutos</div>
              </div>
            </div>
          </div>
          <p>Guias já disponíveis, confira agora!</p>
          <Link to="/edicao" className="access-button">Acessar</Link>
          
        </section>

        <section id="partners" className="partners-section">
          <div className="partners-container">
            <div className="partners-title">
              <h2 className="cor-verde">Nossos</h2>
              <h2 className="cor-verde">Parceiros</h2>
            </div>
            <div className="partners-logos">
              <a href="https://www.redbull.com/br-pt/" className="partner"><img src={LogoRedBull} alt="Logo Red Bull" /></a>
              <a href="https://www.soi.org.br/" className="partner"><img src={LogoSOI} alt="Logo SOI" /></a>
              <a href="https://www.sonu.com.br/" className="partner"><img src={LogoSONU} alt="Logo SONU" /></a>
              <a href="https://www.instagram.com/sipempbmun/?ref=nucleo.jor.br" className="partner"><img src={LogoPBMUN} alt="Logo PBMUN" /></a>
              <a href="https://www.unit.br/" className="partner"><img src={LogoUNIT} alt="Logo UNIT" /></a>
              <a href="https://www.ufpe.br/" className="partner"><img src={LogoUFPE} alt="Logo Universidade Federal de Pernambuco" /></a>
              <a href="https://famun.com.br/" className="partner"><img src={LogoFAMUN} alt="Logo FAMUN" /></a>
              <a href="https://www.ibmrmun.com/" className="partner"><img src={LogoIBMRMUN} alt="Logo IBRMUN" /></a>
            </div>
          </div>
        </section>

        <footer className="site-footer">
          <div className="footer-content">
            <div className="footer-logo-socials">
              <img src={LogoVerde} alt="Logo PEMUN" className="footer-logo" />
              <div className="social-icons">
                <a href="https://www.instagram.com/pernambucomun/" className="social-icon"><img src={insta} alt="Instagram" /></a>
                <a href="mailto:pernambucomun@gmail.com" className="social-icon"><img src={email} alt="email" /></a>
                <a href="https://linktr.ee/Pemun" className="social-icon"><img src={linktree} alt="Linktree" /></a>
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

export default Home;
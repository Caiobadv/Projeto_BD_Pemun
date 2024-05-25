import React from 'react';
import principal from './Images/principal.jpg';
import './App.css';
import './home.css'
function App() {
  return (
      <div>
        <header className="site-header">
          <div className="header-top">
            <img src="Images/LogoVerde.png" alt="Logo PEMUN" className="logo" />
            <nav className="navigation">
              <ul className="navigation-list">
                <li className="navigation-item"><a href="index.html" className="navigation-link">Home</a></li>
                <li className="navigation-item"><a href="edicao.html" className="navigation-link">Edição VI</a></li>
                <li className="navigation-item"><a href="arquivos.html" className="navigation-link">Arquivos</a></li>
                <li className="navigation-item"><a href="staff.html" className="navigation-link">Staff</a></li>
              </ul>
            </nav>
            <a href="https://linktr.ee/Pemun" className="button contato-button">Contato</a>
          </div>
        </header>

        <section id="home" className="intro-section">
          <img src={principal} alt="Background" className="intro-image"/>
        </section>
        <div className="content-below-image">
          <img src="Images/LogoBranco.png" alt="Background" className="logo" />
          <h2>EDIÇÃO VI</h2>
          <p>2024</p>
          <a href="staff.html" className="access-button">Acessar</a>
          <p>Confira os materiais da 6ª Edição!</p>
        </div>

        <section id="quem-somos" className="about-section">
          <div className="about-text">
            <h2>Quem somos?</h2>
            <h1>Primeiro modelo de simulação das Nações Unidas e organismos internacionais para universitários de Pernambuco</h1>
            <p className="about-paragraph">A partir da vontade de incluir Pernambuco na tradição de simulações, trazendo a oportunidade para a prática de habilidades de diplomacia, oratória, negociação e cooperação internacional, estudantes de Ciência Política e Direito da UFPE se uniram para criar o projeto em 2017, realizando nossa 1ª edição em 2018.</p>
            <a href="link_para_edicoes_passadas" className="edicoes-passadas">Confira as edições passadas da PEMUN</a>
          </div>
          <section id="imagem-destacada" className="imagem-destacada">
            <img src="Images/Imagem1Carrosel.JPG" alt="Descrição da imagem" />
          </section>
        </section>

        <section id="missao" className="mission-section">
          <h2 className="cor-verde">Nossa missão</h2>
          <div className="mission-columns">
            <div className="mission-column">
              <img src="Images/missao1.png" alt="Descrição da Imagem 1" />
              <p>Praticar os aprendizados do ambiente acadêmico, representando diplomatas, juízes internacionais e chefes de Estado, discutindo questões da agenda internacional.</p>
            </div>
            <div className="mission-column">
              <img src="Images/missao2.png" alt="Descrição da Imagem 2" />
              <p>Aprender regras e procedimentos específicos de ambientes diplomáticos, inseridos no processo de elaboração de resolução.</p>
            </div>
            <div className="mission-column">
              <img src="Images/missao3.png" alt="Descrição da Imagem 3" />
              <p>Desenvolver o raciocínio crítico, a capacidade deliberativa, o senso de trabalho coletivo e habilidades analíticas.</p>
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
          <a href="staff.html" className="access-button">Acessar</a>
        </section>

        <section id="partners" className="partners-section">
          <div className="partners-container">
            <div className="partners-title">
              <h2 className="cor-verde">Nossos</h2>
              <h2 className="cor-verde">Parceiros</h2>
            </div>
            <div className="partners-logos">
              <a href="https://www.redbull.com/br-pt/" className="partner"><img src="Images/redbull.png" alt="Logo Red Bull" /></a>
              <a href="https://www.soi.org.br/" className="partner"><img src="Images/Soi.webp" alt="Logo SOI" /></a>
              <a href="https://www.sonu.com.br/" className="partner"><img src="Images/SONU.jpeg" alt="Logo SONU" /></a>
              <a href="https://www.instagram.com/sipempbmun/?ref=nucleo.jor.br" className="partner"><img src="Images/pbmun.png" alt="Logo PBMUN" /></a>
              <a href="https://www.unit.br/" className="partner"><img src="Images/UNIT.png" alt="Logo UNIT" /></a>
              <a href="https://www.ufpe.br/" className="partner"><img src="Images/FEDERAL.png" alt="Logo Universidade Federal de Pernambuco" /></a>
              <a href="https://famun.com.br/" className="partner"><img src="Images/famun_2024_horizontal-removebg-preview.png" alt="Logo Universidade Federal de Pernambuco" /></a>
              <a href="https://www.ibmrmun.com/" className="partner"><img src="Images/image-removebg-preview.png" alt="Logo Universidade Federal de Pernambuco" /></a>
            </div>
          </div>
        </section>

        <footer className="site-footer">
          <div className="footer-content">
            <div className="footer-logo-socials">
              <img src="Images/LogoVerde.png" alt="Logo PEMUN" className="footer-logo" />
              <div className="social-icons">
                <a href="https://www.instagram.com/pernambucomun/" className="social-icon"><img src="Images/insta.png" alt="Instagram" /></a>
                <a href="mailto:pernambucomun@gmail.com" className="social-icon"><img src="Images/email.png" alt="email" /></a>
                <a href="https://linktr.ee/Pemun" className="social-icon"><img src="Images/linktree.png" alt="Linktree" /></a>
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

export default App;

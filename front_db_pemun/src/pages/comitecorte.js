import React from 'react';

import { Link } from 'react-router-dom';

import LogoVerde from '../Images/LogoVerde.png';
import LogoCorte from '../Images/corte-removebg-preview.png';

import BeatrizMiranda from '../Images/IMG_8020 - Beatriz Miranda.jpeg';
import CamilaFairstein from '../Images/IMG_8025 - Camila Fairstein.jpeg';
import DanielaOliveira from '../Images/IMG_8038 - Daniela Oliveira.jpeg';
import LeticiaRodrigues from '../Images/IMG_8030 - Letícia Rodrigues.jpeg';
import LuanaFerraz from '../Images/IMG_8043 - Luana Ferraz.jpeg';
import MariaLuisaLeite from '../Images/IMG_8054 - Maria Luisa Leite.jpeg';
import Nycolle from '../Images/IMG_8064 - Nycolle.jpeg';
import MariaClaraFerraz from '../Images/IMG_8656 - Maria Clara Ferraz.jpeg';
import VitoriaSouza from '../Images/IMG_8255 - Vitória Sousa.jpeg';

import insta from '../Images/insta.png';
import email from '../Images/email.png';
import linktree from '../Images/linktree.png';

import '../App.css';
import './comiteagnu.css'

function ComiteCorte(){
    return(
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
            <main>
                <section className="comite-section">
                <div className="comite-header">
                    <img src={LogoCorte} alt="Logo Comité" className="comite-logo"/>
                    <div className="comite-title">
                        <h1>Corte Interamericana de Direitos Humanos</h1>
                        <h2>Tópico A: Caso Trabalhadores da Fazenda Brasil Verde vs. Brasil</h2>
                        <h2>Tópico B: Caso Airton Honorato e Outros vs. Brasil</h2>
                        <a href="https://www.sympla.com.br/evento/pemun-edicao-vi-simulacao-presencial/2453687" className="button guia-button">Inscreva-se</a>
                        <div className="comite-buttons">
                            <a href="https://drive.google.com/drive/folders/10VLNm0incqFMv8UwBVacvfu6B6z2KDUe?usp=share_link" className="button guia-button">Guia de Estudos</a>
                            <a href="https://drive.google.com/drive/folders/1XNfE3BtoJEyay2ZMs4AgcY9xo30gPNmb?usp=share_link" className="button guia-button">Guia Procedimental</a>
                        </div>
                    </div>
                </div>
                <div className="comite-summary">
                    <h3>Resumo do Comitê</h3>
                    <p>A Corte Interamericana de Direitos Humanos (Corte IDH) é um dos três tribunais regionais de proteção dos direitos humanos, fazendo parte do Sistema Interamericano de Direitos Humanos (SIDH), com objetivo de aplicar e interpretar a Convenção Americana, ou Pacto de São José da Costa Rica, conferindo condições para que todos os cidadãos americanos possam usufruir de seus direitos civis, políticos, culturais, sociais e econômicos. Atuando em conjunto com a Comissão Americana de Direitos Humanos (CADH), a Corte IDH recebe denúncias dos países membros e julga-as de acordo com os artigos da Convenção Americana, defendendo as instituições democráticas, os direitos dos seres humanos e a justiça social.

                        Da colonização a formação das repúblicas brasileiras, a escravidão perpassa abruptamente as relações de trabalho, assim, a dinâmica do trabalho análogo a escravidão, demonstra que essas relações apenas sofreram alterações que as adequaram a nova realidade brasileira pós abolição. Ademais, apesar dos tratados e convenções de direitos humanos apresentados previamente, disporem dispositivos que preveem direitos para todos os cidadãos, estes dependem diretamente da cooperação ativa das instituições nacionais.
                        
                        Desse modo, a Corte IDH considera o sistema prisional brasileiro um estado de coisa inconstitucional, é uma demonstração
                        que, a segregação presente nas políticas de segurança pública, perante a ação ou omissão dos órgãos públicos, alimenta uma violação intensa e generalizada de direitos e garantias fundamentais. Nesse contexto, muitos trabalhadores permanecem sujeitos a uma dominação que não faz parte da Constituição brasileira, tampouco, cabe nos tratados de direitos humanos os quais o Brasil é signatário.
                        
                        Diante desse cenário, é interessante observar que os casos revelam problemas reais e estruturais, nos quais é explícito a urgência da discussão sobre os temas que se desenvolveram ao longo da história e pesam na atualidade. Assim como, é imprescindível que este seja realizado com foco no tema de direitos humanos, mediados pela atuação da Corte IDH, não só pela sua importância enquanto órgão, mas principalmente por sua fundamentalidade no debate internacional que versa sobre direitos humanos e a aplicação prática dos tratados que buscam sustentá-lo a nível mundial.</p>
                </div>
                <div className="comite-representaciones">
                    <h2>Representações</h2>
                    <ul className="representaciones-list">
                        <li> <li>7 (sete) Magistrados:</li>
                            <li>1 Presidente;
                            1 Vice-presidente;
                            5 Juízes.</li>
                        </li>
                        <li>6 (seis) Representantes da Acusação</li>
                        <li>6 (seis) Advogados(as) de Defesa</li>
                    </ul>
                </div>
                <div className="comite-directoria">
                    <h2>Diretoria</h2>
                    <div className="directoria-members">
                    <div className="member">
                        <img src={BeatrizMiranda} alt="Beatriz Miranda"/>
                        <h3>Beatriz Miranda</h3>
                    </div>
                    <div className="member">
                        <img src={CamilaFairstein} alt="Camila Fairstein"/>
                        <h3>Camila Fairstein</h3>
                    </div>
                    <div className="member">
                        <img src={DanielaOliveira} alt="Daniela Oliveira"/>
                        <h3>Daniela Oliveira</h3>
                    </div>
                    <div className="member">
                        <img src={LeticiaRodrigues} alt="Letícia Rodrigues"/>
                        <h3>Letícia Rodrigues</h3>
                    </div>
                    <div className="member">
                        <img src={LuanaFerraz} alt="Luana Ferraz"/>
                        <h3>Luana Ferraz</h3>
                    </div>
                    <div className="member">
                        <img src={MariaLuisaLeite} alt="Maria Luisa Leite"/>
                        <h3> Maria Luisa Leite</h3>
                    </div>
                    <div className="member">
                        <img src={Nycolle} alt="Nycolle Monteiro"/>
                        <h3>Nycolle Monteiro</h3>
                    </div>
                    </div>
                </div>
                <div className="tutores-section">
                    <div className="tutores-container">
                        <div align='left'>
                            <h2>Tutores</h2>
                            <p>Membros do Secretariado, Alumni e convidados que orientaram a elaboração do Comitê.</p>
                        </div>
                        <div className="tutor">
                            <img src={MariaClaraFerraz} alt="Maria Clara Ferraz"/>
                            <p>Maria Clara Ferraz</p>
                        </div>
                        <div className="tutor">
                            <img src={VitoriaSouza} alt="Vitória Sousa"/>
                            <p>Vitória Sousa</p>
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


export default ComiteCorte;
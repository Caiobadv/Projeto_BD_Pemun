import React from 'react';

import { Link } from 'react-router-dom';

import LogoVerde from '../Images/LogoVerde.png';
import LogoCcoi from '../Images/CCOI3-removebg-preview.png';

import LuisFelipeFonseca from '../Images/IMG_8688 - Luís Felipe.jpeg';
import Amanda from '../Images/IMG_8679 - Amanda.jpeg';
import LarissaMadeiro from '../Images/IMG_8668 - Larissa Machado.jpeg';
import MarioGallo from '../Images/3529 - Mario Silva.jpeg';
import RicardoAlbuquerque from '../Images/IMG_1161 - Ricardo Albuquerque.jpeg';
import VitoriaSousa from '../Images/IMG_8255 - Vitória Sousa.jpeg';

import insta from '../Images/insta.png';
import email from '../Images/email.png';
import linktree from '../Images/linktree.png';

import '../App.css';
import './comiteagnu.css'

function ComiteCcoi(){
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
            <section className="comite-section">
            <div className="comite-header">
                <img src={LogoCcoi} alt="Logo Comité" className="comite-logo"/>
                <div className="comite-title">
                <h1>Creative Community Outreach Initiative</h1>
                <h2>Documentário</h2>
                <a href="https://www.sympla.com.br/evento/pemun-edicao-vi-simulacao-presencial/2453687" className="button guia-button">Inscreva-se</a>
                <div className="comite-buttons">
                {/* <!--  <a href="https://drive.google.com/drive/folders/10VLNm0incqFMv8UwBVacvfu6B6z2KDUe?usp=share_link" className="button guia-button">Study Guide</a>
                    <a href="https://drive.google.com/drive/folders/1XNfE3BtoJEyay2ZMs4AgcY9xo30gPNmb?usp=share_link" className="button guia-button">Annex Guide</a> --> */}
                </div>
                </div>
            </div>
            <div className="comite-summary">
                <h3>Resumo do Comitê</h3>
                <p>Este é a primeira edição da PEMUN a contar com um Iniciativa de Divulgação da Comunidade Criativa da Organização das Nações Unidas (CCOI), de modo que o projeto visa à entrada de profissionais do audiovisual local - fotógrafos, produtores, realizadores, etc. - para ocupar a posição de diretores e delegados, envolvendo-se na na expansão de conhecimento.

                    Os documentários são peças audiovisuais que transcendem a mera função de entretenimento, buscando informar, educar e inspirar. Ainda que exista um esforço imensurável, durante todo o ano de construção de uma simulação, é perceptível a carência de um espaço para que os agentes que fazem esse projeto acontecer sejam representados.
                    
                    O presente comitê tem como objetivo dar voz a quem não teve a oportunidade de se expressar anteriormente, criando assim, novos pontos de vista acerca do projeto. Contar histórias da vida real, tudo, a princípio, do ponto de vista de um observador onisciente. Além disso, mostrar o nível de envolvimento e comprometimento de todos conecta o público com o esforço que acontece por trás do evento.
                    
                    Nos bastidores, acompanhar a construção da edição VI da PEMUN pelo olhar de quem a constrói é uma forma de assegurar que a paixão pelo projeto se mantenha viva nos que participam do evento e naqueles que virão.</p>
            </div>
            <div className="comite-representaciones">
                <h2>Representações</h2>
                <ul className="representaciones-list">
                <li>5 Delegados para manuseio das câmeras</li>
                <li>6 Delegados voltados em Técnicos de Som</li>
                <li>5 Delegados responsáveis para Decupagem/Logger;</li>
                <br/>
                <li>5 Delegados realizando a edição</li>
                <li>1 Entrevistador/ apresentador.</li>
                </ul>
            </div>
            <div className="comite-directoria">
                <h2>Diretoria</h2>
                <div className="directoria-members">
                <div className="member">
                    <img src={LuisFelipeFonseca} alt="Luis Felipe Fonseca"/>
                    <h3>Luis Felipe Fonseca</h3>
                </div>
                <div className="member">
                    <img src={Amanda} alt="Maria Amanda Rodrigues"/>
                    <h3>Maria Amanda Rodrigues</h3>
                </div>
                <div className="member">
                    <img src={LarissaMadeiro} alt="Larissa Madeiro"/>
                    <h3>Larissa Madeiro</h3>
                </div>
                <div className="member">
                    <img src={MarioGallo} alt="Mario Gallo"/>
                    <h3>Mario Gallo</h3>
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
                        <img src={RicardoAlbuquerque} alt="Ricardo Albuquerque"/>
                        <p>Ricardo Albuquerque</p>
                    </div>
                    <div className="tutor">
                        <img src={VitoriaSousa} alt="Vitória Sousa"/>
                        <p>Vitória Sousa</p>
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

export default ComiteCcoi;
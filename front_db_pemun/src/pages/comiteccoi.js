import React from 'react';
import LogoVerde from '../Images/LogoVerde.png';
import insta from '../Images/insta.png';
import email from '../Images/email.png';
import linktree from '../Images/linktree.png';
import LogoCcoi from '../Images/CCOI3-removebg-preview.png';
import LuisFelipeFonseca from '../Images/IMG_8688 - Luís Felipe.jpeg';
import Amanda from '../Images/IMG_8679 - Amanda.jpeg';
import LarissaMadeiro from '../Images/IMG_8668 - Larissa Machado.jpeg';
import MarioGallo from '../Images/3529 - Mario Silva.jpeg';
import RicardoAlbuquerque from '../Images/IMG_1161 - Ricardo Albuquerque.jpeg';
import VitoriaSousa from '../Images/IMG_8255 - Vitória Sousa.jpeg';

import '../App.css';
import './comiteagnu.css'

function ComiteCcoi(){
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
                <img src={LogoCcoi} alt="Logo Comité" class="comite-logo"/>
                <div class="comite-title">
                <h1>Creative Community Outreach Initiative</h1>
                <h2>Documentário</h2>
                <a href="https://www.sympla.com.br/evento/pemun-edicao-vi-simulacao-presencial/2453687" class="button guia-button">Inscreva-se</a>
                <div class="comite-buttons">
                {/* <!--  <a href="https://drive.google.com/drive/folders/10VLNm0incqFMv8UwBVacvfu6B6z2KDUe?usp=share_link" class="button guia-button">Study Guide</a>
                    <a href="https://drive.google.com/drive/folders/1XNfE3BtoJEyay2ZMs4AgcY9xo30gPNmb?usp=share_link" class="button guia-button">Annex Guide</a> --> */}
                </div>
                </div>
            </div>
            <div class="comite-summary">
                <h3>Resumo do Comitê</h3>
                <p>Este é a primeira edição da PEMUN a contar com um Iniciativa de Divulgação da Comunidade Criativa da Organização das Nações Unidas (CCOI), de modo que o projeto visa à entrada de profissionais do audiovisual local - fotógrafos, produtores, realizadores, etc. - para ocupar a posição de diretores e delegados, envolvendo-se na na expansão de conhecimento.

                    Os documentários são peças audiovisuais que transcendem a mera função de entretenimento, buscando informar, educar e inspirar. Ainda que exista um esforço imensurável, durante todo o ano de construção de uma simulação, é perceptível a carência de um espaço para que os agentes que fazem esse projeto acontecer sejam representados.
                    
                    O presente comitê tem como objetivo dar voz a quem não teve a oportunidade de se expressar anteriormente, criando assim, novos pontos de vista acerca do projeto. Contar histórias da vida real, tudo, a princípio, do ponto de vista de um observador onisciente. Além disso, mostrar o nível de envolvimento e comprometimento de todos conecta o público com o esforço que acontece por trás do evento.
                    
                    Nos bastidores, acompanhar a construção da edição VI da PEMUN pelo olhar de quem a constrói é uma forma de assegurar que a paixão pelo projeto se mantenha viva nos que participam do evento e naqueles que virão.</p>
            </div>
            <div class="comite-representaciones">
                <h2>Representações</h2>
                <ul class="representaciones-list">
                <li>5 Delegados para manuseio das câmeras</li>
                <li>6 Delegados voltados em Técnicos de Som</li>
                <li>5 Delegados responsáveis para Decupagem/Logger;</li>
                <li>5 Delegados realizando a edição</li>
                <li>1 Entrevistador/ apresentador.</li>
                </ul>
            </div>
            <div class="comite-directoria">
                <h2>Diretoria</h2>
                <div class="directoria-members">
                <div class="member">
                    <img src={LuisFelipeFonseca} alt="Luis Felipe Fonseca"/>
                    <h3>Luis Felipe Fonseca</h3>
                </div>
                <div class="member">
                    <img src={Amanda} alt="Maria Amanda Rodrigues"/>
                    <h3>Maria Amanda Rodrigues</h3>
                </div>
                <div class="member">
                    <img src={LarissaMadeiro} alt="Larissa Madeiro"/>
                    <h3>Larissa Madeiro</h3>
                </div>
                <div class="member">
                    <img src={MarioGallo} alt="Mario Gallo"/>
                    <h3>Mario Gallo</h3>
                </div>
                </div>
            </div>
            <div class="tutores-section">
                <h2>Tutores</h2>
                <p>Membros do Secretariado, Alumni e convidados que orientaram a elaboração do Comitê.</p>
                <div class="tutores-container">
                <div class="tutor">
                    <img src={RicardoAlbuquerque} alt="Ricardo Albuquerque"/>
                    <p>Ricardo Albuquerque</p>
                </div>
                <div class="tutor">
                    <img src={VitoriaSousa} alt="Vitória Sousa"/>
                    <p>Vitória Sousa</p>
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

export default ComiteCcoi;
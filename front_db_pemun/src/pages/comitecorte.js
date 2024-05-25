import React from 'react';
import LogoVerde from '../Images/LogoVerde.png';
import insta from '../Images/insta.png';
import email from '../Images/email.png';
import linktree from '../Images/linktree.png';
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


import '../App.css';
import './comiteagnu.css'

function ComiteCorte(){
    return(
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
                    <img src={LogoCorte} alt="Logo Comité" class="comite-logo"/>
                    <div class="comite-title">
                    <h1>Corte Interamericana de Direitos Humanos</h1>
                    <h2>Tópico A: Caso Trabalhadores da Fazenda Brasil Verde vs. Brasil</h2>
                    <h2>Tópico B: Caso Airton Honorato e Outros vs. Brasil</h2>
                    <a href="https://www.sympla.com.br/evento/pemun-edicao-vi-simulacao-presencial/2453687" class="button guia-button">Inscreva-se</a>
                    <div class="comite-buttons">
                    {/* <!--  <a href="https://drive.google.com/drive/folders/10VLNm0incqFMv8UwBVacvfu6B6z2KDUe?usp=share_link" class="button guia-button">Study Guide</a>
                        <a href="https://drive.google.com/drive/folders/1XNfE3BtoJEyay2ZMs4AgcY9xo30gPNmb?usp=share_link" class="button guia-button">Annex Guide</a> --> */}
                    </div>
                    </div>
                </div>
                <div class="comite-summary">
                    <h3>Resumo do Comitê</h3>
                    <p>A Corte Interamericana de Direitos Humanos (Corte IDH) é um dos três tribunais regionais de proteção dos direitos humanos, fazendo parte do Sistema Interamericano de Direitos Humanos (SIDH), com objetivo de aplicar e interpretar a Convenção Americana, ou Pacto de São José da Costa Rica, conferindo condições para que todos os cidadãos americanos possam usufruir de seus direitos civis, políticos, culturais, sociais e econômicos. Atuando em conjunto com a Comissão Americana de Direitos Humanos (CADH), a Corte IDH recebe denúncias dos países membros e julga-as de acordo com os artigos da Convenção Americana, defendendo as instituições democráticas, os direitos dos seres humanos e a justiça social.

                        Da colonização a formação das repúblicas brasileiras, a escravidão perpassa abruptamente as relações de trabalho, assim, a dinâmica do trabalho análogo a escravidão, demonstra que essas relações apenas sofreram alterações que as adequaram a nova realidade brasileira pós abolição. Ademais, apesar dos tratados e convenções de direitos humanos apresentados previamente, disporem dispositivos que preveem direitos para todos os cidadãos, estes dependem diretamente da cooperação ativa das instituições nacionais.
                        
                        Desse modo, a Corte IDH considera o sistema prisional brasileiro um estado de coisa inconstitucional, é uma demonstração
                        que, a segregação presente nas políticas de segurança pública, perante a ação ou omissão dos órgãos públicos, alimenta uma violação intensa e generalizada de direitos e garantias fundamentais. Nesse contexto, muitos trabalhadores permanecem sujeitos a uma dominação que não faz parte da Constituição brasileira, tampouco, cabe nos tratados de direitos humanos os quais o Brasil é signatário.
                        
                        Diante desse cenário, é interessante observar que os casos revelam problemas reais e estruturais, nos quais é explícito a urgência da discussão sobre os temas que se desenvolveram ao longo da história e pesam na atualidade. Assim como, é imprescindível que este seja realizado com foco no tema de direitos humanos, mediados pela atuação da Corte IDH, não só pela sua importância enquanto órgão, mas principalmente por sua fundamentalidade no debate internacional que versa sobre direitos humanos e a aplicação prática dos tratados que buscam sustentá-lo a nível mundial.</p>
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
                        <img src={BeatrizMiranda} alt="Beatriz Miranda"/>
                        <h3>Beatriz Miranda</h3>
                    </div>
                    <div class="member">
                        <img src={CamilaFairstein} alt="Camila Fairstein"/>
                        <h3>Camila Fairstein</h3>
                    </div>
                    <div class="member">
                        <img src={DanielaOliveira} alt="Daniela Oliveira"/>
                        <h3>Daniela Oliveira</h3>
                    </div>
                    <div class="member">
                        <img src={LeticiaRodrigues} alt="Letícia Rodrigues"/>
                        <h3>Letícia Rodrigues</h3>
                    </div>
                    <div class="member">
                        <img src={LuanaFerraz} alt="Luana Ferraz"/>
                        <h3>Luana Ferraz</h3>
                    </div>
                    <div class="member">
                        <img src={MariaLuisaLeite} alt="Maria Luisa Leite"/>
                        <h3> Maria Luisa Leite</h3>
                    </div>
                    <div class="member">
                        <img src={Nycolle} alt="Nycolle Monteiro"/>
                        <h3>Nycolle Monteiro</h3>
                    </div>
                    </div>
                </div>
                <div class="tutores-section">
                    <h2>Tutores</h2>
                    <p>Membros do Secretariado, Alumni e convidados que orientaram a elaboração do Comitê.</p>
                    <div class="tutores-container">
                    <div class="tutor">
                        <img src={MariaClaraFerraz} alt="Maria Clara Ferraz"/>
                        <p>Maria Clara Ferraz</p>
                    </div>
                    <div class="tutor">
                        <img src={VitoriaSouza} alt="Vitória Sousa"/>
                        <p>Vitória Sousa</p>
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


export default ComiteCorte;
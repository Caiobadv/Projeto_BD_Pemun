import React from 'react';

import { Link } from 'react-router-dom';

import LogoVerde from '../Images/LogoVerde.png';
import LogoGab from '../Images/GAB_V4-removebg-preview.png';

import AliceLira from '../Images/IMG_8147 - Alice Lira.jpeg';
import CamilaFerreira from '../Images/IMG_5976 - Camila Ferreira.jpeg';
import ViniciusLauter from '../Images/IMG_8188 - Vinícius Lauter.jpeg';
import JoaoAugustoBarbosa from '../Images/IMG_8199 - João Augusto.jpeg';
import MariaCatharinaGadelha from '../Images/IMG_8163 - Maria Catharina.jpeg';
import MariaCeciliaBrayner from '../Images/IMG_8179 - Cecília Brayner.jpeg';
import MariaClaraPacheco from '../Images/IMG-1111 - clara pacheco rodrigues.jpg';
import MariaJuliaBezerra from '../Images/IMG_8090 - Maria Júlia.jpeg';
import PauloBarbosaLeite from '../Images/IMG_8222 - Paulo barbosa.jpeg';
import SabrinaAraujoVeiga from '../Images/IMG_8182 - Sabrina Viega.jpeg';
import MarianaTorres from '../Images/IMG_1236 - Mariana Torres.jpeg';
import LorenaMiranda from '../Images/Lorena Miranda.jpeg';
import VictorMorais from '../Images/IMG_8604 -Victor Morais.jpeg'
import HelenaMendes from '../Images/IMG_8627 - Helena Mendes.jpeg';

import insta from '../Images/insta.png';
import email from '../Images/email.png';
import linktree from '../Images/linktree.png';

import '../App.css';
import './comiteagnu.css'

function ComiteGab(){
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
                    </ul>
                </nav>
                <a  href="https://linktr.ee/Pemun" className="button contato-button">Contato</a>
                </div>
            </header>
            <main>
                <section className="comite-section">
                <div className="comite-header">
                    <img src={LogoGab} alt="Logo Comité" className="comite-logo"/>
                    <div className="comite-title">
                    <h1>Gabinete Histórico de Guerra</h1>
                    <h2>Tópico Único: Guerra do Vietnam</h2>
                    <a href="https://www.sympla.com.br/evento/pemun-edicao-vi-simulacao-presencial/2453687" className="button guia-button">Inscreva-se</a>
                    <div className="comite-buttons">
                    {/* <!--  <a href="https://drive.google.com/drive/folders/10VLNm0incqFMv8UwBVacvfu6B6z2KDUe?usp=share_link" className="button guia-button">Study Guide</a>
                        <a href="https://drive.google.com/drive/folders/1XNfE3BtoJEyay2ZMs4AgcY9xo30gPNmb?usp=share_link" className="button guia-button">Annex Guide</a> --> */}
                    </div>
                    </div>
                </div>
                <div className="comite-summary">
                    <h3>Resumo do Comitê</h3>
                    <p>Criados em meio à crise, os Gabinetes de Guerra trazem uma comissão de funcionários da alta cúpula de seus Estados e exércitos, aos quais são conferidos poderes especiais durante o tempo do embate para tomar as principais decisões do conflito - criando, assim, uma experiência única e totalmente diferente para os delegados e delegadas.

                    Com o mundo dividido ideologicamente pela Guerra Fria, em que o sistema internacional é deflagrado pela constante dicotomia capitalismo versus comunismo emparelhado pelas lideranças norte-americanas e soviéticas, a Guerra do Vietnam e os seus desdobramentos para o sudeste asiático, bem como às disposições da independência do Vietnam, dão uma nova proporção para os panoramas latentes, em que o conflito bipolarizado sai do status abstrato da competição pelo poder e se apresenta no plano real por meio do conflito físico.
                    
                    Pela relevância da situação, o Gabinete Histórico de Guerra proporcionará uma imersão no conflito, na qual será possível representar chefes militares e outros tomadores de decisão das duas nações, atuando em prol dos interesses de ambas em meio à guerra. Esse comitê instiga os criativos, os que têm papel de liderança e também entendem como é importante cooperação numa guerra.
                    
                    É um comitê de força, inteligência e partilha… A tensão é grande, mas o perigo da inércia é maior ainda. 
                    
                    E é essa a proposta do Gabinete Histórico de Guerra da 6ª edição da PEMUN: simular com a maior fidedignidade possível as qualidades e a criatividade do alto-escalão da guerra mais importante da segunda metade do Século XX</p>
                </div>
                <div className="comite-representaciones">
                    <h2>Representações</h2>
                    <ul className="representaciones-list">
                    <li>Presidente dos Estados Unidos</li>
                    <li>Comandante de Operação Bélico-Logístico Conjunta (EUA/Vietnam do Sul)</li>
                    <li>Presidente do Vietnam do Norte</li>
                    <li>Ministro de relações exteriores (Vietnam do Norte)</li>
                    <li>Chefe do Senado dos EUA</li>
                    <li>Representante da Inteligência VietCong</li>
                    <li>Presidente do Vietnam do Sul
                        Ministro de Defesa Nacional (Vietnam do Sul)</li>
                    <li>General-chefe do Exército do Povo do Vietnã </li>
                    <li>Lider Politico da FLN </li>
                    <li>Ministro de Defesa dos EUA</li>
                    <li>Comandante do Exército Sul-vietnamita</li>
                    <li>Major General da Aeronáutica do Povo do Vietnã </li>
                    <li>Representante Militar Urbano dos Viet Cong</li>
                    <li>Almirante Chefe da Marinha dos EUA</li>
                    <li>Comandante Aeronaval Sul-Vietnamita</li>
                    <li>Contra-Almirante da Marinha do Povo do Vietnã</li>
                    <li>Representante Militar do Interior dos Viet Cong</li>
                    <li>Tenente-General da Aeronáutica dos EUA</li>
                    <li>Oficial de Inteligência Interna do Vietnam do Sul</li>
                    <li>Oficial de Inteligência Estrangeira Norte Vietnamita</li>
                    <li>Diretor de Inteligência dos EUA (CIA) </li>
                    <li>Chefe de Operações do Exército do Povo do Vietnã </li>
                    <li>Chefe de Operações dos VietCong </li>
                    </ul>
                </div>
                <div className="comite-directoria">
                    <h2>diretoria</h2>
                    <div className="directoria-members">
                    <div className="member">
                        <img src={AliceLira} alt="Alice Lira"/>
                        <h3>Alice Lira</h3>
                    </div>
                    <div className="member">
                        <img src={JoaoAugustoBarbosa} alt="João Augusto Barbosa"/>
                        <h3>João Augusto Barbosa</h3>
                    </div>
                    <div className="member">
                        <img src={MariaCatharinaGadelha} alt="Maria Catharina Gadelha"/>
                        <h3>Maria Catharina Gadelha</h3>
                    </div>
                    <div className="member">
                        <img src={MariaCeciliaBrayner} alt="Maria Cecília Brayner"/>
                        <h3>Maria Cecília Brayner</h3>
                    </div>
                    <div className="member">
                        <img src={MariaClaraPacheco} alt="Maria Clara Pacheco"/>
                        <h3>Maria Clara Pacheco</h3>
                    </div>
                    <div className="member">
                        <img src={MariaJuliaBezerra} alt="Maria Júlia Bezerra"/>
                        <h3>Maria Júlia Bezerra</h3>
                    </div>
                    <div className="member">
                        <img src={PauloBarbosaLeite} alt="Paulo Barbosa Leite"/>
                        <h3>Paulo Barbosa Leite</h3>
                    </div>
                    <div className="member">
                        <img src={SabrinaAraujoVeiga} alt="Sabrina Araújo Veiga"/>
                        <h3>Sabrina Araújo Veiga</h3>
                    </div>
                    <br/>
                    <div className="member">
                        <img src={ViniciusLauter} alt="Vinicius Lauter"/>
                        <h3>Vinicius Lauter</h3>
                    </div>
                    <div className="member">
                        <img src={CamilaFerreira} alt="Camila Ferreira"/>
                        <h3>Camila Ferreira</h3>
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
                            <img src={MarianaTorres} alt="Mariana Torres"/>
                            <p>Mariana Torres</p>
                        </div>
                        <div className="tutor">
                            <img src={HelenaMendes} alt="Helena Mendes"/>
                            <p>Helena Mendes</p>
                        </div>
                        <div className="tutor">
                            <img src={VictorMorais} alt="Victor Morais"/>
                            <p>Victor Morais</p>
                        </div>
                        <div className="tutor">
                            <img src={LorenaMiranda} alt="Lorena Miranda"/>
                            <p>Lorena Miranda</p>
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

export default ComiteGab;
import React from 'react';

import { Link } from 'react-router-dom';

import LogoVerde from '../Images/LogoVerde.png';
import LogoOnu from '../Images/onu_mulheres-removebg-preview.png';

import AnaBeatrizMarangon from '../Images/IMG_8342 - Ana Beatriz.jpeg';
import BrunaCalabria from '../Images/IMG_8348 - Bruna Calábria.jpeg';
import GiovanaFernandes from '../Images/IMG_8308 - Giovana Santos.jpeg';
import KarineMoura from '../Images/IMG_8336 - Karine Moura.jpeg';
import TainaFerreira from '../Images/IMG_8319 - Tainá Ferreira.jpeg';
import VictoriaKardozo from '../Images/IMG_8358 - Victória Kardozo.jpeg';
import MarianaTorres from '../Images/IMG_1236 - Mariana Torres.jpeg';
import MariaEugeniaDubeux from '../Images/IMG_1220 - Maria Eugênia Dubeux.jpeg';

import insta from '../Images/insta.png';
import email from '../Images/email.png';
import linktree from '../Images/linktree.png';

import '../App.css';
import './comiteagnu.css'

function ComiteOnu(){
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
                    <img src={LogoOnu} alt="Logo Comité" className="comite-logo"/>
                    <div className="comite-title">
                        <h1>Organização das Nações Unidas para Mulheres</h1>
                        <h2>Tópico A: A violação à dignidade sexual das mulheres em áreas de conflitos armados.</h2>
                        <h2>Tópico B: A violação dos direitos humanos das mulheres no Irã.</h2>
                        <a href="https://www.sympla.com.br/evento/pemun-edicao-vi-simulacao-presencial/2453687" className="button guia-button">Inscreva-se</a>
                        <div className="comite-buttons">
                            <a href="https://drive.google.com/drive/folders/19cBv6agiinH9RwjXp2tWxbTTfsIlHN9k?usp=share_link" className="button guia-button">Guia de Estudos</a>
                            <a href="https://drive.google.com/drive/folders/1PyP2lUYCAOTb3CessDe0MZKJ8VsXCRqa?usp=share_link" className="button guia-button">Guia Anexo</a>
                        </div>
                    </div>
                </div>
                <div className="comite-summary">
                    <h3>Resumo do Comitê</h3>
                    <p>“Recusar à mulher a igualdade de direitos em virtude do sexo é denegar justiça à metade da população ” - Bertha Lutz.

                    É a partir dessa premissa que a Organização das Nações Unidas para Mulheres (ONU Mulheres) busca ampliar a discussão acerca de temáticas tão relevantes que buscam a efetivação de direitos fundamentais às mulheres, que em muitos casos, não possuem amparo algum do Estado o qual pertencem.
                    
                    A perpetuação de violência sexual e reprodutiva desse grupo vem se alastrando de forma catastrófica, distanciando cada vez mais a possibilidade de mitigação dessa problemáticas com a implementação de políticas públicas.
                    
                    O comitê tem como pontos focais a análise da violência à dignidade sexual das mulheres, principalmente as ocorridas em áreas de conflitos armados derivados de questões históricas e territoriais, e analise da situação do Irã, especialmente quanto aos direitos das mulheres e as repercussões do caso de Mahsa Amini, compreendendo o início das manifestações em prol dos direitos das mulheres e a repressÃ£o governamental
                    
                    Desse modo, nota-se como a intimidação e constrangimento de mulheres são utilizadas como armas de guerra em conflitos variados, derivados de contextos e governos patriarcais e machistas, existindo uma conexão entre a qualidade de vida das mulheres, a dignidade sexual e a manutenção de um estado violento e misógino, destaca pelo caso da jovem Amini.</p>
                </div>
                <div className="comite-representaciones">
                    <h2>Representações</h2>
                    <ul className="representaciones-list">
                    <li>Emirados Árabes Unidos</li>
                    <li>Reino Unido da Grã-Bretanha e Irlanda do Norte</li>
                    <li>República Federal da Alemanha</li>
                    <li>Associação Revolucionária das Mulheres do Afeganistão</li>
                    <li>Estado do Catar</li>
                    <li>República Francesa</li>
                    <li>Malala Yousafzai</li>
                    <li>Estados Unidos da América</li>
                    <li>República da Indonésia</li>
                    <li>Federação Russa</li>
                    <li>Estado da Palestina</li>
                    <li>Japão</li>
                    <li>República da Turquia</li>
                    <li>Estados Unidos Mexicanos</li>
                    <li>Estado de Israel</li>
                    <li>República de Coréia</li>
                    <li>República Popular da China</li>
                    <li>República Popular da Ucrânia</li>
                    <li>Human's Right Watch</li>
                    <li>Reino da Arábia Saudita</li>
                    <li>República Islâmica do Irã</li>
                    </ul>
                </div>
                <div className="comite-directoria">
                    <h2>Diretoria</h2>
                    <div className="directoria-members">
                    <div className="member">
                        <img src={AnaBeatrizMarangon} alt="Ana Beatriz Marangon"/>
                        <h3>Ana Beatriz Marangon</h3>
                    </div>
                    <div className="member">
                        <img src={BrunaCalabria} alt="Bruna Calábria"/>
                        <h3>Bruna Calábria</h3>
                    </div>
                    <div className="member">
                        <img src={GiovanaFernandes} alt="Giovana Fernandes"/>
                        <h3>Giovana Fernandes</h3>
                    </div>
                    <div className="member">
                        <img src={KarineMoura} alt="Karine Moura"/>
                        <h3>Karine Moura</h3>
                    </div>
                    <br/>
                    <div className="member">
                        <img src={TainaFerreira} alt="Tainá Ferreira"/>
                        <h3>Tainá Ferreira</h3>
                    </div>
                    <div className="member">
                        <img src={VictoriaKardozo} alt="Victória Kardozo"/>
                        <h3>Victória Kardozo</h3>
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
                            <img src={MariaEugeniaDubeux} alt="Maria Eugênia Dubeux"/>
                            <p>Maria Eugênia Dubeux</p>
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
export default ComiteOnu;
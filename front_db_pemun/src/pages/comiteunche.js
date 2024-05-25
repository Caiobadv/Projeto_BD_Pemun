import React from "react";

import LogoVerde from '../Images/LogoVerde.png';
import UncheLogo from '../Images/unche_v5-removebg-preview.png';
import AlineRezende from '../Images/IMG_8496 - Aline Oliveira.jpeg';
import AnaNovaes from '../Images/IMG_8518 - Lívia Novaes.jpeg';
import GiovannaSousa from '../Images/IMG_8553 - Giovanna Sousa.jpeg';
import MariaMota from '../Images/IMG_8536 - Maria Eduarda.jpeg';
import MariaGabriela from '../Images/IMG_8557- Maria Gabriela.jpeg';
import PhillipeJoseph from '../Images/Phillipe joseph Lavergne.jpg';

import GabrielBotelho from '../Images/IMG_8770 - Gabriel Botelho.jpeg';
import HelenaMendes from '../Images/IMG_8627 - Helena Mendes.jpeg';
import RafaellaAlmeida from '../Images/WhatsApp Image 2024-05-03 at 16.59.59.jpeg';

import insta from '../Images/insta.png';
import email from '../Images/email.png';
import linktree from '../Images/linktree.png';

import '../App.css';
import './comiteagnu.css'

function ComiteUnche() {
    return (
        <div>
            <header className="site-header">
                <div className="header-top">
                <img src={LogoVerde} alt="Logo PEMUN" className="logo"/> 
                <nav className="navigation">
                    <ul className="navigation-list">
                    <li className="navigation-item"><a href="index.html" className="navigation-link">Home</a></li>
                    <li className="navigation-item"><a href="edicao.html" className="navigation-link">Edição VI</a></li>
                    <li className="navigation-item"><a href="arquivos.html" className="navigation-link">Arquivos</a></li> 
                    <li className="navigation-item"><a href="staff.html" className="navigation-link">Staff</a></li>
                    </ul>
                </nav>
                <a  href="https://linktr.ee/Pemun" className="button contato-button">Contato</a>
                </div>
            </header>
            <main>
                <section className="comite-section">
                <div className="comite-header">
                    <img src={UncheLogo} alt="Logo Comité" className="comite-logo"/>
                    <div className="comite-title">
                    <h1>Conferência das Nações Unidas sobre o Meio Ambiente Humano</h1>
                    <h2>Tópico Único: Conferência de Estocolmo (1972)</h2>
                    <a href="https://www.sympla.com.br/evento/pemun-edicao-vi-simulacao-presencial/2453687" className="button guia-button">Inscreva-se</a>
                    <div className="comite-buttons">
                            <a href="https://drive.google.com/drive/folders/1lRZAtsD3G7qdYfcy6LR7lT_x9uljYAne?usp=share_link" className="button guia-button">Guia de Estudo</a>
                            <a href="https://drive.google.com/drive/folders/1iIaOWZuPzomZTPLOA0re7HsMrVnGXmb5?usp=share_link" className="button guia-button">Guia Anexo</a>
                    </div>
                    </div>
                </div>
                <div className="comite-summary">
                    <h3>Resumo do Comitê</h3>
                    <p>As mudanças climáticas atravessam a história da humanidade, tendo as ações humanas desmedidas implicado perspectivas pouco promissoras, haja vista os impactos provocados no ambiente natural, como a emissão de gases do efeito estufa e a destruição de florestas tropicais. Hoje, os padrões de consumo estão superiores ao que o planeta pode oferecer, pondo em risco os sistemas que sustentam a vida na Terra. É preciso um processo de mudança acerca da exploração dos recursos, a fim de direcionar investimentos, orientar o desenvolvimento tecnológico e promover efetiva mudança institucional, o que requer ampla discussão entre os países.

                    Diante disso, o comitê se propõe a discutir a resolução dos principais problemas voltados à crise ambiental, que afetam as mais diversas populações no mundo globalizado, sobretudo as que possuem menor poder aquisitivo. A promoção da discussão requer considerar as especificidades, isto é, as disparidades regionais existentes, as quais são direcionadas pelo sistema econômico vigente, em que o capitalismo estrutura desigualdades no mundo contemporâneo. O debate situa-se nos primeiros passos para a busca pelo desenvolvimento sustentável, pela consciência ecológica e pelo direito ambiental, considerando os princípios e as metas elencadas na Conferência de Estocolmo, as quais ainda são válidas 50 anos após.</p>
                </div>
                <div className="comite-representaciones">
                    <h2>Representações</h2>
                    <ul className="representaciones-list">
                    <li>República Federal da Alemanha</li>
                    <li>República Popular da China</li>
                    <li>República da Indonésia</li>
                    <li>Reino Unido da Grã-Bretanha e Irlanda do Norte</li>
                    <li>República da África do Sul</li>
                    <li>República Árabe do Egito</li>
                    <li>Império do Irã</li>
                    <li>Reino da Noruega</li>
                    <li>República Argentina</li>
                    <li>Reino da Espanha</li>
                    <li>República Italiana</li>
                    <li>República do Peru</li>
                    <li>Comunidade da Austrália</li>
                    <li>Estados Unidos da América</li>
                    <li>Japão</li>
                    <li>Reino da Suécia</li>
                    <li>República Federativa do Brasil</li>
                    <li>República Francesa</li>
                    <li>Estados Unidos Mexicanos</li>
                    <li>República da Turquia</li>
                    <li>Canadá</li>
                    <li>República Federativa da Nigéria</li>
                    <li>República da Coreia</li>
                    <li>República da Venezuela</li>
                    </ul>
                </div>
                <div className="comite-directoria">
                    <h2>Diretoria</h2>
                    <div className="directoria-members">
                    <div className="member">
                        <img src={AlineRezende} alt="Aline Rezende"/>
                        <h3>Aline Rezende Bezerra</h3>
                    </div>
                    <div className="member">
                        <img src={AnaNovaes} alt="Lívia Novaes"/>
                        <h3>Ana Lívia Novaes</h3>
                    </div>
                    <div className="member">
                        <img src={GiovannaSousa} alt="Giovanna Vieira"/>
                        <h3>Giovanna Vieira</h3>
                    </div>
                    <div className="member">
                        <img src={MariaMota} alt="Maria Eduarda Mota"/>
                        <h3>Maria Eduarda Mota</h3>
                    </div>
                    <div className="member">
                        <img src={MariaGabriela} alt="Maria Gabriela"/>
                        <h3>Maria Gabriela de Oliveira</h3>
                    </div>
                    <div className="member">
                        <img src={PhillipeJoseph} alt="Joseph Lavergne"/>
                        <h3>Phillipe Joseph Lavergne</h3>
                    </div>
                    </div>
                </div>
                <div className="tutores-section">
                    <h2>Tutores</h2>
                    <p>Membros do Secretariado, Alumni e convidados que orientaram a elaboração do Comitê.</p>
                    <div className="tutores-container">
                    <div className="tutor">
                        <img src={GabrielBotelho} alt="Gabriel Botelho"/>
                        <p>Gabriel Botelho</p>
                    </div>
                    <div className="tutor">
                        <img src={HelenaMendes} alt="Helena Mendes"/>
                        <p>Helena Mendes</p>
                    </div>
                    <div className="tutor">
                        <img src={RafaellaAlmeida} alt="Rafaella Almeida"/>
                        <p>Rafaella Almeida</p>
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

export default ComiteUnche;
import React from 'react';
import LogoVerde from '../Images/LogoVerde.png';
import Rectangle from '../Images/Rectangle 28 (5).png';
import arquivo2 from '../Images/arquivo2.png';
import arquivo3 from '../Images/arquivo3.png';
import arquivo4 from '../Images/arquivo4.png';
import arquivo5 from '../Images/arquivo5.png';
import arquivo6 from '../Images/arquivo6.png';
import insta from '../Images/insta.png';
import email from '../Images/email.png';
import linktree from '../Images/linktree.png';

import '../App.css';
import './arquivos.css';

function Arquivos() {
    return (
        <div>
            <header className="site-header">
                <div className="header-top">
                    <img src={LogoVerde} alt="Logo PEMUN" className="logo"/> 
                    <nav className="navigation">
                        <ul className="navigation-list">
                        <li className="navigation-item"><a href="home.html" className="navigation-link">Home</a></li>
                        <li className="navigation-item"><a href="edicao.html" className="navigation-link">Edição VI</a></li>
                        <li className="navigation-item"><a href="arquivos.html" className="navigation-link">Arquivos</a></li> 
                        <li className="navigation-item"><a href="staff.html" className="navigation-link">Staff</a></li>
                        </ul>
                    </nav>
                    <a  href="https://linktr.ee/Pemun" className="button contato-button">Contato</a>
                </div>
            </header>
            <main>
                <section className="archive">
                    <h1>Arquivos</h1>
                    <div className="edition">
                        <div className="edition-image">
                            <img src={Rectangle} alt="Equipe da Edição I - 2018"/>
                        </div>
                        <div className="edition-content">
                            <h2>Edição I - 2018</h2>
                            <p>Edição fundadora da PEMUN, contando com 6 comitês simulados: Corte Interamericana de Direitos Humanos (Corte IDH), Comitê Social, Humanitário e Cultural (SoCHum), Comitê de Desarmamento e Segurança Internaciona (DISEC), Comitê de Imprensa Internacional (CII), United Nations Security Council (UNSC) e  Conferência das Nações Unidas para o Comércio e Desenvolvimento (UNCTAD).
                                Confira abaixo os guias desenvolvidos.</p>
                            <a href="https://drive.google.com/drive/folders/1PFoSePQfLp9XkxsSq0rBKhcbvfWCSGeT?usp=share_link" className="access-button">Acessar</a>
                        </div>
                    </div>
                    <div className="edition">
                        <div className="edition-image">
                            <img src={arquivo2} alt="Equipe da Edição I - 2018"/>
                        </div>
                        <div className="edition-content">
                            <h2>Edição II - 2019</h2>
                            <p>Em sua 2ª edição, a PEMUN já demonstrou um vislumbre da tradição que estava se construíndo em Pernambuco, proporcionando uma edição que novamente contou com 6 comitês simulados: Gabinete Egípcio-Sírio (GAB), Comissão sobre a Prevenção ao Crime e Justiça Criminal (CPCJC), United Nations Security Council (UNSC), Programa das Nações unidas para o Meio Ambiente (PNUMA), Comissão Econômica para a América Latina e o Caribe (CEPAL) e Corte Internacional de Justiça (CIJ).
                                Confira abaixo os guias desenvolvidos.</p>
                            <a href="https://drive.google.com/drive/folders/1frkCWt0bGeRrVm0jREGdlJdam18qrYLD?usp=share_link" className="access-button">Acessar</a>
                        </div>
                    </div>
                    <div className="edition">
                        <div className="edition-image">
                            <img src={arquivo3} alt="Equipe da Edição I - 2018"/>
                        </div>
                        <div className="edition-content">
                            <h2>Edição III - 2020</h2>
                            <p>Encarando uma edição surpreendida por uma pandemia global, em sua 3ª edição a PEMUN lutou pela existência da Mun universitária em Pernambuco, regando um projeto em tempos incertos, mantendo-o vivo para florescer no futuro. Foram simulados 7 comitês: United Nations Security Council (UNSC), Tribunal Penal Internacional para Ruanda (TPIR), Comissão das Nações Unidas sobre a situação das Mulheres (ONU MULHERES), Escritório das Nações Unidas para Assuntos do Espaço Sideral (UNOOSA), Conferência das Nações Unidas sobre Mudanças Climáticas (COP25), Comitê de Imprensa Internacional (CII), Cooperação Econômica Ásia-Pacífico (APEC).
                                Confira abaixo os guias desenvolvidos.</p>
                            <a href="https://drive.google.com/drive/folders/11xz03RLBHnncy9Dei71Rw0Y3NvOBxciR?usp=share_link" className="access-button">Acessar</a>
                        </div>
                    </div>
                    <div className="edition">
                        <div className="edition-image">
                            <img src={arquivo4} alt="Equipe da Edição I - 2018"/>
                        </div>
                        <div className="edition-content">
                            <h2>Edição III.I - 2021</h2>
                            <p>Sendo o primeiro ciclo de desenvolvimento realizado inteiramente após a pandemia global, as dificuldades enfrenteadas para manter a PEMUN viva foram diversas, razão pela qual a edição de 2021 foi realizada na modalidade online, de forma reduzida, a fim de manter viva a tradição da simulação em Pernambuco. Ao total, foram simulados 3 comitês: Comitê de Imprensa Internacional (CII), Comitê Social, Humanitário e Cultural (SoCHum), Tribunal Europeu dos Direitos Humanos (TEDH).
                                Confira abaixo os guias desenvolvidos.</p>
                            <a href="https://drive.google.com/drive/folders/18lfu0uxbUInOlOvq4-XUGr5wxlGN4kAw?usp=share_link" className="access-button">Acessar</a>
                        </div>
                    </div>
                    <div className="edition">
                        <div className="edition-image">
                            <img src={arquivo5} alt="Equipe da Edição I - 2018"/>
                        </div>
                        <div className="edition-content">
                            <h2>Edição IV - 2022</h2>
                            <p>Em sua 4ª edição, a PEMUN teve sua primeira simulação presencial pós-pandemia, voltando com a tradição cultivada desde sua fundação, contando novamente com 6 comitês simulados: Comitê de Imprensa Internacional (CII), Organização dos Estados Americanos (OEA), Organização Mundial do Comércio (OMC), Organização Mundial da Saúde (OMS), Tribunal Internacional do Direito do Mar (TIDM), United Nation Security Council (UNSC).
                                Confira abaixo os guias desenvolvidos.</p>
                            <a href="https://drive.google.com/drive/folders/1YeZE8cU0NHNGmzqx7FRVgc-d0pfTujpA?usp=share_link" className="access-button">Acessar</a>
                        </div>
                    </div>
                    <div className="edition">
                        <div className="edition-image">
                            <img src={arquivo6} alt="Equipe da Edição I - 2018"/>
                        </div>
                        <div className="edition-content">
                            <h2>Edição V - 2023</h2>
                            <p>Em meia década de vida, a PEMUN encarou diversos desafios, tendo sido sua 5ª edição um marco em sua história, buscando expandir a tradição cultivada não somente em solos pernambucanos, como em todo Nordeste. Pela primeira vez em sua história, a PEMUN proporcionou 10 comitês simultâneos em sua 5ª edição, sendo eles: Assembléia Geral das Nações Unidas 2050 (AGNU2050), Comisión Econômica para America Latina y Caribe (CEPAL), Comitê de Imprensa Internacional (CII), Corte Internacional de Justiça (CIJ), Gabinete Russo-Ucraniano (GRU), Programa Mundial de Alimentos (PMA), Suprema Corte do Estado de New York (SCONY), Organização das Naçoes Unidas para a Educação, Ciência e Cultura (UNESCO), Escritório das Nações Unidas para Assuntos do Espaço Sideral (UNOOSA), United Nations Security Council (UNSC).
                                Confira abaixo os guias desenvolvidos.</p>
                            <a href="https://drive.google.com/drive/folders/19F5MN5mQLTdCf1VQ5rvNfa-0ARorLC9x?usp=share_link" className="access-button">Acessar</a>
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

export default Arquivos;
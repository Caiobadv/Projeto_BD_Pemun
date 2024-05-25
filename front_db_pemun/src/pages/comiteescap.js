import React from 'react';
import LogoVerde from '../Images/LogoVerde.png';
import insta from '../Images/insta.png';
import email from '../Images/email.png';
import linktree from '../Images/linktree.png';
import LogoEscap from '../Images/escap_v7-removebg-preview.png';
import BiancaFarias from '../Images/IMG_8414 - Bianca Farias.jpeg';
import CamilaVitor from '../Images/IMG_8421 - Camila Vitor.jpeg';
import IngridPeixoto from '../Images/IMG_8394 - Ingrid Peixoto.jpeg';
import JuliaLima from '../Images/IMG_8379 - Julia Lima.jpeg';
import MariaEduardaJustino from '../Images/IMG_8404 - Maria Eduarda Justino.jpeg';
import WeltonFelix from '../Images/IMG_8368 - Welton Felix.jpeg';
import MariaEugeniaDubeux from '../Images/IMG_1220 - Maria Eugênia Dubeux.jpeg';


import '../App.css';
import './comiteagnu.css'

function ComiteEscap(){
    return(
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
                    <img src={LogoEscap} alt="Logo Comité" className="comite-logo"/>
                    <div className="comite-title">
                    <h1>Comissão Econômica e Social para a Ásia e o Pacífico</h1>
                    <h2>Tópico A: Estratégias para a efetivação da Agenda 2030 mediante ao apoio a grupos vulneráveis</h2>
                    <h2>Tópico B: Os desafios da implementação do Plano Regional de Ação para o HIV</h2>
                    <a href="https://www.sympla.com.br/evento/pemun-edicao-vi-simulacao-presencial/2453687" className="button guia-button">Inscreva-se</a>
                    <div className="comite-buttons">
                    {/* <!--  <a href="https://drive.google.com/drive/folders/10VLNm0incqFMv8UwBVacvfu6B6z2KDUe?usp=share_link" className="button guia-button">Study Guide</a>
                        <a href="https://drive.google.com/drive/folders/1XNfE3BtoJEyay2ZMs4AgcY9xo30gPNmb?usp=share_link" className="button guia-button">Annex Guide</a> --> */}
                    </div>
                    </div>
                </div>
                <div className="comite-summary">
                    <h3>Resumo do Comitê</h3>
                    <p>Em busca de um fórum que possibilitasse a colaboração regional e o foco no desenvolvimento econômico e na reconstrução pós-guerra, a Comissão Econômica para a Ásia e o Extremo Oriente (ECAFE) foi criada em Xangai. Ao longo das décadas, a ECAFE passou por uma notável transformação. Em 1976, já havia mudado sua sede para a vibrante Bangkok e, para refletir a diversidade de sua adesão e a expansão de seu escopo de trabalho, assumiu o novo nome de Comissão Econômica e Social para a Ásia e o Pacífico (ESCAP).

                        A história da ESCAP é uma história de evolução, resiliência e compromisso com o progresso. Ao enfrentar desafios complexos, a região da Ásia e do Pacífico tem na ESCAP uma parceira dedicada, pronta para apoiar na construção de um futuro mais promissor. Unidos pela visão da Agenda 2030 e pelos ODS, por isso este comitê se compromete em discutir dois tópicos importantes: o apoio a grupos vulneráveis no contexto da Agenda 2030 para o Desenvolvimento Sustentável; e no impacto não só social mas que é uma questão de saúde pública.
                        
                        O tópico A propõe explorar os avanços já alcançados e as questões emergentes relacionadas ao compromisso de "não deixar ninguém para trás" no contexto dos ODS. A Comissão do Desenvolvimento Social da Comissão Econômica e Social das Nações Unidas para a Ásia e o Pacífico (ESCAP) desempenha um papel crucial na promoção do desenvolvimento sustentável na região.
                        
                        Além disso, no tópico B, a epidemia de HIV continua a ser uma preocupação global, afetando comunidades em todo o mundo. No entanto, é essencial reconhecer que a escassez de acesso aos serviços essenciais de combate ao HIV é uma questão complexa e de extrema relevância. Na região da Ásia e do Pacífico, a resistência política e legal tem sido um desafio constante na busca por respostas eficazes ao HIV, especialmente para as populações-chave mais vulneráveis.</p>
                </div>
                <div className="comite-representaciones">
                    <h2>Representações</h2>
                    <ul className="representaciones-list">
                    <li>Comunidade da Austrália</li>
                    <li>País do Japão</li>
                    <li>República da Indonésia</li>
                    <li>Reino da Tailândia</li>
                    <li>Emirado Islãmico do Afeganistão</li>
                    <li>República Democrática Socialista do Sri Lanka</li>
                    <li>República Popular de Bangladesh</li>
                    <li>Estados Unidos da América</li>
                    <li>República da Índia</li>
                    <li>República do Cazaquistão</li>
                    <li>República Quirguiz</li>
                    <li>Estado Independente da Papua Nova-Guiné</li>
                    <li>República Democrática Federal do Nepal</li>
                    <li>República Islâmica do Paquistão</li>
                    <li>República Popular Democrática da Coréia</li>
                    <li>Federação Russa</li>
                    <li>República da Singapura</li>
                    <li>República da Coréia</li>
                    <li>Reino do Cambodja</li>
                    <li>Nova Zelândia</li>
                    <li>República da Turquia</li>
                    <li>República Islâmica do Irã</li>
                    <li>República Socialista do Vietnã</li>
                    <li>República Popular da China</li>
                    </ul>
                </div>
                <div className="comite-directoria">
                    <h2>Diretoria</h2>
                    <div className="directoria-members">
                    <div className="member">
                        <img src={BiancaFarias} alt="Bianca Farias"/>
                        <h3>Bianca Farias</h3>
                    </div>
                    <div className="member">
                        <img src={CamilaVitor} alt="Camila Vitor"/>
                        <h3>Camila Vitor</h3>
                    </div>
                    <div className="member">
                        <img src={IngridPeixoto} alt="Ingrid Peixoto"/>
                        <h3>Ingrid Peixoto</h3>
                    </div>
                    <div className="member">
                        <img src={JuliaLima} alt="Julia Lima"/>
                        <h3>Julia Lima</h3>
                    </div>
                    <div className="member">
                        <img src={MariaEduardaJustino} alt="Maria Eduarda Justino"/>
                        <h3>Maria Eduarda Justino</h3>
                    </div>
                    <div className="member">
                        <img src={WeltonFelix} alt="Welton Felix"/>
                        <h3>Welton Felix</h3>
                    </div>
                    </div>
                </div>
                <div className="tutores-section">
                    <h2>Tutores</h2>
                    <p>Membros do Secretariado, Alumni e convidados que orientaram a elaboração do Comitê.</p>
                    <div className="tutores-container">
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
                    <p>Designed and Developed by Ana Beatriz Alves e Caio Barreto</p>
                    <p className="cor-verde">© Copyright 2024, All Rights Reserved by PEMUN</p>
                </div>
                </div>
            </footer>
        </div>
    );
}

export default ComiteEscap;
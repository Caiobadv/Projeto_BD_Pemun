import React from 'react';
import LogoVerde from '../Images/LogoVerde.png';
import insta from '../Images/insta.png';
import email from '../Images/email.png';
import linktree from '../Images/linktree.png';
import LogoCam from '../Images/CAM_V3-removebg-preview.png';

import AnaLuisaPorpino from '../Images/IMG_7987 - Ana Luísa.jpeg';
import BiancaFlorentino from '../Images/IMG_7992 - Bianca Florentino.jpeg';
import CauaVittor from '../Images/IMG_7980 - Cauã Victtor.jpeg';
import EduardaBrasil from '../Images/IMG_7997 - Eduarda Brasil.jpeg';
import EllenSandy from '../Images/IMG_7961 - Ellen Sandy.jpeg';
import LuizaPereira from '../Images/IMG-1020 - LUIZA PEREIRA DA ROCHA.jpg';
import LucasMoura from '../Images/IMG_7952 - Lucas Moura.jpeg';
import VitoriaSousa from '../Images/IMG_8255 - Vitória Sousa.jpeg';
import GabriellaNebieker from '../Images/IMG_8595 - Gabriella.jpeg';

import '../App.css';
import './comiteagnu.css'

function ComiteCam() {
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
                <img src={LogoCam} alt="Logo Comité" className="comite-logo"/>
                <div className="comite-title">
                <h1>Comisión de Asuntos Migratorios</h1>
                <h2>Tópico A: Desafíos de la integración socioeconómica de los inmigrantes y refugiados en los países de América</h2>
                <h2>Tópico B: Crisis migratoria de Venezuela</h2>
                <a href="https://www.sympla.com.br/evento/pemun-edicao-vi-simulacao-presencial/2453687" className="button guia-button">Inscreva-se</a>
                <div className="comite-buttons">
                {/* <!--  <a href="https://drive.google.com/drive/folders/10VLNm0incqFMv8UwBVacvfu6B6z2KDUe?usp=share_link" className="button guia-button">Study Guide</a> */}
                    {/* <a href="https://drive.google.com/drive/folders/1XNfE3BtoJEyay2ZMs4AgcY9xo30gPNmb?usp=share_link" className="button guia-button">Annex Guide</a> --> */}
                </div>
                </div>
            </div>
            <div className="comite-summary">
                <h3>Resumen del Comité</h3>
                <p>Desde su fundación en 2012, la Comisión de Asuntos Migratorios (CAM) se ha dedicado a promover un promover el diálogo, la cooperación y el intercambio de experiencias, lecciones aprendidas y mejores prácticas en los ámbitos internacional, regional, subregional y bilateral en materia migratoria, dentro de un marco de respeto a los derechos humanos, fomentando el reconocimiento a la importante contribución de los migrantes al desarrollo integral del Hemisferio.

                En el contexto actual de América Latina, marcado por turbulencias y desafíos políticos, la CAM desempeña un papel crucial al abordar la integración de inmigrantes y refugiados y su impacto en los países miembros, especialmente en el ámbito social. El aumento de la migración en la región debido a disputas políticas en los países de origen acentúa la necesidad de que los gobiernos de América Latina creen estructuras para proteger los derechos de estos individuos e integrarlos plenamente en la sociedad. Esto, a su vez, tiene un impacto en la economía, las relaciones internacionales y otros aspectos estatales.
                
                Por lo tanto, el principal objetivo del comité es discutir las políticas públicas adoptadas para garantizar los derechos de los inmigrantes y refugiados, ya que actualmente este constituye uno de los temas principales de la agenda internacional y nacional.</p>
            </div>
            <div className="comite-representaciones">
                <h2>Representaciones</h2>
                <ul className="representaciones-list">
                <li>Canadá</li>
                <li>República Bolivariana de Venezuela</li>
                <li>República del Ecuador</li>
                <li>República del Paraguay</li>
                <li>Estado Plurinacional de Bolivia</li>
                <li>República de Chile</li>
                <li>República de El Salvador</li>
                <li>República del Perú</li>
                <li>Estados Unidos de América</li>
                <li>República de Colombia</li>
                <li>República de Haití</li>
                <li>República Dominicana</li>
                <li>Estados Unidos Mexicanos</li>
                <li>República de Costa Rica</li>
                <li>República de Honduras</li>
                <li>República Federativa del Brasil</li>
                <li>República Argentina</li>
                <li>República de Cuba</li>
                <li>República de Nicaragua</li>
                <li>República Oriental del Uruguay</li>
                </ul>
            </div>
            <div className="comite-directoria">
                <h2>Directoria</h2>
                <div className="directoria-members">
                <div className="member">
                    <img src={AnaLuisaPorpino} alt="Ana Luisa Porpino"/>
                    <h3>Ana Luisa Porpino</h3>
                </div>
                <div className="member">
                    <img src={BiancaFlorentino} alt="Bianca Florentino"/>
                    <h3>Bianca Florentino</h3>
                </div>
                <div className="member">
                    <img src={CauaVittor} alt="Cauã Vittor"/>
                    <h3> Cauã Vittor</h3>
                </div>
                <div className="member">
                    <img src={EduardaBrasil} alt="Eduarda Brasil"/>
                    <h3>Eduarda Brasil</h3>
                </div>
                <div className="member">
                    <img src={EllenSandy} alt="Ellen Sandy"/>
                    <h3>Ellen Sandy</h3>
                </div>
                <div className="member">
                    <img src={LuizaPereira} alt="Luiza Pereira"/>
                    <h3>Luiza Pereira</h3>
                </div>
                <div className="member">
                    <img src={LucasMoura} alt="Lucas Moura"/>
                    <h3>Lucas Moura</h3>
                </div>
                </div>
            </div>
            <div className="tutores-section">
                <h2>Tutores</h2>
                <p>Membros do Secretariado, Alumni e convidados que orientaram a elaboração do Comitê.</p>
                <div className="tutores-container">
                <div className="tutor">
                    <img src={VitoriaSousa} alt="Vitória Sousa"/>
                    <p>Vitória Sousa</p>
                </div>
                <div className="tutor">
                    <img src={GabriellaNebieker} alt="Gabriella Nebieker"/>
                    <p>Gabriella Nebieker</p>
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

export default ComiteCam;
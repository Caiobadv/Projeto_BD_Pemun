import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import SearchBar from './searchbar';

import LogoVerde from '../Images/LogoVerde.png';
import insta from '../Images/insta.png';
import email from '../Images/email.png';
import linktree from '../Images/linktree.png';

import '../App.css';
import './comiteagnu.css'
import './Produto.css';

function ProdutoDetalhes(){
    const { id } = useParams();
    const [produto, setProduto] = useState(null);

    useEffect(() => {
        fetchProduto();
    }, []);

    const fetchProduto = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/produto/${id}`);
            setProduto(response.data);
        } catch (error) {
            console.error('Erro ao buscar produto', error);
        }
    };

    if (!produto) {
        return <div>Carregando...</div>;
    }

    return(
        <div>
            <header class="site-header">
                <div class="header-top">
                <img src={LogoVerde} alt="Logo PEMUN" class="logo"/> 
                <nav class="navigation">
                    <ul class="navigation-list">
                    <li class="navigation-item"><Link to='/' class="navigation-link">Home</Link></li>
                    <li class="navigation-item"><Link to='/edicao' class="navigation-link">Edição VI</Link></li>
                    <li class="navigation-item"><Link to='/arquivos' class="navigation-link">Arquivos</Link></li> 
                    <li className="navigation-item"><Link to="/staff" className="navigation-link">Staff</Link></li>
                    <li class="navigation-item"><Link to='/loja' class="navigation-link">Nossa Loja</Link></li>
                    </ul>
                </nav>
                <a  href="https://linktr.ee/Pemun" class="button contato-button">Contato</a>
                </div>
            </header>

            <div>
                <h2>{produto.nome_item}</h2>
                {produto.preco_item !== undefined ? (
                    <p>Preço: R$ {produto.preco_item.toFixed(2)}</p>
                ) : (
                    <p>Preço: Indisponível</p>
                )}
                <p>Descrição: {produto.descricao_item}</p>
                <p>Cor: {produto.cor_produto}</p>
                <p>Tamanho: {produto.tamanho}</p>
            </div>

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
                    <p>Designed and Developed by Ana Beatriz Alves, Caio Barreto e Virna Amaral</p>
                    <p class="cor-verde">© Copyright 2024, All Rights Reserved by PEMUN</p>
                </div>
                </div>
            </footer>
        </div>
    );
}

export default ProdutoDetalhes;
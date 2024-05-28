import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import LogoVerde from '../Images/LogoVerde.png';
import insta from '../Images/insta.png';
import email from '../Images/email.png';
import linktree from '../Images/linktree.png';
import '../App.css';
import './comiteagnu.css'
import './Produto.css';

function Loja() {

    const [produtos, setProdutos] = useState([]);
    const [carrinhoId, setCarrinhoId] = useState(1);
    useEffect(() => {
        fetchProdutos();
    }, []);

    const fetchProdutos = async () => {
        try {
            const response = await axios.get('http://localhost:8080/produtos');
            setProdutos(response.data);
        } catch (error) {
            console.error('Erro ao buscar produtos', error);
        }
    };

    const addItemAoCarrinho = async (produto) => {
        try {
            const item = {
                id_item: produto.id_item_produto,
                nome_item: produto.nome,
                qtd_total_item: 1,
                preco_item: produto.preco
            };
            console.log('Adicionando ao carrinho:', item);
            const response = await axios.post(`http://localhost:8080/${carrinhoId}/add`, item, {
                params: { qtdItem: 1 }
            });
            console.log('Resposta da API:', response.data);
            alert('Item adicionado ao carrinho!');
        } catch (error) {
            console.error('Erro ao adicionar item ao carrinho', error);
            alert(`Erro ao adicionar item ao carrinho: ${error.response ? error.response.data : error.message}`);
        }
    };

    return (
        <div>
            <header className="site-header">
                <div className="header-top">
                    <img src={LogoVerde} alt="Logo PEMUN" className="logo" />
                    <nav className="navigation">
                        <ul className="navigation-list">
                            <li className="navigation-item"><Link to='/' className="navigation-link">Home</Link></li>
                            <li className="navigation-item"><Link to='/edicao' className="navigation-link">Edição VI</Link></li>
                            <li className="navigation-item"><Link to='/arquivos' className="navigation-link">Arquivos</Link></li>
                            <li className="navigation-item"><Link to='/staff' className="navigation-link">Staff</Link></li>
                            <li className="navigation-item"><Link to='/loja' className="navigation-link">Nossa Loja</Link></li>
                            <li className="navigation-item"><Link to='/carrinho' className="navigation-link">Carrinho</Link></li>
                        </ul>
                    </nav>
                    <a href="https://linktr.ee/Pemun" className="button contato-button">Contato</a>
                </div>
            </header>

            <div className="produto-list">
                <h2>Produtos</h2>
                <ul>
                    {produtos.map((produto) => (
                        <li key={produto.id_produto}>
                            <Link to={`/loja/produto/${produto.id_produto}`}>
                                {produto.nome} - {produto.cor_produto} - {produto.tamanho} - R${produto.preco}
                            </Link>
                            <button onClick={() => addItemAoCarrinho(produto)}>Adicionar ao Carrinho</button>
                        </li>
                    ))}
                </ul>
            </div>

            <footer className="site-footer">
                <div className="footer-content">
                    <div className="footer-logo-socials">
                        <img src={LogoVerde} alt="Logo PEMUN" className="footer-logo" />
                        <div className="social-icons">
                            <a href="https://www.instagram.com/pernambucomun/" className="social-icon"><img src={insta} alt="Instagram" /></a>
                            <a href="mailto:pernambucomun@gmail.com" className="social-icon"><img src={email} alt="email" /></a>
                            <a href="https://linktr.ee/Pemun" className="social-icon"><img src={linktree} alt="Linktree" /></a>
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

export default Loja;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import LogoVerde from '../Images/LogoVerde.png';
import insta from '../Images/insta.png';
import email from '../Images/email.png';
import linktree from '../Images/linktree.png';

import './carrinho.css';
import '../App.css';
import './home.css'

function Carrinho  ({ carrinhoId })
{
    const [itens, setItens] = useState([]);
    const [observacao, setObservacao] = useState('');

    const carregarCarrinho = async () => {
        try {
        const response = await axios.get(`/carrinho/${carrinhoId}`);
        setItens(response.data);
        } catch (error) {
        console.error("Erro ao carregar o carrinho:", error);
        }
    };

    const adicionarAoCarrinho = async (item) => {
        try {
        await axios.post(`/carrinho/${carrinhoId}/add`, item);
        carregarCarrinho();
        } catch (error) {
        console.error("Erro ao adicionar ao carrinho:", error);
        }
    };

    const removerDoCarrinho = async (itemId) => {
        try {
        await axios.delete(`/carrinho/${carrinhoId}/remove`, { params: { itemId } });
        carregarCarrinho();
        } catch (error) {
        console.error("Erro ao remover do carrinho:", error);
        }
    };
    
    const limparCarrinho = async () => {
        try {
          for (const item of itens) {
            await axios.delete(`/carrinho/${carrinhoId}/remove`, { params: { itemId: item.idItem } });
          }
          carregarCarrinho();
        } catch (error) {
          console.error("Erro ao limpar o carrinho:", error);
        }
      };
    
      const atualizarQuantidade = async (itemId, novaQuantidade) => {
        try {
            const item = itens.find(item => item.idItem === itemId);
            
            if (item)
            {
                item.qtdTotalItem = novaQuantidade;
                await axios.post(`/carrinho/${carrinhoId}/add`, item);
                carregarCarrinho();
            }
        } catch (error) {
          console.error("Erro ao atualizar a quantidade:", error);
        }
    };

    useEffect(() => {
        carregarCarrinho();
    }, [carrinhoId]);

    const quantidadeTotal = itens.reduce((total, item) => total + item.qtdTotalItem, 0);
    const valorTotal = itens.reduce((total, item) => total + item.precoItem * item.qtdTotalItem, 0);

    return (
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
                    <li class="navigation-item"><Link to='/carrinho' class="navigation-link">Carrinho</Link></li>
                    </ul>
                </nav>
                <a href="https://linktr.ee/Pemun" class="button contato-button">Contato</a>
                </div>
            </header>

            <div className="carrinho-container">
                <header>
                    <button className="clear-cart-btn" onClick={limparCarrinho}>LIMPAR CARRINHO</button>
                </header>
                <div className="cart-items">
                    {itens.map(item => (    //acho que to puxando errado aqui
                    <div className="cart-item" key={item.id_item}>
                        <div className="item-image">
                            <img src="placeholder.png" alt="Produto" />
                        </div>
                        <div className="cart-item-details">
                            <h2>{item.nome_item}</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum ex a erat rhoncus consequat.</p>
                            <div className="quantity-control">
                                <button className="quantity-control button" onClick={() => atualizarQuantidade(item.id_item, item.qtd_total_item - 1)}>-</button>
                                <span>{item.qtd_total_item}</span>
                                <button className="quantity-control button" onClick={() => atualizarQuantidade(item.id_item, item.qtd_total_item + 1)}>+</button>
                            </div>
                                <p className="item-total">R$ {item.preco_item.toFixed(2)}</p>
                                <button className="remove-item-btn" onClick={() => removerDoCarrinho(item.id_item)}>X</button>
                        </div>
                    </div>
                    ))}
                </div>
                <div className="cart-note">
                    <label>
                    Alguma observação?
                    <textarea className="cart-note textarea" value={observacao} onChange={e => setObservacao(e.target.value)} maxLength="214" />
                    </label>
                </div>
                <div className="cart-summary">
                    <p>QUANTIDADE TOTAL: {quantidadeTotal}</p>
                    <p>VALOR TOTAL: R$ {valorTotal.toFixed(2)}</p>
                    <button>FECHAR PEDIDO</button>
                </div>
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

export default Carrinho;
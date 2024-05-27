import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Produto.css';

const Produto = () => {
    const [produtos, setProdutos] = useState([]);
    const [novoProduto, setNovoProduto] = useState({ id_produto: '', id_item_produto: '', cor_produto: '', tamanho: '' });

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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNovoProduto({ ...novoProduto, [name]: value });
    };

    const handleAddProduto = async () => {
        try {
            await axios.post('http://localhost:8080/produto', novoProduto);
            fetchProdutos();
            setNovoProduto({ id_produto: '', id_item_produto: '', cor_produto: '', tamanho: '' });
        } catch (error) {
            console.error('Erro ao adicionar produto', error);
        }
    };

    const handleDeleteProduto = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/produto/${id}`);
            fetchProdutos();
        } catch (error) {
            console.error('Erro ao deletar produto', error);
        }
    };

    return (
        <div className="produto-container">
            <h1>Gestão de Produtos</h1>
            <div className="produto-form">
                <input
                    type="text"
                    name="id_item_produto"
                    placeholder="ID do item"
                    value={novoProduto.id_item_produto}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="cor_produto"
                    placeholder="Cor do Produto"
                    value={novoProduto.cor_produto}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="tamanho"
                    placeholder="Tamanho"
                    value={novoProduto.tamanho}
                    onChange={handleInputChange}
                />
                <button onClick={handleAddProduto}>Adicionar Produto</button>
            </div>
            <div className="produto-list">
                <h2>Produtos Existentes</h2>
                <ul>
                    {produtos.map((produto) => (
                        <li key={produto.id_produto}>
                            {produto.id_item_produto} - {produto.cor_produto} - {produto.tamanho}
                            <button onClick={() => handleDeleteProduto(produto.id_produto)}>Remover</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Produto;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Pacote.css';

const Pacote = () => {
    const [pacotes, setPacotes] = useState([]);
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');

    useEffect(() => {
        fetchPacotes();
    }, []);

    const fetchPacotes = async () => {
        const response = await axios.get('http://localhost:8080/pacotes');
        setPacotes(response.data);
    };

    const addPacote = async (e) => {
        e.preventDefault();
        const newPacote = { nome, descricao, preco };
        await axios.post('http://localhost:8080/pacote', newPacote);
        fetchPacotes();
        setNome('');
        setDescricao('');
        setPreco('');
    };

    const deletePacote = async (id) => {
        await axios.delete(`http://localhost:8080/produto/${id}`);
        fetchPacotes();
    };

    return (
        <div className="pacote-container">
            <form className="pacote-form" onSubmit={addPacote}>
                <input 
                    type="text" 
                    placeholder="Nome" 
                    value={nome} 
                    onChange={(e) => setNome(e.target.value)} 
                />
                <input 
                    type="text" 
                    placeholder="Descrição" 
                    value={descricao} 
                    onChange={(e) => setDescricao(e.target.value)} 
                />
                <input 
                    type="number" 
                    placeholder="Preço" 
                    value={preco} 
                    onChange={(e) => setPreco(e.target.value)} 
                />
                <button type="submit">Adicionar Pacote</button>
            </form>
            <div className="pacote-list">
                <ul>
                    {pacotes.map((pacote) => (
                        <li key={pacote.id}>
                            <span>{pacote.nome}</span>
                            <span>{pacote.descricao}</span>
                            <span>{pacote.preco}</span>
                            <button onClick={() => deletePacote(pacote.id)}>Remover</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Pacote;

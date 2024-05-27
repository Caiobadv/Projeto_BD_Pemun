import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Pacote.css';

const Pacote = () => {
    const [pacotes, setPacotes] = useState([]);
    const [id_item_pacote, setIdItemPacote] = useState('');

    useEffect(() => {
        fetchPacotes();
    }, []);

    const fetchPacotes = async () => {
        const response = await axios.get('http://localhost:8080/pacotes');
        setPacotes(response.data);
    };

    const addPacote = async (e) => {
        e.preventDefault();
        const newPacote = {id_item_pacote};
        await axios.post('http://localhost:8080/pacote', newPacote);
        fetchPacotes();
        setIdItemPacote('');
    };

    const deletePacote = async (id) => {
        await axios.delete(`http://localhost:8080/pacotes/${id}`);
        fetchPacotes();
    };

    return (
        <div className="pacote-container">
            <form className="pacote-form" onSubmit={addPacote}>
                <input 
                    type="number" 
                    placeholder="id_item_pacote" 
                    value={id_item_pacote} 
                    onChange={(e) => setIdItemPacote(e.target.value)} 
                />
                <button type="submit">Adicionar Pacote</button>
            </form>
            <div className="pacote-list">
                <ul>
                    {pacotes.map((pacote) => (
                        <li key={pacote.id_pacote}>
                            <span>{pacote.id_pacote}</span>
                            <span>{pacote.id_item_pacote}</span>
                            <button onClick={() => deletePacote(pacote.id_pacote)}>Remover</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Pacote;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Ingresso.css';

function Ingresso() {
    const [ingressos, setIngressos] = useState([]);
    const [newIngresso, setNewIngresso] = useState({ id_ingresso: '', id_produto_ingresso: '', nome_evento_ingresso: '', data_compra_ingresso: ''});

    useEffect(() => {
        fetchIngressos();
    }, []);

    const fetchIngressos = async () => {
        const response = await axios.get('http://localhost:8080/ingressos');
        setIngressos(response.data);
    };

    const addIngresso = async () => {
        await axios.post('http://localhost:8080/ingresso', newIngresso);
        setNewIngresso({id_produto_ingresso: '', nome_evento_ingresso: '', data_compra_ingresso: ''});
        fetchIngressos();
    };

    const removeIngresso = async (id_ingresso) => {
        await axios.delete(`http://localhost:8080/ingresso/${id_ingresso}`);
        fetchIngressos();
    };

    return (
        <div className="ingresso-container">
            <div className="ingresso-form">
                <input
                    type="number"
                    placeholder="id_produto_ingresso"
                    value={newIngresso.id_produto_ingresso}
                    onChange={(e) => setNewIngresso({ ...newIngresso, id_produto_ingresso: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="nome_evento_ingresso"
                    value={newIngresso.nome_evento_ingresso}
                    onChange={(e) => setNewIngresso({ ...newIngresso, nome_evento_ingresso: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="data_compra_ingresso"
                    value={newIngresso.data_compra_ingresso}
                    onChange={(e) => setNewIngresso({ ...newIngresso, data_compra_ingresso: e.target.value })}
                />
                <button onClick={addIngresso}>Add Ingresso</button>
            </div>
            <div className="ingresso-list">
                <ul>
                    {ingressos.map((ingresso) => (
                        <li key={ingresso.id_ingresso}>
                            {ingresso.id_produto_ingresso} - {ingresso.nome_evento_ingresso} - {ingresso.data_compra_ingresso}
                            <button onClick={() => removeIngresso(ingresso.id_ingresso)}>Remove</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Ingresso;

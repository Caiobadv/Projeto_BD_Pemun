import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Evento.css';

function Evento() {
  const [eventos, setEventos] = useState([]);
  const [NewEvento, setNewEvento] = useState({nome_evento: '', data_evento: '', descricao_evento: '', rua_endereco_evento: '',
    numero_endereco_evento: '', bairro_endereco_evento: '', cep_endereco_evento: '', complemento_endereco_evento: ''});

  useEffect(() => {
    fetchEventos();
  }, []);

  const fetchEventos = async () => {
        const response = await axios.get('http://localhost:8080/eventos');
        setEventos(response.data);
  };

  const addEvento = async () => {
    await axios.post('http://localhost:8080/evento', NewEvento);
    setNewEvento({nome_evento: '', data_evento: '', descricao_evento: '', rua_endereco_evento: '',
    numero_endereco_evento: '', bairro_endereco_evento: '', cep_endereco_evento: '', complemento_endereco_evento: ''});
    fetchEventos();
};

const removeEvento = async (nome_evento) => {
    await axios.delete(`http://localhost:8080/evento/${nome_evento}`);
    fetchEventos();
};

  return (
        <div className="evento-container">
            <div className="evento-form">
                <input
                    type="text"
                    placeholder="nome_evento"
                    value={NewEvento.nome_evento}
                    onChange={(e) => setNewEvento({ ...NewEvento, nome_evento: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="data_evento"
                    value={NewEvento.data_evento}
                    onChange={(e) => setNewEvento({ ...NewEvento, data_evento: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="descricao_evento"
                    value={NewEvento.descricao_evento}
                    onChange={(e) => setNewEvento({ ...NewEvento, descricao_evento: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="rua_endereco_evento"
                    value={NewEvento.rua_endereco_evento}
                    onChange={(e) => setNewEvento({ ...NewEvento, rua_endereco_evento: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="numero_endereco_evento"
                    value={NewEvento.numero_endereco_evento}
                    onChange={(e) => setNewEvento({ ...NewEvento, numero_endereco_evento: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="bairro_endereco_evento"
                    value={NewEvento.bairro_endereco_evento}
                    onChange={(e) => setNewEvento({ ...NewEvento, bairro_endereco_evento: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="cep_endereco_evento"
                    value={NewEvento.cep_endereco_evento}
                    onChange={(e) => setNewEvento({ ...NewEvento, cep_endereco_evento: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="complemento_endereco_evento"
                    value={NewEvento.complemento_endereco_evento}
                    onChange={(e) => setNewEvento({ ...NewEvento, complemento_endereco_evento: e.target.value })}
                />
                <button onClick={addEvento}>Add Evento</button>
            </div>
            <div className="evento-list">
                <ul>
                    {eventos.map((eventos) => (
                        <li key={eventos.nome_evento}>
                           {eventos.nome_evento} - {eventos.data_evento} - {eventos.descricao_evento} - {eventos.rua_endereco_evento} - {eventos.numero_endereco_evento} - {eventos.bairro_endereco_evento} - {eventos.cep_endereco_evento} - {eventos.complemento_endereco_evento}
                            <button onClick={() => removeEvento(eventos.nome_evento)}>Remove</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Evento;

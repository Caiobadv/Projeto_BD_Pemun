import React, { useState, useEffect } from 'react';
import './Evento.css';

function Evento() {
  const [eventos, setEventos] = useState([]);
  const [formData, setFormData] = useState({nome_evento: '', data_evento: '', descricao_evento: '', rua_endereco_evento: '',
    numero_endereco_evento: '', bairro_endereco_evento: '', cep_endereco_evento: '', complemento_endereco_evento: ''});

  useEffect(() => {
    fetch('/api/eventos')
      .then(response => response.json())
      .then(data => setEventos(data));
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/eventos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      setEventos([...eventos, data]);
      setFormData({ nome_evento: '', data_evento: '', descricao_evento: '', rua_endereco_evento: '', numero_endereco_evento: '', bairro_endereco_evento: '', cep_endereco_evento: '', complemento_endereco_evento: ''
      });
    });
  };

  const handleDelete = (id) => {
    fetch(`/api/eventos/${id}`, {
      method: 'DELETE'
    })
    .then(() => {
      setEventos(eventos.filter(evento => evento.id !== id));
    });
  };

  return (
    <div className="evento-container">
      <form className="evento-form" onSubmit={handleSubmit}>
        <input name="nome_evento" placeholder="Nome do Evento" value={formData.nome_evento} onChange={handleChange} />
        <input name="data_evento" type="date" placeholder="Data do Evento" value={formData.data_evento} onChange={handleChange} />
        <input name="descricao_evento" placeholder="Descrição do Evento" value={formData.descricao_evento} onChange={handleChange} />
        <input name="rua_endereco_evento" placeholder="Rua" value={formData.rua_endereco_evento} onChange={handleChange} />
        <input name="numero_endereco_evento" placeholder="Número" value={formData.numero_endereco_evento} onChange={handleChange} />
        <input name="bairro_endereco_evento" placeholder="Bairro" value={formData.bairro_endereco_evento} onChange={handleChange} />
        <input name="cep_endereco_evento" placeholder="CEP" value={formData.cep_endereco_evento} onChange={handleChange} />
        <input name="complemento_endereco_evento" placeholder="Complemento" value={formData.complemento_endereco_evento} onChange={handleChange} />
        <button type="submit">Adicionar Evento</button>
      </form>
      <div className="evento-list">
        <ul>
          {eventos.map(evento => (
            <li key={evento.id}>
              {evento.nome_evento} - {evento.data_evento}
              <button onClick={() => handleDelete(evento.id)}>Remover</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Evento;

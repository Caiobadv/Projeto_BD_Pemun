import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Item.css';

function Item() {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState({ nome_item: '', preco_item: '', descricao_item: '',qtd_total_item: '', id_item: ''});

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        const response = await axios.get('http://localhost:8080/items');
        setItems(response.data);
    };

    const addItem = async () => {
        await axios.post('http://localhost:8080/item', newItem);
        setNewItem({nome_item: '', preco_item: '', descricao_item: '',qtd_total_item: '', id_item: '' });
        fetchItems();
    };

    const removeItem = async (id) => {
        await axios.delete(`http://localhost:8080/item/${id}`);
        fetchItems();
    };

    //const editItem = async (id) => {
      //  const response = await axios.get(`http://localhost:8080/item/${id}`);
       // setItems(response.data);
        //await axios.put(`http://localhost:8080/item/${id}`, newItem);   
       // fetchItems();
    //}

    return (
        <div className="item-container">
            <div className="item-form">
                <input
                    type="text"
                    placeholder="nome_item"
                    value={newItem.nome_item}
                    onChange={(e) => setNewItem({ ...newItem, nome_item: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="preco_item"
                    value={newItem.preco_item}
                    onChange={(e) => setNewItem({ ...newItem, preco_item: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="descricao_item"
                    value={newItem.descricao_item}
                    onChange={(e) => setNewItem({ ...newItem, descricao_item: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="qtd_total_item"
                    value={newItem.qtd_total_item}
                    onChange={(e) => setNewItem({ ...newItem, qtd_total_item: e.target.value })}
                />
                <button onClick={addItem}>Add Item</button>
            </div>
            <div className="item-list">
                <ul>
                    {items.map((item) => (
                        <li key={item.id_item}>
                            {item.nome_item} - ${item.preco_item} - {item.descricao_item} - {item.qtd_total_item}
                            <button onClick={() => removeItem(item.id_item)}>Remove</button>
                            <button onClick={() => removeItem(item.id_item)}>Editar</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Item;

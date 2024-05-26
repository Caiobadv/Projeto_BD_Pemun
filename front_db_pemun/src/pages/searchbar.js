import React, { useState, useEffect } from 'react';
import axios from 'axios';


const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [items, setItems] = useState([]);


    // const items = [
    //     { id: 1, name: "Ingresso" },
    //     { id: 2, name: "Pacote" },
    //     { id: 3, name: "Copo" },
    //     { id: 4, name: "Bottom" },
    // ];

    useEffect(() => {
        axios.get('http://localhost:8080/api/items')
            .then(response => {
                setItems(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the items!', error);
            });
    }, []);
    
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Pesquisar..."
                value={searchTerm}
                onChange={handleSearchChange}
                style={{ padding: '10px', fontSize: '16px', marginBottom: '10px' }}
            />
            <ul>
                {filteredItems.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default SearchBar;
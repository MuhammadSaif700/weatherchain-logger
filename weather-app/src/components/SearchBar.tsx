import React, { useState } from 'react';

const SearchBar: React.FC<{ onSearch: (location: string) => void }> = ({ onSearch }) => {
    const [input, setInput] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (input) {
            onSearch(input);
            setInput('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="search-bar">
            <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Enter location"
                className="search-input"
            />
            <button type="submit" className="search-button">Search</button>
        </form>
    );
};

export default SearchBar;
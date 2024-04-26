import {  React } from 'react';


const SearchBar = ({input, onInputChange, placeholder, className}) => {
    
         return (
            <div>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => onInputChange(e.target.value)}
                    placeholder={placeholder}
                    className={className}
                />
            </div>
        );
    };
    
 
export default SearchBar;


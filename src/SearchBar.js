import React from 'react';
import {useState} from 'react';

function SearchBar(props) {

    const {onSearch} = props;

    const {searchText, setSearchText} = useState('')

//    handleInput = (e) => {
//         const text = e.target.value
//         setSearchText(text)
//     }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            onSearch(searchText)
        }
    }

return (
    <div className="search">
        <div className="searchInput"> 
        <input className="input"  onKeyPress={handleKeyPress} value={searchText} type="text" placeholder="Search Here..."/>
        </div>
        
    </div>
       )   
    }


export default SearchBar
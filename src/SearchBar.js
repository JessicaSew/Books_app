import React from 'react';
import {useState} from 'react';

function SearchBar(props) {

    const {onSearch} = props;

    const [searchText, setSearchText] = useState('')

   const handleInput = (e) => {
        const text = e.target.value
        setSearchText(text)
    }
const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submitted')
}
    // const handleKeyPress = (e) => {
    //     if (e.key === 'Enter') {
    //         onSearch(searchText)
    //     }
    // }

return (
    <div className="search">
        <form className="searchInput" onSubmit={handleSubmit}> 
        <input className="input"  onChange={handleInput} value={searchText} type="text" placeholder="Search Here..."/>
        </form>
    </div>
       )   
    }


export default SearchBar
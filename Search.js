
import { useState } from "react";
import './App.css';
import SearchIcon from './search.svg';


const Search = (props)=>{

    const [title_txt, setTitle] = useState('');

    const handleChange = (event)=>{
        setTitle(event.target.value);
    }

    const handleClick = (event)=>{
        props.title(title_txt);
        

    }

    
    return(
        <div className="search">
            <input type="text" onChange={handleChange} placeholder="Search Movies Here!" value={title_txt}></input>
            <img src={SearchIcon} onClick={handleClick}></img>
            
        </div>
    );

}

export default Search;
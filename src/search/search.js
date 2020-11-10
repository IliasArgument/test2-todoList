import React, {useState} from 'react';

const Search = ({onSearchPost}) => {
   const [search, setSearch] = useState('');

   const valueChange = (e) => {
     setSearch(e.target.value);   
     onSearchPost(search);
    };
    return (    
       <div>
          <input
          className="search_inp"
          type="text"
          onChange={valueChange}
          value={search}   
          placeholder="Search"     
          ></input>
       </div>
       
    );
    }

 
export default Search;
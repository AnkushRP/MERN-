// import { React, useState } from "react";
// import TextField from "@mui/material/TextField";
// import "./App.css";
// import "./Search.css"

// function Search() {
//   return (
//     <div className="main">
//       <h1>React Search</h1>
//       <div className="search">
//         <TextField
//           id="outlined-basic"
//           variant="outlined"
//           fullWidth
//           label="Search"
//         />
//       </div>
//     </div>
//   );
// }

// export default Search;
import React, { useState } from 'react';
import './Search.css'; // Import your CSS file for styling

const Search = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
        className="search-input"
      />
      <div className="search-results">
        <ul>
          {filteredItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Search;
import React from 'react'
import Button from 'react-bootstrap/Button';
import SearchIcon from '../Img/search-solid.svg'
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import propTypes from 'prop-types'
import { useState } from 'react';



function SearchBar({searchText, onClick}) {
    const [searchTerms, setSearchTerms] = useState("");

    const searchBarStyle = {
        height: "5vh",
        borderRadius: "25px"
    }

    const searchButtonStyle = {
        height: "5vh",
        borderRadius: "25px",
        borderStyle: "none",
    }

    return (
    <InputGroup className="mb-3" style={{maxHeight: "5vh"}}>
        <FormControl style={searchBarStyle} onChange={e => setSearchTerms( e.target.value) }
            id= "search-bar"
            placeholder= {searchText} 
            aria-label="Search Term"
        />
        <Button style={searchButtonStyle}
            onClick={() => onClick(searchTerms)}
            variant="outline-secondary"
            id="search-button">
                <img src={SearchIcon} height="30px" alt="Search icon"/>
        </Button>
    </InputGroup>
    )
}
SearchBar.defaultProps= {
    searchText : "Enter your search"
}
SearchBar.propTypes = {
    searchText: propTypes.string,
    onClick: propTypes.func.isRequired
}

export default SearchBar


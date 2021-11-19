import React from 'react'
import Button from 'react-bootstrap/Button';
import SearchBar from '../Shared_components/SearchBar';
import { useState } from 'react';
import PaginatedSearchResults from '../Shared_components/PaginatedSearchResults'
import AdvancedSidebar from '../Shared_components/AdvancedSideBar'
import '../Css/HomePage.css';
import reactStickyBox from 'react-sticky-box';
import Suggestor from '../Shared_components/Suggestor';

const Home = props => {
    const [open, setOpen] = useState(false);
    const [searchResults, setSearchResults] = useState([])
    const [searching, setSearching] = useState(false);
    const [firstSearchMade, setFirstSearchMade] = useState(false)
    // OBS OBS OBS! if more databases are added, add the names here as well as in the checkboxes on Advanced Sidebar!
    const [advancedOptions, setAdvancedOptions] = useState(["Grundfos A/S", "Nordjyske Medier"])

    const onClick = (searchText) => {
        if (searching === true) return
        if (searchText === "" || advancedOptions.length===0) {
            setSearchResults([])
            return
        }
        setSearching(true)
        fetch("http://localhost:8000/search?input=" + encodeURI(searchText)+"&sources=" + encodeURI(advancedOptions.join(",")))
            .then(response => response.json())
            .then(json => setSearchResults(json.result))
            .catch(e => console.log(e))
            .finally(() => {
                setSearching(false)
                setFirstSearchMade(true)
            })
    }

    return (
        <div className="ContentOfPage">
            <div className="SearchWrapper">
                <div className="SearchBarPlacement">
                    <div className="HeaderDiv">
                        <h1 >Search Contents</h1>
                        <h2 >It is possible to search between multiple datasets of the toolbox!</h2>
                    </div>
                    <div style={{display:'inline-flex',width:"100%"}}>
                    <SearchBar
                        searchText="Enter your search"
                        onClick={onClick}
                        loadingState={searching}
                    />
                    <Button
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                        className="ButtonStyle"
                        style={{height:"5vh"}}
                    >
                        Advanced
                    </Button>
                    </div>
                </div>
            {/*Adds searchResult to the DOM*/}
            <PaginatedSearchResults itemsPerPage={25} searchResults={searchResults} firstSearchMade={firstSearchMade}/>
            </div>
            <AdvancedSidebar open={open} advancedOptions={advancedOptions} setAdvancedOptions={setAdvancedOptions}/>
        </div>

    )
}

Home.propTypes = {

}

export default Home

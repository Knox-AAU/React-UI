import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Collapse from 'react-bootstrap/Collapse'
import StickyBox from "react-sticky-box/dist/esnext";
import SearchBar from './SearchBar';
import { useState } from 'react';


const Home = props => {
    const [open, setOpen] = useState(false);
    const [searchResults, setSearchResults] = useState([{title: "test", text:"test text"}, {title: "test2", text:"test text"}])

    const onClick = (searchText)=>{
        setSearchResults([...searchResults, {title: searchText, text:"test text"}])
    }
    
    return (
    <div style={{display: "flex", width: "100%", alignItems: "stretch"}}>
        <div style={{display: "block", width: "100%"}}>
            
            <div>
                <h1 style={{fontSize:"5em"}}>Search Contents</h1>
                <h2 style={{marginBottom:"1em"}}>It is possible to search between multiple datasets of the toolbox!</h2>
             </div>

        <StickyBox offsetTop={50}>
            <SearchBar
                searchText="Enter your search"
                onClick={onClick}
            />
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                variant="secondary"
            >
                Advanced
            </Button>
        </StickyBox>
        {searchResults.map(result => {
            return (<div className="search-result">
                <h1>{result.title}</h1>
                <h2>{result.text}</h2>
            </div>)
        })}
        </div>
        <div style={{float: "right"}}>
            <Collapse in={open} dimension="width">
                <StickyBox offsetTop={50}>
                    <div id="example-collapse-text">
                        <Card body style={{backgroundColor: "cyan", width: '400px', height: "94vh", position:"sticky"}}>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                            labore wes anderson cred nesciunt sapiente ea proident.
                        </Card>
                    </div>
                </StickyBox>
            </Collapse>
        </div>
    </div>
    )
}
Home.propTypes = {

}

export default Home

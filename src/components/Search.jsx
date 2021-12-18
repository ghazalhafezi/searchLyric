import React, {useState} from "react";
import Music from "./music/music";
import { Button } from 'react-bootstrap';

function Search(){

    const [list, setList] = useState([]);
    const [searchResult, setSearchResult] = useState(false);

    const searchHandler = (event) => {
        let musicName = event.target.value;
        
        fetch(`https://api.lyrics.ovh/suggest/${musicName}` )
        .then(res => res.json())
        .then(
            (result) => {
            setList(result.data);
            setSearchResult(true);
        },
            (error) => {
                setSearchResult(false);
            }
        );
        
    }

    return (
        <div className = 'wrapper'>
            <div className = 'container'>
            <input placeholder = "Enter music" className = 'form-control m-4 form-control-lg' onChange = {searchHandler} type="text" />
            {/* <Button variant="secondary">Search Lyric</Button> */}
            <div className = "result mt-4">
                {searchResult ? <Music list = {list} /> : <span>no result</span>}
            </div>  
            </div>
           

        </div>
    )
}


export default Search;
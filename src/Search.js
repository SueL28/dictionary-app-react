import React, {useState} from "react";
import "./Search.css"
import axios from "axios";
import SearchResponse from "./SearchResponse";
import SearchedImages from "./SearchedImages";


export default function Search (){
    let [keyword, setKeyword] = useState("");
    let [definition, setDefintion] = useState("");
    let [searched, setSearched]= useState(false);
    let [photo, setPhotos] = useState("");


    function getDefinition(response){
        setSearched(true);
        setDefintion(response.data[0]);

    }

    function searchedWord(submit){
        setKeyword(submit.target.value);
    }

    function getImages(response){
        setPhotos(response.data.photos)
    }

    function searchSubmit(event){
        event.preventDefault();
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
        axios.get(apiUrl).then(getDefinition);

        //documentation for api https://dictionaryapi.dev/

        let pexelsApiKey =`563492ad6f91700001000001402cc865227548e5990ed4a4988c48fe`
        let pexelsUrl =`https://api.pexels.com/v1/search?query=${keyword}&per_page=9`
        const headers = {"Authorization": `Bearer ${pexelsApiKey}`}
        axios.get(pexelsUrl, {headers: headers}).then(getImages);
    }

    if (searched){
        
        return(
            <div className="search-container">

            <div className="Search">
                
                <form onSubmit={searchSubmit}>
                    <input type="search" placeholder="Search to Define Word" className="search-bar" autoFocus={true} onChange={searchedWord}/>
                    <input type="submit" value="🔎" className="search-button"/>
                </form>
    
            </div>

                <SearchResponse data={definition}/>

                <SearchedImages data={photo} />

            </div>
        );
    } else {
        return(
            <div className="Search">
                <h4 className="search-heading">Search for a Word</h4>
                <form onSubmit={searchSubmit}>
                    <input type="search" placeholder="Search to Define Word" className="search-bar" autoFocus={true} onChange={searchedWord}/>
                    <input type="submit" value="🔎" className="search-button"/>
                </form>

    
            </div>
        );
    }
}
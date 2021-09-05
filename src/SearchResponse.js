import React from "react";
import "./SearchResponse.css"
import Synonyms from "./Synonyms.js"

import tempImage from "./temp-image.png"

export default function SearchResponse(props){



    if (props.data){
        return(
            <div className="Search-Response">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5 p-0">
                            <h3 className="word text-capitalize">{props.data.word}</h3>  
                        </div>
                        <div className="col-sm-2">
                            <span className="text-capitalize word-type">{props.data.meanings[0].partOfSpeech}</span>
                        </div>
                        <div className="col-sm-5">
                            <span className="pronunciation"><a href={props.data.phonetics[0].audio} target="_blank"><button>🔊</button></a> {props.data.phonetic}</span>
                        </div>
                    </div>
                
    
                </div>
    
                <div className="definition">
                    <h4 className="search-headings">Definition</h4>
    
                    <p className="response">{props.data.meanings[0].definitions[0].definition}</p>
                </div>
                <div className="similar-words">

                    <Synonyms synonyms={props.data.meanings[0].definitions[0].synonyms}/> 
                        
                </div>
                <div className="origin">
                    <h4 className="search-headings">Origin</h4>
    
                    <p className="response">{props.data.origin}</p>
                </div>
                <div className="example">
                    <h4 className="search-headings text-capitalize">{props.data.word} used in an Example</h4>
                    <p className="example-sentence">{props.data.meanings[0].definitions[0].example}</p>
    
                    
    
                    
                </div>
            </div>
        );
 
    } else{
        return(
            <h2>
                Search a Word!
            </h2>
        );
    }
}
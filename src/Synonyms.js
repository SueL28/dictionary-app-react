import React from "react";
import "./Synonyms.css"

export default function Synonyms(props){


    if (props.synonyms){
        return(
            <div className="Synonyms">
            <h4 className="search-headings">Synonyms</h4>
            <div className="synonyms-grouping">
                <div className="container">
                    <div className="row">
                            <ul className="synonyms-word">
                                {props.synonyms.map(function (synonyms,index){
                                    return(
                                    
                                        <li key={index}>
                                        {synonyms}
                                        </li>
                                    
                                            );
                                        })}
                            </ul>

                    </div>
                </div>
            </div>
            </div>
                
        );
    } else {
        return (
            <div>
            <h4 className="search-headings">Synonyms</h4>
                <p>No synonyms</p>
            </div>
        );
    }

    }
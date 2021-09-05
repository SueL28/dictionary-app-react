import React from "react";
import "./Synonyms.css"

export default function Synonyms(props){
    console.log(props.synonyms)

    if (props.synonyms){
        return(
            <div className="Synonyms">
            <h4 className="search-headings">Synonyms</h4>
            <div className="synonyms-groudiv">
                <div className="container">
                    <div className="row">
                            <ul className="synonyms-word">
                        {props.synonyms.map(function (synonyms,index){
                            return(
                            <div className="col-sm-4">
                                <li key={index}>
                                {synonyms}
                                </li>
                            </div>
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
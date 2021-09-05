import React from "react";
import "./Synonyms.css"

export default function Synonyms(props){
    console.log(props.synonyms)

    if (props.synonyms){
        return(
            <div>
            <h4 className="search-headings">Synonyms</h4>
            <p className="synonyms-group">
                <div className="container">
                    <div className="row">
                            <ul className="Synonyms">
                        {props.synonyms.map(function (synonyms,index){
                            return(
                            <div className="col-sm-2">
                                <li key={index}>
                                {synonyms}
                                </li>
                            </div>
                                    );
                                })}
                            </ul>

                    </div>
                </div>
            </p>
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
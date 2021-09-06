import React from "react";
import "./Definition.css";

export default function Definition (props){

    if (props.definition){

        return(
            <div className="Defintions-Container">
                <div className="definition-type">
                    {props.definition.partOfSpeech}
                </div>
                <div className="definition-defined">
                    {props.definition.definitions[0].definition}
                </div>
                <div className="definition-example">
                    {props.definition.definitions[0].example}
                </div>
            </div>
        );
    } else {
        return null;
    }
}
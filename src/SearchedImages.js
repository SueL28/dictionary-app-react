import React from "react";
import "./SearchedImage.css"

export default function SearchedImages(props){
    console.log(props.data)

    if (props.data){

        return(
            <div className="Photos">
                <div className="container">
                    <div className="row">
                        {props.data.map(function(photo, index){
                            return (
                                <div className="col-sm-4" key={index}>
                                    <a href={photo.src.original} target="_blank">
                                    <img src={photo.src.landscape} className="photo img-fluid" alt={props.data.photographer_url}/>
                                    </a>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    } else {
        return null;
    }
    }

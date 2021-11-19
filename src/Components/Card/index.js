import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

function Card(props){
    const { id, img, name} = props;

    return(
        <Link to={`/personagem/${id}`} className="card">
            <img src={img} alt={name} />
           <p> {name}</p>
           {console.log}

        </Link>

    );

}

export default Card;
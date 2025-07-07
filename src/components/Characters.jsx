import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react"; 

const Characters = (props) => {

    const { store, actions } = useContext (context);
    const clicker = () => {
        let check = store.favorites.find((favorites) => favorites.name == props.Characters.name)
        if (!check) {
            actions.addToFavorites (props.Characters.name, props.Characters.uid, "people");
        } else {
            actions.deleteFavorites (props.Characters.name)
        }
    };

    return (
        <div className="card" style={{width: "15rem"}}>
            <img id="characterImg" src="https://lumiere-a.akamaihd.net/v1/images/rey-main_ca4bb0d7.jpeg?region=180%2C0%2C951%2C536" className="card-img-top" alt="..." />
            <div className="card-body">
                <h3 className="card-title">{props.Characters.name}</h3>
                <link to={"/character/" + props.Characters.uid}>
                <button className="btn btn-primary" onClick={()=>{actions.setCurrentCharacterId(props.Characters.uid) }}>Details</button>
                </link>
                <button className="favorite btn btn-warning bi bi-star" onClick={()=> clicker()}></button>
            </div>


        </div>
    )
}
export default Characters;
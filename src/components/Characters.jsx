import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { actions } from "../store";

const Characters = (props) => {
    const { store, dispatch } = useGlobalReducer();

    const clicker = () => {
        let check = store.favorites.find((favorite) => favorite.name === props.character.name);
        if (!check) {
            actions(dispatch).addToFavorites(props.character.name, props.character.uid, "people");
        } else {
            actions(dispatch).deleteFav(props.character.name);
        }
    };

    return (
        <div className="card" style={{ width: "15rem" }}>
            <img id="characterImg" src="https://lumiere-a.akamaihd.net/v1/images/rey-main_ca4bb0d7.jpeg?region=180%2C0%2C951%2C536" className="card-img-top" alt="..." />
            <div className="card-body">
                <h3 className="card-title">{props.character.name}</h3>
                <Link to={"/character/" + props.character.uid}>
                    <button className="btn btn-primary" onClick={() => { actions(dispatch).setCurrentCharacterId(props.character.uid); }}>More Details</button>
                </Link>
               
                <button className="favorite btn btn-warning" onClick={() => clicker()}>
                    &#9733; {/* Unicode Solid Star Symbol */}
                    
                </button>
            </div>
        </div>
    );
};

export default Characters;
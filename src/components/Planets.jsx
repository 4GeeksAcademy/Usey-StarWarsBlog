 import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { actions } from "../store";

const Planets = (props) => {
    const { store, dispatch } = useGlobalReducer();

    const clicker = () => {
        let check = store.favorites.find((favorite) => favorite.name === props.planet.name);
        if (!check) {
            actions(dispatch).addToFavorites(props.planet.name, props.planet.uid, "planets");
        } else {
            actions(dispatch).deleteFav(props.planet.name);
        }
    };

    return (
        <div className="card" style={{ width: "15rem" }}>
            <img id="charImg" src="https://lumiere-a.akamaihd.net/v1/images/aeos-prime-main_1af6e847.jpeg?region=280%2C0%2C720%2C720" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.planet.name}</h5>
                <Link to={"/planet/" + props.planet.uid} className="btn btn-primary">More Details</Link>
                {/* Removed bi bi-star class and added Unicode star */}
                <button className="favorite btn btn-warning" onClick={() => clicker()}>
                    &#9733; {/* Unicode Solid Star Symbol */}
                </button>
            </div>
        </div>
    );
};

export default Planets;
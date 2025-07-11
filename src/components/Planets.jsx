import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer"; // Use the custom hook
import { actions } from "../store/store"; // Import actions from your store

const Planets = (props) => {
    const { store, dispatch } = useGlobalReducer(); // Use the custom hook

    const clicker = () => {
        let check = store.favorites.find((favorite) => favorite.name === props.planet.name);
        if (!check) {
            actions(dispatch).addToFavorites(props.planet.name, props.planet.uid, "planets"); // Ensure type is 'planets'
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
                <button className="favorite btn btn-warning bi bi-star" onClick={() => clicker()}></button>
            </div>
        </div>
    );
};

export default Planets;
 // src/components/PlanetsCard.jsx
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { actions } from "../store";

const PlanetsCard = () => { // Changed component name to PlanetsCard
    const { store, dispatch } = useGlobalReducer();
    const params = useParams();

    useEffect(() => {
        if (params.uid) {
            actions(dispatch).getPlanetData(params.uid);
        }
    }, [params.uid, dispatch]);

    return (
        <div id="indivCard" className="card" style={{ width: "50rem" }}>
            <div id="cardTop">
                <div id="characterPhoto">
                    <img src="https://lumiere-a.akamaihd.net/v1/images/aeos-prime-main_1af6e847.jpeg?region=280%2C0%2C720%2C720" className="card-img-top" alt="..." />
                </div>
                <div id="cardTopText" className="card-body">
                    <h5 className="card-title">{store.planetData.name || "Loading..."}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div id="traitList">
                <div className="trait">
                    <div>Name:</div>
                    <div>{store.planetData.name || "N/A"}</div>
                </div>
                <div className="trait">
                    <div>Climate:</div>
                    <div>{store.planetData.climate || "N/A"}</div>
                </div>
                <div className="trait">
                    <div>Population:</div>
                    <div>{store.planetData.population || "N/A"}</div>
                </div>
                <div className="trait">
                    <div>Orbital Period:</div>
                    <div>{store.planetData.orbital_period || "N/A"}</div>
                </div>
                <div className="trait">
                    <div>Rotation Period:</div>
                    <div>{store.planetData.rotation_period || "N/A"}</div>
                </div>
                <div className="trait">
                    <div>Diameter:</div>
                    <div>{store.planetData.diameter || "N/A"}</div>
                </div>
            </div>
        </div>
    );
};

export default PlanetsCard; // Changed export name to PlanetsCard
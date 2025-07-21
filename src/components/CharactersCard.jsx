import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { actions } from "../store";

const CharactersCard = () => { 
    const { store, dispatch } = useGlobalReducer();
    const params = useParams();

    useEffect(() => {
        // Use params.uid directly for fetching character data
        if (params.uid) {
            actions(dispatch).getCharacterData(params.uid);
        }
    }, [params.uid, dispatch]);

    return (
        <div id="indivCard" className="card" style={{ width: "50rem" }}>
            <div id="cardTop">
                <div id="characterPhoto">
                    <img src="https://lumiere-a.akamaihd.net/v1/images/boba-fett-main_a8fade4d.jpeg?region=311%2C0%2C853%2C853" className="card-img-top" alt="..." />
                </div>
                <div id="cardTopText" className="card-body">
                    <h5 className="card-title">{store.characterData.name || "Loading..."}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div id="traitList">
                <div className="trait">
                    <div>Name:</div>
                    <div>{store.characterData.name || "N/A"}</div>
                </div>
                <div className="trait">
                    <div>Birth Year:</div>
                    <div>{store.characterData.birth_year || "N/A"}</div>
                </div>
                <div className="trait">
                    <div>Gender:</div>
                    <div>{store.characterData.gender || "N/A"}</div>
                </div>
                <div className="trait">
                    <div>Height:</div>
                    <div>{store.characterData.height || "N/A"}</div>
                </div>
                <div className="trait">
                    <div>Skin Color:</div>
                    <div>{store.characterData.skin_color || "N/A"}</div>
                </div>
                <div className="trait">
                    <div>Eye Color:</div>
                    <div>{store.characterData.eye_color || "N/A"}</div>
                </div>
            </div>
        </div>
    );
};
export default CharactersCard; 
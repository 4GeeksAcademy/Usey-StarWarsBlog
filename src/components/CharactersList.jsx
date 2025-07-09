import React, { useState, useEffect } from "react";
import Characters from "./Characters.jsx"; // This is for individual character list items
import useGlobalReducer from "../hooks/useGlobalReducer";
import { actions } from "../store/store";

const CharactersList = () => {
    const { store, dispatch } = useGlobalReducer();

    useEffect(() => {
        actions(dispatch).getCharacters();
    }, [dispatch]);

    return (
        <div>
            <div className="title">Characters</div>
            <div className="container">
                <div className="characterList scroller">
                    {store.characterList?.map((character, index) => {
                        return (
                            <Characters character={character} key={index} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default CharactersList;
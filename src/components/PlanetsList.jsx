import React, { useEffect } from "react";
import Planets from "./Planets.jsx"; // This is for individual planet list items
import useGlobalReducer from "../hooks/useGlobalReducer";
import { actions } from "../store/store";

const PlanetsList = () => {
    const { store, dispatch } = useGlobalReducer();

    useEffect(() => {
        actions(dispatch).getPlanets();
    }, [dispatch]);

    return (
        <div>
            <div className="title">Planets</div>
            <div className="container">
                <div className="planetList scroller">
                    {store.planetList?.map((planet, index) => {
                        return (
                            <Planets planet={planet} key={index} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default PlanetsList;
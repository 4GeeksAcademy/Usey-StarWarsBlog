 // src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer"; // Correct path: ../hooks/
import { actions } from "../store/store"; // FIX: This was the problematic path. It should be ../store/store (from components to store)

export const Navbar = () => {
    const { store, dispatch } = useGlobalReducer();

    return (
        <nav className="navbar navbar-light bg-light mb-3">
            <Link to="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/75px-Star_Wars_Logo.svg.png" alt="Star Wars Logo" />
            </Link>
            <div id="dropDown" className="nav-item dropdown dropright">
                <a className="nav-link dropdown-toggle btn btn-primary" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: "white" }}>
                    Favorites ({store.favorites.length})
                </a>
                <ul className="dropdown-menu dropdown-menu-right">
                    {store.favorites.length === 0 ? (
                        <li className="dropdown-item">No favorites yet!</li>
                    ) : (
                        store.favorites.map((favorite) => {
                            return (
                                <li id="favItem" key={favorite.uid + favorite.type} className="dropdown-item d-flex justify-content-between align-items-center">
                                    <Link to={`/${favorite.type === 'people' ? 'character' : 'planet'}/${favorite.uid}`} className="text-decoration-none text-dark">
                                        {favorite.name}
                                    </Link>
                                    <button
                                        id="delete"
                                        className="btn btn-danger btn-sm ml-2"
                                        onClick={() => { actions(dispatch).deleteFav(favorite.name); }}
                                    >
                                        <i className="bi bi-trash-fill"></i>
                                    </button>
                                </li>
                            );
                        })
                    )}
                </ul>
            </div>
        </nav>
    );
};
 export const initialStore = () => {
    return {
        characterList: [],
        planetList: [],
        favorites: [],
        currentCharacterId: null,
        characterData: {},
        planetData: {},
        message: null,
        todos: [ // Your existing todos, though not used in the Star Wars part
            {
                id: 1,
                title: "Make the bed",
                background: null,
            },
            {
                id: 2,
                title: "Do my homework",
                background: null,
            }
        ]
    };
};

export default function storeReducer(store, action = {}) {
    switch (action.type) {
        case 'set_characters':
            return { ...store, characterList: action.payload };
        case 'set_planets':
            return { ...store, planetList: action.payload };
        case 'add_to_favorites':
            // Check if item already exists to prevent duplicates
            if (!store.favorites.find(fav => fav.uid === action.payload.uid && fav.type === action.payload.type)) {
                return { ...store, favorites: [...store.favorites, action.payload] };
            }
            return store;
        case 'delete_favorite':
            return { ...store, favorites: store.favorites.filter(fav => fav.name !== action.payload) };
        case 'set_current_character_id':
            return { ...store, currentCharacterId: action.payload };
        case 'set_character_data':
            return { ...store, characterData: action.payload };
        case 'set_current_planet_id': // Added for consistency, though not explicitly used in current Planets component
            return { ...store, currentPlanetId: action.payload };
        case 'set_planet_data':
            return { ...store, planetData: action.payload };
        case 'add_task': // Your existing todo action
            const { id, color } = action.payload
            return {
                ...store,
                todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
            };
        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
}

// Actions (Helper functions to dispatch actions)
// These should be called from your components using `dispatch`
export const actions = (dispatch) => ({
    getCharacters: async () => {
        try {
            const response = await fetch("https://www.swapi.tech/api/people/");
            if (!response.ok) throw new Error("Failed to fetch characters");
            const data = await response.json();
            dispatch({ type: 'set_characters', payload: data.results });
        } catch (error) {
            console.error("Error fetching characters:", error);
        }
    },
    getPlanets: async () => {
        try {
            const response = await fetch("https://www.swapi.tech/api/planets/");
            if (!response.ok) throw new Error("Failed to fetch planets");
            const data = await response.json();
            dispatch({ type: 'set_planets', payload: data.results });
        } catch (error) {
            console.error("Error fetching planets:", error);
        }
    },
    getCharacterData: async (uid) => {
        try {
            const response = await fetch(`https://www.swapi.tech/api/people/${uid}`);
            if (!response.ok) throw new Error("Failed to fetch character data");
            const data = await response.json();
            dispatch({ type: 'set_character_data', payload: data.result.properties });
        } catch (error) {
            console.error("Error fetching character data:", error);
        }
    },
    getPlanetData: async (uid) => {
        try {
            const response = await fetch(`https://www.swapi.tech/api/planets/${uid}`);
            if (!response.ok) throw new Error("Failed to fetch planet data");
            const data = await response.json();
            dispatch({ type: 'set_planet_data', payload: data.result.properties });
        } catch (error) {
            console.error("Error fetching planet data:", error);
        }
    },
    addToFavorites: (name, uid, type) => {
        dispatch({ type: 'add_to_favorites', payload: { name, uid, type } });
    },
    deleteFav: (name) => { // Renamed from deleteFavorites for consistency with Navbar
        dispatch({ type: 'delete_favorite', payload: name });
    },
    setCurrentCharacterId: (id) => {
        dispatch({ type: 'set_current_character_id', payload: id });
    },
    setCurrentPlanetId: (id) => { // Added for consistency
        dispatch({ type: 'set_current_planet_id', payload: id });
    }
});
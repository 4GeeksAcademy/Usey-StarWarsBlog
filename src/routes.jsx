import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout"; 
import { Home } from "./pages/Home";     


import CharacterCard from "./components/CharacterCard.jsx";
import PlanetsCard from "./components/PlanetsCard.jsx";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>}>
            <Route index element={<Home />} />
            <Route path="/character/:uid" element={<CharacterCard />} />
            <Route path="/planet/:uid" element={<PlanetsCard />} />
            {/* If you have Single or Demo pages uncomment these and ensure they exist */}
            {/* <Route path="/single/:theId" element={<Single />} /> */}
            {/* <Route path="/demo" element={<Demo />} /> */}
        </Route>
    )
);
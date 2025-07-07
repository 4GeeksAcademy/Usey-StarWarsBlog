import { Outlet } from "react-router-dom/dist"
import ScrollToTop from "../components/ScrollToTop"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"

// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Layout = () => {

    const [ favorites, setFavorites ] = useState ([])

    const addToFavorites = (name, uid, type) => {
        let newFavorite = {name:name, uid:uid, type:type}
        setFavorites([...favorites, newFavorite])
    }

    return (
        <ScrollToTop>
            <Navbar />
                <Outlet>
                    <
                </Outlet>
            <Footer />
        </ScrollToTop>
    )
}
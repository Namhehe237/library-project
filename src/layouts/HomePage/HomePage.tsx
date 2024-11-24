import { Footer } from "../navbarAndFooter/Footer";
import { NavBar } from "../navbarAndFooter/NavBar";
import { Carousel } from "./Components/Carousel";
import { ExploreTopBook } from "./Components/ExploreTopBook";
import { Heros } from "./Components/Heros";
import { LibraryServices } from "./Components/LibraryServices";

export const HomePage = () => {
    return (
        <div>
            <ExploreTopBook />
            <Carousel />
            <Heros />
            <LibraryServices />
        </div>
    );
}
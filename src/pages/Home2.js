import { useState } from "react";
import MovieList from "./../components/MovieList";
import Navigation from "./../components/Navigation";
import Footer from "./../components/Footer";
import Sidebar from "../components/Sidebar";

const Home2 = () => {
    const [change, setChange] = useState("");
    const handleOnChange = (elt) => {
        setChange(elt.target.value);
    };

    return (
        <div id="outer-container">
            <div id="page-wrap">
                <Sidebar
                    pageWrapId={"page-wrap"}
                    outerContainerId={"outer-cobtainer"}
                />
                <Navigation onChange={handleOnChange} />
                <MovieList change={change} />
                <Footer />
            </div>
        </div>
    );
};

export default Home2;
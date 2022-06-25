import { useState } from "react";
import MovieList from "./../components/MovieList";
import Navigation from "./../components/Navigation";
import Footer from "./../components/Footer";
import Sidebar from "../components/Sidebar";
import intro2 from "./../videos/intro.mp4";
import ReactPlayer from "react-player";

const Home = () => {
    const [intro, setIntro] = useState(true);

    window.setTimeout(function () {
        setIntro(false);
    }, 5700);

    const [change, setChange] = useState("");
    const handleOnChange = (elt) => {
        setChange(elt.target.value);
    };

    return (
        <div>
            {intro && (
                <div className="landingpage">
                    <ReactPlayer
                        muted
                        playing={true}
                        url={intro2}
                        width={1280}
                        height={720}
                        controls={false}
                        autoPlay={true}
                    />
                </div>
            )}
            {!intro && (
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
            )}
        </div>
    );
};

export default Home;
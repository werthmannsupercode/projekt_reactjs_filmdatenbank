import { useState, useEffect } from "react";
import MovieItem from "./MovieItem";
import NavigationDetails from "./NavigationDetails";
import Sidebar from "../components/Sidebar";
import Footer from "./Footer";

const Upcoming = () => {
    const [upComing, setUpcoming] = useState([]);

    useEffect(() => {
        const apiKey = `80fc0be7bcb18707550c86f288ec17fe`;
        fetch(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=de-DE&page=1`
        )
            .then((response) => response.json())
            .then((json) => setUpcoming(json.results));
    }, []);

    return (
        <div id="outer-container">
            <div id="page-wrap">
                <Sidebar />
                <NavigationDetails />
                <main className="main">
                    <h1>Neuerscheinungen</h1>
                    <div className="movie-list">
                        {upComing.map((elt, i) => {
                            return (
                                <MovieItem
                                    key={elt.id}
                                    id={elt.id}
                                    title={elt.title}
                                    year={elt.release_date}
                                    img={elt.poster_path}
                                />
                            );
                        })}
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default Upcoming;
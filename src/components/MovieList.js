import { useState, useEffect } from "react";
import MovieItem from "./MovieItem";

const MovieList = (props) => {
    const [details, setDetails] = useState([]);

    useEffect(() => {
        const apiKey = `80fc0be7bcb18707550c86f288ec17fe`;
        // 2nd apiKey: f609f173487177fd0f9d5d8e5193e2fe
        let link;
        if (props.change) {
            link = `https://api.themoviedb.org/3/search/movie?&query=${props.change}&api_key=${apiKey}&language=de-DE&page=1&include_adult=false`;
        } else {
            link = `https://api.themoviedb.org/4/list/8207676?page=1&api_key=${apiKey}&language=de-DE&append_to_response=videos,images`;
        }
        fetch(link)
            .then((response) => response.json())
            .then((data) => {
                setDetails(data.results);
            });
    }, [props.change]);

    if (props.change) {
        return (
            <main className="main">
                <h1>Ihre Suche</h1>
                <div className="movie-list">
                    {details.map((elt, i) => {
                        return (
                            <MovieItem
                                key={elt.id}
                                id={elt.id}
                                title={elt.title}
                                year={elt.release_date?.slice(0, 4)}
                                img={elt.poster_path}
                            />
                        );
                    })}
                </div>
            </main>
        );
    } else {
        return (
            <main className="main">
                <h1>Die 20 besten Filme aller Zeiten</h1>
                <div className="movie-list">
                    {details.map((elt, i) => {
                        return (
                            <MovieItem
                                key={elt.id}
                                id={elt.id}
                                title={elt.title}
                                year={elt.release_date?.slice(0, 4)}
                                img={elt.poster_path}
                            />
                        );
                    })}
                </div>
            </main>
        );
    }
};
export default MovieList;
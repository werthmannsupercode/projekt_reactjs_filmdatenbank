import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Trailer from "./Trailer";
import Genres from "./Genres";
import NavigationDetails from "./NavigationDetails";
import Footer from "./Footer";

const Details = () => {
    const { id } = useParams();
    const [details, setDetails] = useState([]);

    useEffect(() => {
        const apiKey = `80fc0be7bcb18707550c86f288ec17fe`;
        fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=de-DE`
        )
            .then((response) => response.json())
            .then((json) => setDetails(json));
    }, [id]);

    if (details.success === false) {
        return (
            <div>
                <div>
                    <NavigationDetails />
                    <p>Leider keine Details</p>
                    <img
                        src="https://images.unsplash.com/photo-1604975701397-6365ccbd028a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2835&q=80"
                        alt="Foto zum Film"
                    />
                </div>
                <div className="linkContainer">
                    <Link className="link" to="/home">
                        Zurück zur Auswahl
                    </Link>
                </div>
            </div>
        );
    } else if (details.poster_path == null) {
        return (
            <div>
                <NavigationDetails />
                <section className="detailSite">
                    <h2>{details.title}</h2>
                    <div className="detailWrapper">
                        <div className="detailImg">
                            <img
                                src={`https://cdn.discordapp.com/attachments/988351130201362432/989072612938375189/Fallback_Film_0.png.jpg`}
                                alt="Foto zum Film"
                            />
                        </div>
                        <div className="description">
                            <div className="grid-movielist">
                                <div className="releaseDate">
                                    <h3>Erscheinungsdatum:</h3>
                                </div>
                                <div className="releaseDateDetails">
                                    <p>{details.release_date}</p>
                                </div>
                                <div className="genre">
                                    <h3>Genres:</h3>{" "}
                                </div>
                                <div className="genreDetails">
                                    <Genres />
                                </div>
                                <div className="originalTitle">
                                    <h3>Original Titel:</h3>
                                </div>
                                <div className="originalTitleDetails">
                                    <p>{details.original_title}</p>
                                </div>
                                <div className="overView">
                                    <h3>Überblick:</h3>
                                </div>
                                <div className="overViewDetails">
                                    <p>{details.overview}</p>{" "}
                                </div>
                                <div className="rating">
                                    <h3>ø Bewertung:</h3>
                                </div>
                                <div className="ratingDetails">
                                    <p>{details.vote_average}</p>
                                </div>
                            </div>
                            <div>
                                <Trailer />
                            </div>
                        </div>
                    </div>
                    <div className="linkContainer">
                        <Link className="link" to="/">
                            Zurück zur Auswahl
                        </Link>
                    </div>
                    <div className="gridPhone">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
                            alt="Foto zum Film"
                        />
                        <div>
                            <h3>Erscheinungsdatum:</h3>
                        </div>
                        <div>
                            <p>{details.release_date}</p>
                        </div>
                        <div>
                            <h3>Genres:</h3>{" "}
                        </div>
                        <div>
                            <Genres />
                        </div>
                        <div>
                            <h3>Original Titel:</h3>
                        </div>
                        <div>
                            <p>{details.original_title}</p>
                        </div>
                        <div>
                            <h3>Überblick:</h3>
                        </div>
                        <div>
                            <p>{details.overview}</p>{" "}
                        </div>
                        <div>
                            <h3>ø Bewertung:</h3>
                        </div>
                        <div>
                            <p>{details.vote_average}</p>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        );
    } else {
        return (
            <div>
                <NavigationDetails />
                <section className="detailSite">
                    <h2>{details.title}</h2>
                    <div className="detailWrapper">
                        <div className="detailImg">
                            <img
                                src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
                                alt="Foto zum Film"
                            />
                        </div>
                        <div className="description">
                            <div className="grid-movielist">
                                <div className="releaseDate">
                                    <h3>Erscheinungsdatum:</h3>
                                </div>
                                <div className="releaseDateDetails">
                                    <p>{details.release_date}</p>
                                </div>
                                <div className="genre">
                                    <h3>Genres:</h3>{" "}
                                </div>
                                <div className="genreDetails">
                                    <Genres />
                                </div>
                                <div className="originalTitle">
                                    <h3>Original Titel:</h3>
                                </div>
                                <div className="originalTitleDetails">
                                    <p>{details.original_title}</p>
                                </div>
                                <div className="overView">
                                    <h3>Überblick:</h3>
                                </div>
                                <div className="overViewDetails">
                                    <p>{details.overview}</p>{" "}
                                </div>
                                <div className="rating">
                                    <h3>ø Bewertung:</h3>
                                </div>
                                <div className="ratingDetails">
                                    <p>{details.vote_average}</p>
                                </div>
                            </div>
                            <div>
                                <Trailer />
                            </div>
                        </div>
                    </div>
                    <div className="linkContainer">
                        <Link className="link" to="/home">
                            Zurück zur Auswahl
                        </Link>
                    </div>
                    <div className="gridPhone">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
                            alt="Foto zum Film"
                        />
                        <div>
                            <h3>Erscheinungsdatum:</h3>
                        </div>
                        <div>
                            <p>{details.release_date}</p>
                        </div>
                        <div>
                            <h3>Genres:</h3>{" "}
                        </div>
                        <div>
                            <Genres />
                        </div>
                        <div>
                            <h3>Original Titel:</h3>
                        </div>
                        <div>
                            <p>{details.original_title}</p>
                        </div>
                        <div>
                            <h3>Überblick:</h3>
                        </div>
                        <div>
                            <p>{details.overview}</p>{" "}
                        </div>
                        <div>
                            <h3>ø Bewertung:</h3>
                        </div>
                        <div>
                            <p>{details.vote_average}</p>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
};

export default Details;
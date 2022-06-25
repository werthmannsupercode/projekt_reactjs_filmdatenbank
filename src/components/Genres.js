import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Genres = () => {
    const { id } = useParams();
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const apiKey = `80fc0be7bcb18707550c86f288ec17fe`;
        fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=de-DE`
        )
            .then((response) => response.json())
            .then((json) => setGenres(json.genres));
    }, [id]);

    return (
        <div>
            {genres.map((elt, i) => (
                <ul key={i}>
                    <li>{elt.name}</li>
                </ul>
            ))}
        </div>
    );
};

export default Genres;

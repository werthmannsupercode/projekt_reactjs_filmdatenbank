import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Trailer = () => {
    const { id } = useParams();
    const [trailer, setTrailer] = useState([]);

    useEffect(() => {
        const apiKey = `80fc0be7bcb18707550c86f288ec17fe`;
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?&api_key=${apiKey}`)
            .then((response) => response.json())
            .then((json) => setTrailer(json.results));
    }, [id]);

    return (
        <div>
            <div>
                {/* eslint-disable-next-line */}
                {trailer.map((elt, i) => {
                    if (
                        (elt.type === "Trailer" && elt.name === "Official Trailer") ||
                        elt.name === "Trailer"
                    ) {
                        return (
                            <div key={i} className="trailer">
                                <h3>Trailer</h3>
                                <iframe
                                    className="trailerWrapper"
                                    width="560"
                                    height="315"
                                    src={`https://www.youtube.com/embed/${elt.key}?vq=hd1080`}
                                    title="Trailer Player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope;"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default Trailer;
import { Link } from "react-router-dom";

const MovieItem = (props) => {
    if (props.img == null) {
        return (
            <div className="moviecard">
                <Link to={`/details/${props.id}`}>
                    <img
                        src={`https://images.unsplash.com/photo-1604975701397-6365ccbd028a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2835&q=80`}
                        alt="Bild des Films"
                        className="placeholderimg"
                    />
                    <h2>{props.title}</h2>
                    <p>{props.year}</p>
                </Link>
            </div>
        );
    } else {
        return (
            <div className="moviecard">
                <Link to={`/details/${props.id}`}>
                    <img
                        src={`https://image.tmdb.org/t/p/w500${props.img}`}
                        alt="Bild des Films"
                        className="placeholderimg"
                    />
                    <h2>{props.title}</h2>
                    <p>{props.year}</p>
                </Link>
            </div>
        );
    }
};

export default MovieItem;
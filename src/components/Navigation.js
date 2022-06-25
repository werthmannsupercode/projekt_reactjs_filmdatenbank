import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Navigation = (props) => {
    const [input, setInput] = useState("");

    useEffect(() => {
        if (input.length > 1) {
            fetch(
                `https://api.themoviedb.org/3/search/movie?&query=${input}&api_key=f609f173487177fd0f9d5d8e5193e2fe&language=de-DE&page=1&include_adult=false`
            )
                .then((res) => res.json())
                .then((data) => {
                    setInput([data]);
                });
        }
    }, [input]);

    return (
        <div className="navigation">
            <Link to={`/home `} className="headerLink">
                <h1>
                    <span>.</span>MOWEE
                </h1>
            </Link>
            <div className="searchbar">
                <input
                    type="text"
                    name="search"
                    id="searchbar"
                    placeholder="MoWee eingeben"
                    onChange={props.onChange}
                />
                <FontAwesomeIcon className="glass" icon={faMagnifyingGlass} />
            </div>
        </div>
    );
};

export default Navigation;
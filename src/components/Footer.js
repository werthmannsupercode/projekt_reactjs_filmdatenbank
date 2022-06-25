import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import tmbdlogo from "../images/logo_the_movie_db.svg";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <Link to={`/home `} className="headerLink">
                <h1>
                    <span>.</span>MOWEE
                </h1>
            </Link>
            {/* eslint-disable-next-line */}
            <Link to={`/imprint `}>
                <p className="ImprintLnk">Imprint</p>
            </Link>
            <div>
                {/* eslint-disable-next-line */}
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/_moweedatabse/"
                >
                    <FontAwesomeIcon className="insta" icon={faInstagram} />
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.themoviedb.org/">
                    <FontAwesomeIcon className="fbook" icon={faFacebookF} />
                </a>
            </div>
            <a
                target="_blank"
                rel="noreferrer"
                href="https://www.themoviedb.org/"
                className="tmdblogo"
            >
                <img className="tmdbpic" src={tmbdlogo} alt="TmDB Logo" />
            </a>
        </footer>
    );
};

export default Footer;
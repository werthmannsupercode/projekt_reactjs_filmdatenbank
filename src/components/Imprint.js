import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faFigma } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import NavigationDetails from "./NavigationDetails";
import Footer from "./Footer";

const Imprint = () => {
    return (
        <div className="ImprintContainer">
            <NavigationDetails />
            <div className="Imprint">
                <h1 className="ImprintHeadline">Imprint</h1>
                <div>
                    <h2 className="teamHeadline">Team:</h2>
                    <div className="Team">
                        <div>
                            <p>Alex</p>
                            <p>Design,CSS</p>
                        </div>
                        <div>
                            <p>Emre</p>
                            <p>Marketing</p>
                        </div>
                        <div>
                            <p>Michaela</p>
                            <p>Organisation</p>
                        </div>
                        <div>
                            <p>Pascal</p>
                            <p>Technical Lead, React JS</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="teamHeadline">Technologien:</h2>
                    <div>
                        <FontAwesomeIcon icon={faHtml5} className="icontechnologies" />
                        <FontAwesomeIcon icon={faCss3} className="icontechnologies" />
                        <FontAwesomeIcon icon={faReact} className="icontechnologies" />
                        <FontAwesomeIcon icon={faFigma} className="icontechnologies" />
                        <FontAwesomeIcon icon={faGithub} className="icontechnologies" />
                    </div>
                </div>
                <div>
                    <p className="imprinttext">
                        Diese Webseite wurde erstellt als Frontend-Abschlussprojekt im
                        Bootcamp "Fullstack Webdevelopment" von SuperCode GmbH & Co.KG,
                        Düsseldorf
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Imprint;
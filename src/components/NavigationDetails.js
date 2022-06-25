import { Link } from "react-router-dom";

const NavigationDetails = (props) => {
    return (
        <div className="navigation">
            <Link to={`/home `} className="headerLink">
                <h1>
                    <span>.</span>MOWEE
                </h1>
            </Link>
        </div>
    );
};

export default NavigationDetails;

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import './ButtonBack.css';
export const ButtonBack = () => {
  return (
    <div className="btn-section">
      <Link to="/" className="btn-back" >
        <FontAwesomeIcon icon={faArrowLeft} />
        <span>Back</span>
      </Link>
    </div>
  );
};

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicroscope,
  faSnowflake,
  faGraduationCap,
  faBusinessTime,
} from "@fortawesome/free-solid-svg-icons";

function InfoBlockSection() {
  return (
    <>
      <div className="info-blocks">
        <div className="info-block">
          <div className="icon">
            <FontAwesomeIcon icon={faSnowflake} />
          </div>
          <h3>Symptoms</h3>

          <p>What is autism and how to tell if a child has autism?</p>
          <a href="#" className="show-more">
            Show more ...
          </a>
        </div>

        <div className="info-block">
          <div className="icon">
            <FontAwesomeIcon icon={faMicroscope} />
          </div>
          <h3>Diagnosis</h3>

          <p>How to get a diagnosis for children showing autism symptoms?</p>
          <a href="#" className="show-more">
            Show more ...
          </a>
        </div>

        <div className="info-block">
          <div className="icon">
            <FontAwesomeIcon icon={faGraduationCap} />
          </div>

          <h3>Educational Supports</h3>
          <p>How to help an autistic child as a parent or a teacher?</p>
          <a href="#" className="show-more">
            Show more ...
          </a>
        </div>

        <div className="info-block">
          <div className="icon">
            <FontAwesomeIcon icon={faBusinessTime} />
          </div>

          <h3>Service Providers</h3>
          <p>
            Service providers providing all kinds of service to help autistic
            children
          </p>
          <a href="#" className="show-more">
            Show more ...
          </a>
        </div>
      </div>
    </>
  );
}

export default InfoBlockSection;

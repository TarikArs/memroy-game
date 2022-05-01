import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Stepper.css";
export default function Stepper() {
  return (
    <div className="stepper-container">
      <div>
        <div>1</div>
        <div>1:15</div>
        <div>
          <div>
            <FontAwesomeIcon icon={faTrophy} /> 34%
          </div>
        </div>
      </div>
      <div>
        <div>2</div>
        <div>0:15</div>
        <div>
          <div>
            <FontAwesomeIcon icon={faTrophy} /> 30%
          </div>
        </div>
      </div>
    </div>
  );
}

import { Button } from "react-bootstrap";
import "./Result.css";
export default function Result({ status, onRetry, onNext }) {
  return (
    <div className="result-container d-flex justify-content-center align-items-center flex-column">
      <div>
        <h3>{status ? "You win" : "You Lose"} </h3>
      </div>
      <div className="buttons">
        {status && (
          <Button variant="primary" onClick={onNext}>
            Next Level
          </Button>
        )}
        <Button variant="primary" onClick={onRetry}>
          Retry
        </Button>
      </div>
    </div>
  );
}

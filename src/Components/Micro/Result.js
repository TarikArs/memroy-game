import { Button } from "react-bootstrap";
import "./Result.css";
export default function Result({ status, cardsLength, onRetry, onNext }) {
  return (
    <div className="result-container d-flex justify-content-center align-items-center flex-column">
      {
        status ? <div className="d-flex justify-content-center align-items-center flex-column">
          <img src="/img/happy.png" alt="sad" width="50" />
          <h3>Congrats ! You win</h3>
        </div> : <div className="d-flex justify-content-center align-items-center flex-column">
          <img src="/img/sad.png" alt="sad" width="50" />
          <h3>Sorry ! Maybe next time</h3>
        </div>
      }
      <div className="buttons">
        {status && cardsLength > 0 && (
          <Button variant="primary" className="nextLevel" onClick={onNext}>
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

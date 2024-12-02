import { range } from './utils';
import './index.css';

function Grid({ numRows, numCols }) {
  return (
    <div
      className="grid"
      style={{
        gridTemplateColumns: `repeat(${numCols}, 100px)`, 
      }}
    >
      {range(numRows).map((rowIndex) =>
        range(numCols).map((colIndex) => (
          <div key={`row-${rowIndex}-col-${colIndex}`} className="cell">
        
          </div>
        ))
      )}
    </div>
  );
}

export default Grid;

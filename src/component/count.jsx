import { useState } from "react";
import React  from 'react';

function Counter(props) {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container my-5">
        <div className="card text-center my-5">
          <div className="card-body">
            <h2>Counter App</h2>
            <div className="my-5">
              <h3 className="my-5">{count}</h3>
              <button
                class="btn btn-primary mx-3"
                onClick={() => setCount(count + 1)}
                disabled={count === 20}
              >
                Increment
              </button>
              <button
                class="btn btn-warning mx-3"
                onClick={() => setCount(count - 1)}
                disabled={count === 0}
              >
                Decrement
              </button>
              <button class="btn btn-danger mx-3" onClick={() => setCount(0)}>
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Counter;

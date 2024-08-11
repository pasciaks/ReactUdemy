import React from 'react';

function counterReducer(state,action) {
    if (action.type==="INCREMENT") {
        return {
            ...state,
            count: state.count+1
        }
    }
    
    if (action.type==="DECREMENT") {
        return {
            ...state,
            count: state.count-1
        }
    }
    
    return {
        ...state,
        count: state.count
    }
}

function App() {
    const [countState, countStateDispatch] = React.useReducer(counterReducer,
   {
    count: 0;
    } 
  );
  
  function add(){
    countStateDispatch({
        type: "INCREMENT",
        payload: null,
    });
  }
  
  function subtract(){
    countStateDispatch({
        type: "DECREMENT",
        payload: null,
    });
  }
  
  return (
    <div id="app">
      <h1>The (Final?) Counter</h1>
      <p id="actions">
        <button onClick={add}>Increment</button>
        <button onClick={subtract}>Decrement</button>
        <button>Reset</button>
      </p>
      <p id="counter"></p>
    </div>
  );
}

export default App;

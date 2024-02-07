import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value));
    //inputRef.current.value = 0;
    inputRef.current.focus();
    
  }; 
 
  function minus(e) { 
    e.preventDefault(); 
    setResult((result) => result - Number(inputRef.current.value)); 
    //inputRef.current.value = null;
    inputRef.current.focus();
    
  };
 
  function times(e) { 
    e.preventDefault(); 
    setResult((result) => result * Number(inputRef.current.value)); 
    //inputRef.current.value = null;
    inputRef.current.focus();
    
  }; 
 
  function divide(e) { 
    e.preventDefault();
    if (Number(inputRef.current.value) === 0) {
      alert("You are dividing by 0. Please check your input.")
      inputRef.current.focus();
    } else {
      setResult((result) => result / Number(inputRef.current.value));
      //inputRef.current.value = null;
      inputRef.current.focus();
      
    }
  };
 
  function resetInput(e) { 
    e.preventDefault(); 
    inputRef.current.value = null;
    inputRef.current.focus();
  }; 
 
  function resetResult(e) { 
  	e.preventDefault(); 
    setResult(0);
    //resultRef.current.value = 0;
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          <h3>{"Result = " + result} </h3>
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>Add(+)</button> 
        <button onClick={minus}>Subtract(-)</button> 
        <button onClick={times}>Multiply(x)</button> 
        <button onClick={divide}>Divide(/)</button> 
        <button onClick={resetInput}>Reset Input</button> 
        <button onClick={resetResult}>Reset Result</button> 
      </form> 
    </div> 
  ); 
} 
 
export default App; 

// import logo from './logo.svg';
// import './App.css';


// function App() {
//   return (
//     <div className="App">
    
//     </div>
//   );
// }

// export default App;


import './App.css';
import { useState } from "react";
import { Todo } from './Components/Todo/Todo';
import { Grocery } from './Components/Grocery/Grocery';

function App() {
  // V-Dom
  const [ counter, setCounter ] = useState(0);

  return (
    <div className="App">
      {/* <h3>Counter : {counter}</h3>
      <button onClick={() => {setCounter(counter + 1)}}>Add 1</button> */}
      {/* <Left fn = {getData}/> */}
      {/* <Right data={counter}/> */}
      <Todo />
      <Grocery />
      
    </div>
  );
}

function Left({ fn }) {
  const counter = 10;
  fn( counter );
  return (<div> Left Value : </div>)
}

function Right(  counter ) {
  return (<div> Right : {counter.data} </div>)
}


export default App;

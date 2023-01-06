import { useState } from "react";
import TopContainer from "./components/TopContainer/TopContainer";
import TodoContainer from "./components/Todo/TodoContainer";


function App() {

  const [ show, setShow ] = useState(false)

  const clickedhandler = () => {

     setShow( prev => {
       return !prev;
     })

     document.body.classList.toggle("dark");
  
  }

  return (
    <div>
     <TopContainer 
      show={show}
     />
     <TodoContainer 
      show={show}
      clicked={clickedhandler}
     />
    </div>
  );
}

export default App;

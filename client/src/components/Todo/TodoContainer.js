import TodoTopBar  from "./TodoBar/TodoTopBar";
import InputBox from "./InputBox/InputBox";
import TodoLists from "./TodoLists/TodoLists";
import "./todoContainer.css"
import { useEffect, useState } from "react";
import Axios from "../../axios-todos"
import _uniqueId from 'lodash/uniqueId';




const TodoContainer = (props) => {

  

    const [userInput, setUserInput] = useState({
        title: "",
        completed: false
    })

    const [todoList, setList] = useState([]);

    const [errMsg, setErrMsg] = useState(false);
    const [todoFilter, setTodoFilter] = useState("All"); 


    useEffect(()=>{
        Axios.get("/").then((res) => {
            setList(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [])

    function handleClick() {

         const num = Math.random();

          const id = _uniqueId("todo-" + num);

        if(userInput.title.trim()) {
                const template = {
                    id: id,
                    title: userInput.title,
                    completed: userInput.completed
                }

                
                setList([...todoList, template]);

                setUserInput({
                    title: "",
                    completed: false
                });
              

                // sending the data after updating the list
                Axios.post("/create", template).then(response => {
                
                }).catch(error => {
                    alert(error);
               
                });

                
        }  else { setErrMsg(true)  }
           
        
      }

    const onChangeHandler = (e) => {
        const {name, value} = e.target

        setUserInput(prevValue => {
            return ({...prevValue, [name]: value })
        });

        setErrMsg(false);
       
    }

        const deleteHandler = (id) => {

            setList((prevItems) => {
                return prevItems.filter((prevItem) => {
                return prevItem.id !== id;
                });
            });

            Axios.delete("/" + id )
            .then(res => {
              
            })
            .catch(err => {
                alert(err);
            })

        
            
        }

    const tabClickHandler = (tab) => {

            setTodoFilter(tab);

        }

    const filter = (todoList) => {
        

        if(todoFilter === "All"){
            return todoList;
          } else if (todoFilter === "Completed"){
                return todoList.filter(item => (item.completed === true))
              } else if (todoFilter === "Active"){
                  return todoList.filter(item => ( item.completed === false))
              }

    }








    return (
        <div className="todo-container">
            <TodoTopBar 
                clicked={props.clicked}
                show={props.show}
                
            />

            <InputBox 
                value={userInput.title}
                onChange={onChangeHandler}
                show={props.show}
                clicked={handleClick}
                error={errMsg}
                
            />
            
                 
            <TodoLists 
                show={props.show}
                todoLists={filter(todoList)}
                deleteHandler={deleteHandler}
                setList={setList}
                handleClick={tabClickHandler}
            />
 
        </div>
    )

}


export default TodoContainer;
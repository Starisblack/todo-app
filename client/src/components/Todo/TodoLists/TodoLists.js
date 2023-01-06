import { useState } from "react";
import ListCard from "./ListCard/ListCard";
import "./todoLists.css"
import { ReactSortable } from "react-sortablejs";
import TodoBottomTabs from "./TodoBottomTabs/TodoBottomTabs";
import Axios from "../../../axios-todos"
import BackDrop from "../../Backdrop/Backdrop"




const TodoLists = (props) => {

    const [open, setOpen] = useState(false);


   let itemListed= "";

    if(props.todoLists.length <= 1){

        itemListed = props.todoLists.length + " item left " 
    } else {
        itemListed = props.todoLists.length + " items left " 
    }

    // thought of just having a if condition at top for clearity intead of using this single line code below

    // ==>  {props.todoLists.length} {props.todoLists.length <= 1 ? "item" : "items" }
    
    
    const handleChecked = (id)=> {

        const lists = [...props.todoLists]
        const selectedTodo = lists.find((todo) => todo.id === id)

        selectedTodo.completed = !selectedTodo.completed;
         
        props.setList(lists);

        Axios.patch("/" + id, {
            completed: selectedTodo.completed
        }).then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err);
        })


    }

    const clearHandler = () => {

            setOpen(true);

         Axios.delete("/")
            .then(response => {
                 window.location.reload();
                
            })
            .catch(error => { alert("handlesubmit error for blog ", error)});

    }


    return (
        <>
            <div className="todoList-container"> 
                <BackDrop
                    open={open}
                 />
                <ReactSortable list={props.todoLists} setList={props.setList}>
                
                   {props.todoLists.map((item) => {
                        return (
                    
                        <ListCard
                        key={item.id}
                        id={item.id}
                        clicked={props.deleteHandler}
                        show={props.show}
                        title={item.title}
                        checked={handleChecked}
                        checkState={item.completed}
                        
                        />
                        )
                    })}

        
                </ReactSortable>

           <div className="bottom-container">
                <div style={{display: "flex", alignItems: "center"}}>
                    <p> {itemListed}</p>
                </div>

                 <div className="desktop-view">
                    <TodoBottomTabs  clicked={props.handleClick} />
                </div>
                <div style={{display: "flex"}}>
                    <button onClick={clearHandler} className="clear-btn">Clear Completed</button>
                </div>
            </div>
                 
        </div>

             {/* this will display on mobile view */}
        <div className="mobile-view">
            <TodoBottomTabs clicked={props.handleClick} /> 
        </div> 
        
    </>
        
    )

}


export default  TodoLists;

import "./listCard.css"
import CloseIcon from '@mui/icons-material/Close';


const ListCard = (props) => {

  // const [complete, setComplete] = useState(false)


  // const handleOnChange = () => {
  //   setComplete(prev => !prev)
  // }

  // console.log(complete);


    

      return (
           
            <div  className="list-card" >
        

                <div   className="item">
                        <div className="todo-title">
                        <input  
                            onChange={()=> props.checked(props.id) }   
                            type="checkbox" 
                            name="checkbox" 
                            value={props.title}
                            checked={props.checkState}
                             />
                        <p > {props.title}  </p>
                        </div>
                         
                        <CloseIcon  onClick={()=> props.clicked(props.id)} style={{color: props.show ? "white" : "black", cursor: "pointer"}}/>
                       
                </div>


            </div>
      )

}


export default ListCard;
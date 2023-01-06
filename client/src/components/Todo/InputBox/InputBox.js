// import send from "../../../assets/images/send.svg"
import "./inputBox.css"

import { motion } from "framer-motion";



const InputBox = (props) => {

      

   return (
   <div className="input-group">
     <div className="input-group-text">
        <input className="form-check-input mt-0" type="radio" value="" disabled />
     </div>
        <input type="text" className="form-control" 
            onChange={props.onChange} 
            value={props.value} 
            name="title" 
            placeholder="Create a new todo..."
               
            />
         
            <p style={{display: props.error ? "block" : "none"}}  
            className="error">
            Input field can't be empty
            </p>


        <motion.div 
           whileHover={{ scale: 1.1}} 
            className="send-icon"
            onClick={props.clicked}
           >
                <svg  xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill={props.show ? "white" : "black"} className="bi bi-send" viewBox="0 0 16 16">
                    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
                 </svg>
            </motion.div>
        
    </div>)

}


export default InputBox;
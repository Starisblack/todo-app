import sunlight from "../../../assets/images/icon-sun.svg"
import moon from "../../../assets/images/icon-moon.svg"
import "./todoTopBar.css"

const TopBar = (props) => {

   

return(
    <div  className="top-bar">
        <div className="title">
            <h1>TODO</h1>
        </div>

        <div onClick={props.clicked} className="bar-logo">
            <img src={props.show ? sunlight : moon} alt=""/>
        </div>
    </div>
)
}




export default TopBar
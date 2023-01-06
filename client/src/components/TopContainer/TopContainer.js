
// import desktopLight from  "../../assets/images/bg-desktop-light.jpg"
// import desktopDark from  "../../assets/images/bg-desktop-dark.jpg"
// import mobileDark from  "../../assets/images/bg-mobile-dark.jpg"
// import mobileLight from  "../../assets/images/bg-mobile-light.jpg"
import "./topContainer.css"


const TopContainer = () => {

        const getDate = () => {

            const today = new Date();
          
            const options = {
              weekday: "long",
              day: "numeric",
              month: "long"
            };
          
            return today.toLocaleDateString("en-US", options);
          
          };

        const todayDate = getDate();

                

    return (
        <div className="top-container">

            <h1>{todayDate + "."}</h1>
            
             {/* shows only in desktop  */}
            {/* <img className="desktop" src={props.show ? desktopDark : desktopLight } alt=""/> */}


               {/* shows only in mobile  */}

            {/* <img className="mobile" src={props.show ? mobileDark : mobileLight } alt=""/> */}

        </div>
    )

    
}

export default TopContainer;
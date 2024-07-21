import User from "./User";
import User_class from "./User_class";
import React from "react";
import UserContext from "../utilites/UserContext";
// const About=()=>{
//     return(
//         <div>
//             <h1>this is about us page</h1>
//             <User name={"Govind"} Location={"raipur"}/>
//             <User_class name={"Govind"} Location={"raipur"} contact={"@gupta"}/>
//         </div>
//     )
// };

class About extends React.Component{
    constructor(props)
    {
      super(props);
      console.log("parent constructor")
    }
    componentDidMount(){
        console.log("parent Component did mount");
    }
    render()
    {
        console.log("parent render")
        return(
          
            <div>
                <h1>this is about us page</h1>
                <div>
                    
                    <UserContext.Consumer>
                        {({loggedInUser})=>(
                            <h1>loggedInUser:{loggedInUser}</h1>
                        )}
                        </UserContext.Consumer>

                </div>
                <User name={"Govind"} Location={"raipur"}/>
                <User_class name={"Govind"} Location={"raipur"} contact={"@gupta"}/>
                {/* <User_class name={"ravi"} Location={"jaipur"} contact={"@sinha"}/>
                <User_class name={"sumit"} Location={"ranchi"} contact={"@sukla"}/> */}
            </div>
        ) 
    }
}
export default About;

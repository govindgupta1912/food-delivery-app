import { useState } from "react";
const User=(props)=>{
    const {name,Location}=props
    const[num,setnum]=useState(0);
    return(
        <div className="user-card">
            <h1>NAME:{name}</h1>
            <h2>Location:{Location}</h2>
            <h2>Contact:@govind</h2>
            <h3>count:{num}</h3>
        </div>
    )
}

export default User;
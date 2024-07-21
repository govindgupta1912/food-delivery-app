import { useState } from "react";
import MenuList from "./MenuList";

const ResturantCategory = ({data,showItem,setShowIndex})=>{

    console.log(data)

    //const[showItem,setShowItem]=useState(false);
    const handleclicked=()=>{
       // setShowItem(!showItem);
       setShowIndex();
    }
    return(
    <div>
        <div className="w-7/12 mx-auto my-4 bg-gray-100 shadow-lg p-4">
       <div className="  flex justify-between cursor-pointer  "   onClick={handleclicked} >
    
       
        
        <span className="font-bold text-lg">{data.title}({data.itemCards.length})</span>
       
       <span>⬇️</span>
        </div> 
        {showItem&&<MenuList item={data.itemCards}/>}
    </div>
    </div>
    );
}

export default ResturantCategory;
 // Restaurant card component: Image, name, cuisine
 import { useContext, useEffect, useState } from "react";
import { CDN_URL } from "../utilites/constant";
import UserContext from "../utilites/UserContext";

  
//   In the context of your code, resData?.data is accessing the "data" property of the "resData" object. However,
//  it is written with optional chaining (?.) to handle cases where resData may be null or undefined.
//  If resData is null or undefined, the expression evaluates to undefined without throwing an error, and subsequent
//  property accesses (such as data) are not attempted.
const ResturantCard =( props)=>{
   // console.log(props);
    const {resData} =props;
   // console.log(resData);
    const{loggedInUser}=useContext(UserContext);

   const {
    cloudinaryImageId,
    name,
    areaName,
    avgRating,
    cuisines,
    costForTwo,
    sla
   }=resData?.info;
   
    return(
         <div data-testid="resCard"  className="res-card w-[270px] m-4 p-4 rounded-lg bg-gray-100  hover:bg-gray-200 h-[400px]" >
         <img className="res-logo rounded-md  h-40 w-60"
         alt="res-logo"
        //  src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}
        src={CDN_URL+cloudinaryImageId}
         />
          
          {/* 
           1-- <h3>{props.name}</h3>
          2--- <h3>{resData.data.name}</h3>
          <h3>{resData.data.cuisines.join(",")}</h3>
          <h3>{resData.data.avgRating}stars</h3> 
          3----
          */}
           <h3 className="font-bold py-4 text-lg">{name}</h3>
          <h3>{cuisines}</h3>
          <h3>{areaName}</h3>
          <h3>{avgRating }stars</h3>
          <h3>{costForTwo} FOR TWO</h3>
          { <h3>{sla?.lastMileTravelString}minutes</h3> }
          {/* <h3>user:{loggedInUser}</h3> */}
          
        </div>
    )
}

export default ResturantCard;


// function ResturantCard(resData){
//     const [data, setData] = useState("")


//     // useEffect(()=>{
//     //     setData(resData.resData)
//     // },[data])
//     // console.log(data?.name);
//      console.log(resData);
//     return(
//         <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
//           <img className="res-logo"
//          alt="res-logo"
//         src={CDN_URL+resData.resData?.cloudinaryImageId}
//          /> 
          
//            <h3>{resData?.resData.info?.name}</h3>
//           <h3>{resData.resData?.cuisines}</h3>
//           <h3>{resData.resData?.areaName}</h3>
//           <h3>{resData.resData?.avgRatingString }stars</h3>
//           <h3>{resData.resData?.costForTwo}</h3>
//            { <h3>{resData.resData.sla?.lastMileTravelString}minutes</h3> } 
          
//         </div>
//     )
// }


// export default ResturantCard;
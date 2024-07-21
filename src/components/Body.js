import ResturantCard from "./ResturantCard";
import restaurantList from "../utilites/apiData";
import Shimmer from "./Shimmer";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilites/useOnlineStatus";
import UserContext from "../utilites/UserContext";

const Body=()=>{

    const [list ,setlist]=useState([]);
    const [filter,setfilter]=useState([]);
    const [search,setsearch]=useState();
   
    const {loggedInUser, setUserName,classb}=useContext(UserContext);

    //console.log(branch);

    useEffect(()=>{
       fetchData();
    },[]);    

    const fetchData = async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const jsonE = await data.json();
           console.log(jsonE);
          // console.log(jsonE.data.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants);
        //  let checkData =jsonE?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
        //    ?.restaurants;
       // setlist(jsonE.data.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants);
         setlist(jsonE?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants);
            setfilter(jsonE?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants);
    }

    const status=useOnlineStatus();
    if(status === false)
        return (
     <h1>your are offline check internet connectio</h1>
     );
     
   
    if(list&&list.length === 0)
      {
        return <Shimmer/>;
      }
    return(
        <div className="body">
            <div className="flex my-10 justify-center">
              <div className="search ">
                <input type="text" data-testid="searchInput" className="search-box border border-solid border-black " value={search} onChange={(e)=>(setsearch(e.target.value))}/>
                <button onClick={()=>{
                const filterlist= list.filter((res)=>{
                    return res.info.name.toLowerCase().includes(search.toLowerCase())
                  });
                  setfilter(filterlist)
                }} className="px-4 bg-blue-500 m-4 text-white rounded-lg">Search</button>
              </div>

              <div>
              <button className="filter-btn bg-gray-400 m-4 px-4 rounded-lg" onClick={()=>{
                const filterlist=list.filter(
              
                    (res)=>{
                      console.log(res);
                      return res.info.avgRating>4
                    }
                 );
                 setfilter
                 (filterlist);
              }}
              >
                Top Rated Resturant
              </button>
              </div>
              <div className="p-2 ">
                <label>UserName</label>
                <input className="border border-black p-2 m-1" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}></input>
               <h1>{classb}</h1>
              </div>
            </div>
           
          
            
            <div className="res-container flex flex-wrap justify-around">
           
                {/*
1//<ResturantCard resName="megha food" cusinis="briyani, north-indian"/>
   2-----
                 <ResturantCard resData={restaurantList[0]}/>
                <ResturantCard resData={restaurantList[1]}/>
                <ResturantCard resData={restaurantList[2]}/>
                <ResturantCard resData={restaurantList[3]}/>
                <ResturantCard resData={restaurantList[4]}/>
                <ResturantCard resData={restaurantList[5]}/> 
                3-----
                */}

                {filter.map((res)=>{
                     // console.log(res?.info?.id);
                     return(
                  <Link
              
                  key={res?.info?.id}
                  to={"/restaurants/"+res.info.id}
                   >
                    <ResturantCard  resData={res}/>
                    </Link>
                     )
               })}
            </div>

        </div>
    )
}

export default Body;
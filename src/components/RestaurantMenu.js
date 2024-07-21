import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utilites/constant";
import useCustomResturant from "../utilites/useCustomResturant";
import ResturantCategory from "./ResturantCategory";
const RestaurantMenu = () => {
  // const[resInfo,setResInfo]=useState(null);

  const { resId } = useParams();

  const [showTndex, setShowIndex] = useState(null);

  // useEffect(()=>{
  //     fectchMenu();
  // },[]);

  // const fectchMenu= async()=>{
  //     const data=await fetch(MENU_API+resId);
  //     console.log(MENU_API+resId);

  //     const json=await data.json();
  //     console.log(json);
  //     setResInfo(json.data);
  // };
  const resInfo = useCustomResturant(resId);
  if (resInfo === null) return <Shimmer />;
  console.log(resInfo);
  const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
  console.log(resInfo?.cards[2]?.card?.card?.info);
  const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
  console.log(itemCards[0].card.info.name);

  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) => c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  console.log(categories);
  // return(
  //     <div className="menu">
  //         <h1>{name}</h1>
  //         <p>{cuisines.join(",")}-{costForTwoMessage}</p>
  //         <h2>Menu</h2>
  //           <ul>
  //             {itemCards.map((item)=>(
  //                 <li key={item.card.info.id}>{item.card.info.name}-{" RS. "+item.card.info.price/100}</li>
  //             ))}
  //           </ul>
  //          {/* <li>{itemCards[0].card.info.name}</li>
  //         <li>{itemCards[1].card.info.name}</li> * */}
  //     </div>
  // )

  return (
    <div className="menu text-center">
      <h1 className=" font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">{cuisines.join(",")}-{costForTwoMessage}</p>

      {categories.map((category, index) => {
        return (
          <ResturantCategory key={category?.card?.card?.title} data={category?.card?.card} 
          showItem={index == showTndex ? true : false}
          setShowIndex={()=>setShowIndex(index)} />
        )
      })}

    </div>
  )


}

export default RestaurantMenu;
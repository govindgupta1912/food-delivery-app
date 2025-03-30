import { useDispatch } from "react-redux";
import { CDN_URL } from "../utilites/constant";
import { addItem } from "../utilites/cartSlice";

const Cartlist=({item})=>{
    console.log(item);
   const dispatch= useDispatch();

   const hadledAddItem=(item)=>{
    // dispatch(addItem("pizza"));
    dispatch(addItem(item));
   };
    
    return(
        <div>
            {item.map((item)=>(
            <div 
            data-testid="foodItems"
            className=" p-2 m-2  flex justify-between border-b-8 ">
                <div className="w-9/12">
                <div className="py-2">
                    <span>{item.card.info.name}</span>
                    <span>  -₹{item.card.info.price?item.card.info.price/100:item.card.info.defaultPrice/100}</span>

                  
                </div>
                <p className="text-xs">{item.card.info.description}</p>
                </div>
                <div className="w-3/12 p-4">
                 
                  <img className=" w-full" src={CDN_URL+item.card.info.imageId}/>
                    </div>
            </div>
            ))}
        </div>
    )

}

export default Cartlist;
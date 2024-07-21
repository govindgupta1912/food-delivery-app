import { useSelector } from "react-redux";
import MenuList from "./MenuList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utilites/cartSlice";

const Carts=()=>{
    const cartItems=useSelector((store)=>store.cart.items);
    const dispatch=useDispatch();
    const handelclicked=()=>{
        dispatch(clearCart());
    }
    return (
        <div className="p-2 m-2 text-center ">
            <h1 className="text-lg font-bold">CART</h1>
            <div className="w-6/12 m-auto">
               
                <button className="text-white bg-black p-2 m-2 rounded-lg hover:bg-slate-600" onClick={handelclicked}>Clear Cart</button>
               {cartItems.length ==0 &&<h1>Cart is empty Add Item to the Cart</h1>}
                <MenuList item={cartItems}/>
            </div>
        </div>
    )
}

export default Carts;
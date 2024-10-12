// import { useSelector } from "react-redux";
// import MenuList from "./MenuList";
// import { useDispatch } from "react-redux";
// import { clearCart } from "../utilites/cartSlice";
// import Cartlist from "./Cartlist";
// const Carts=()=>{
//     const cartItems=useSelector((store)=>store.cart.items);
//     const dispatch=useDispatch();
//     const handelclicked=()=>{
//         dispatch(clearCart());
//     }
//     return (
//         <div className="p-2 m-2 text-center ">
//             <h1 className="text-lg font-bold">CART</h1>
//             <div className="w-6/12 m-auto">
               
//                 <button className="text-white bg-black p-2 m-2 rounded-lg hover:bg-slate-600" onClick={handelclicked}>Clear Cart</button>
//                {cartItems.length ==0 &&<h1>Cart is empty Add Item to the Cart</h1>}
//                 <Cartlist item={cartItems}/>
            
//                 <button className="text-white bg-black p-2 m-2 rounded-lg hover:bg-slate-600" onClick={handelclicked}>Check OUT</button>
//                 {cartItems.length ==0 &&<h1>Cart is empty Add Item to the Cart</h1>}
           
//             </div>
//         </div>
//     )
// }

// export default Carts;
import { useSelector, useDispatch } from "react-redux";
import { useContext } from "react";
import { clearCart } from "../utilites/cartSlice";
import Cartlist from "./Cartlist";
import UserContext from "../utilites/UserContext"; // Import UserContext for login check
import { useNavigate } from "react-router-dom"; // To navigate to login page


const Carts = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const { loggedInUser } = useContext(UserContext); // Get the logged-in user from context
    const navigate = useNavigate(); // useNavigate to redirect to login page

    // Calculate total price of cart items
    const totalPrice = cartItems.reduce((sum, item) => {
        const price = item.card.info.price ? item.card.info.price : item.card.info.defaultPrice;
        return sum + price / 100;
    }, 0);

    // Handle clear cart button
    const handleClearCart = () => {
        dispatch(clearCart());
    };

    // Handle checkout button
    const handleCheckout = () => {

        if (!loggedInUser) {
            alert("You need to log in before proceeding to checkout.");
            navigate("/login"); // Redirect to the login page
            return;
        } 

        if (cartItems.length === 0) {
            alert("Your cart is empty.");
        } else {
            alert(`Your total is ₹${totalPrice.toFixed(2)}. Proceeding to checkout...`);
            dispatch(clearCart()); // Clear the cart after checkout
        }
    };

    return (
        <div className="p-2 m-2 text-center">
            <h1 className="text-lg font-bold">CART</h1>
            <div className="w-6/12 m-auto">
                <button
                    className="text-white bg-black p-2 m-2 rounded-lg hover:bg-slate-600"
                    onClick={handleClearCart}
                >
                    Clear Cart
                </button>

                {cartItems.length === 0 ? (
                    <h1>Cart is empty. Add items to the cart.</h1>
                ) : (
                    <>
                        <Cartlist item={cartItems} />
                        <h2 className="text-lg font-bold mt-4">Total: ₹{totalPrice.toFixed(2)}</h2>
                        {/* <button
                            className="text-white bg-black p-2 m-2 rounded-lg hover:bg-slate-600"
                            onClick={handleCheckout}
                        >
                            Check OUT
                        </button> */}

                        {!loggedInUser ? (
                            <div className="bg-yellow-100 text-red-600 p-2 rounded-lg mt-2">
                                <p>Please log in to proceed with the checkout.</p>
                                <button
                                    className="text-white bg-blue-600 p-2 rounded-lg mt-2 hover:bg-blue-700"
                                    onClick={() => navigate("/login")}
                                >
                                    Go to Login
                                </button>
                            </div>
                        ) : (
                            <button
                                className="text-white bg-black p-2 m-2 rounded-lg hover:bg-slate-600"
                                onClick={handleCheckout}
                            >
                                Check OUT
                            </button>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default Carts;

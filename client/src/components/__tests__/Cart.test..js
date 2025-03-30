import { fireEvent, render ,screen} from "@testing-library/react"
import { act } from "react-dom/test-utils"
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Headers";
import MOCK_DATA_NAME from "../mocks/mockResMenu.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utilites/appStore";
import {BrowserRouter} from "react-router-dom"
import Carts from "../Carts";
import Body from "../Body";

global.fetch=jest.fn(()=>
    Promise.resolve({
        json:()=> Promise.resolve(MOCK_DATA_NAME),
    })
)

it("should load resturant menu Component",async()=>{
    await act(async()=>
        render(
            <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
             <RestaurantMenu/>
        </Provider>
        </BrowserRouter>
        )
    )

    const accordianHeader=screen.getByText("New Thin n Crispy Pizzas(6)");

    fireEvent.click(accordianHeader);
    
//expect(accordianHeader).toBeInTheDocument();
expect(screen.getAllByTestId("foodItems").length).toBe(6);

const addBtn =screen.getAllByRole("button",{name:"ADD"});

console.log(addBtn.length);
})

it("should load resturant menu Component",async()=>{
    await act(async()=>
        render(
            <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
             <RestaurantMenu/>
             <Carts/>
        </Provider>
        </BrowserRouter>
        )
    )

    const accordianHeader=screen.getByText("New Thin n Crispy Pizzas(6)");

    fireEvent.click(accordianHeader);
    
// //expect(accordianHeader).toBeInTheDocument();
// expect(screen.getAllByTestId("foodItems").length).toBe(6);

const addBtn =screen.getAllByRole("button",{name:"ADD"});

console.log(addBtn.length);

expect(screen.getByText("cart(0)")).toBeInTheDocument();
fireEvent.click(addBtn[0]);

expect(screen.getByText("cart(1)")).toBeInTheDocument();

fireEvent.click(addBtn[0]);

expect(screen.getByText("cart(2)")).toBeInTheDocument();

expect(screen.getAllByTestId("foodItems").length).toBe(8);



})

it("should load cart to be empty",async()=>{
  await act(async()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
         <RestaurantMenu/>
         <Header/>
         <Carts/>

        </Provider>
        </BrowserRouter>
    ) 
  })

  
  expect(screen.getAllByTestId("foodItems").length).toBe(2);

   const accordianHeader=screen.getByText("New Thin n Crispy Pizzas(6)");

   fireEvent.click(accordianHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(8);

  fireEvent.click(screen.getByRole("button",{name:"Clear Cart"}))

  expect(screen.getAllByTestId("foodItems").length).toBe(6);

  expect(screen.getByText("Cart is empty Add Item to the Cart")).toBeInTheDocument();

})
import { fireEvent, render,screen } from "@testing-library/react"
import Headers from "../Headers"
import { Provider } from "react-redux"
import appStore from "../../utilites/appStore"
import {BrowserRouter} from "react-router-dom"
import "@testing-library/jest-dom";

it("should reder a login button wth a header component",()=>{
    
    render(
        <BrowserRouter>
         <Provider store={appStore}>
         <Headers/>
         </Provider>
        </BrowserRouter>
    );
       // const loginButton = screen.getByRole("button");
       //const loginButton = screen.getByText("Login");

       const loginButton = screen.getByRole("button",{name:"Login"});
  
         expect(loginButton).toBeInTheDocument();
   
   
})

it("should reder a header component with cartItem 0",()=>{
    
    render(
        <BrowserRouter>
         <Provider store={appStore}>
         <Headers/>
         </Provider>
        </BrowserRouter>
    );
       

       const cartItem = screen.getByText("cart(0)");
  
         expect(cartItem).toBeInTheDocument();
   
   
})

it("should reder a header component with cart",()=>{
    
    render(
        <BrowserRouter>
         <Provider store={appStore}>
         <Headers/>
         </Provider>
        </BrowserRouter>
    );
       

       const cartItem = screen.getByText(/cart/);
  
         expect(cartItem).toBeInTheDocument();
   
   
})

it("should change login button to logout on click of header component with login button",()=>{
    
    render(
        <BrowserRouter>
         <Provider store={appStore}>
         <Headers/>
         </Provider>
        </BrowserRouter>
    );
       

       const loginButton = screen.getByRole("button",{name:"Login"});

       fireEvent.click(loginButton);

       const logoutButton = screen.getByRole("button",{name:"Logout"});

  
         expect(logoutButton).toBeInTheDocument();
   
   
})
import { fireEvent, render,screen } from "@testing-library/react"
import Body from "../Body";
import MOCK_DATA from "../mocks/mocksResListData.json";
import { act } from "react-dom/test-utils";
import {BrowserRouter} from "react-router-dom";
import "@testing-library/jest-dom"

// Mock fetch Implementation:

// global.fetch = jest.fn(() => { ... }) replaces the global fetch function with a mock.
// The mock fetch returns a promise that resolves to an object with a json method.
// The json method returns a promise that resolves to MOCK_DATA.

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        },
    });
});

// beforeAll(()=>{
//     console.log("before all cards");
// })

// beforeEach(()=>{
//     console.log("before each test case");
// })

// afterAll(()=>{
//     console.log("after all the test cases");
// })

// afterEach(()=>{
//     console.log("after Ecah test cases");
// })

it("should reder the boddy component with search",async()=>{
  await act(async()=> render(
  <BrowserRouter>
  <Body/>
  </BrowserRouter>
  )) ;

  const searchBtn=screen.getByText("Search");

  const searchInput=screen.getByTestId("searchInput");

  expect(searchInput).toBeInTheDocument();

 
expect(searchBtn).toBeInTheDocument();

});

it("should SERACH RESTURANT LIST WITH PIZZA INPUT",async()=>{
    await act(async()=> render(
    <BrowserRouter>
    <Body/>
    </BrowserRouter>
    )) ;
  
   const cardBeforeSearch=screen.getAllByTestId("resCard");
   expect(cardBeforeSearch.length).toBe(9);

    const searchBtn=screen.getByText("Search");
  
    const searchInput=screen.getByTestId("searchInput");
  
    fireEvent.change(searchInput,{target:{value:"pizza"}});
    
    fireEvent.click(searchBtn);
 // console.log(searchBtn);
  
  const cards=screen.getAllByTestId("resCard")
   
  expect(cards.length).toBe(1);
  
  });
  
// const searchBtn=screen.getByRole("button",{name:"Search"});

it("should filter top rated resturant ",async()=>{
    
    await act(async()=>
    render(
        <BrowserRouter>
        <Body/>
        </BrowserRouter>
    )
    );

    const cardBeforeSearch=screen.getAllByTestId("resCard");

    expect(cardBeforeSearch.length).toBe(9);

    const topRatedBtn=screen.getByRole("button",{name:"Top Rated Resturant"});

    fireEvent.click(topRatedBtn);

    const cardAfterSearch=screen.getAllByTestId("resCard");

    expect(cardAfterSearch.length).toBe(8);
})
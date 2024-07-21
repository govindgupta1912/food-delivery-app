import { render,screen} from "@testing-library/react"
import ResturantCard from "../ResturantCard"
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";
it("should render RestaurantCard component with props Data",()=>{

    render(<ResturantCard resData={MOCK_DATA.resData}/>)
   
    const name = screen.getByText("Chinese Wok");

    expect(name).toBeInTheDocument();
})
import { render,screen } from "@testing-library/react"
import Contact from "../Contact";
import "@testing-library/jest-dom"

describe("contact us page Test Case",()=>{

    beforeAll(()=>{
        console.log("before all cards");
    })

    beforeEach(()=>{
        console.log("before each test case");
    })

    afterAll(()=>{
        console.log("after all the test cases");
    })

    afterEach(()=>{
        console.log("after Ecah test cases");
    })
   
    test("should load contact us component",()=>{
        render(<Contact/>);
    
        const head=screen.getByRole("heading");
    
        expect(head).toBeInTheDocument();
    });
    // we can use any it or test
    it("should load BUTTON INSIDE A contact us component",()=>{
        render(<Contact/>);
    
        const button=screen.getByRole("button");
    
        expect(button).toBeInTheDocument();
    });
    
    test("should load button inside a contact us component with element of text SUBMIT",()=>{
        render(<Contact/>);
    
        const button=screen.getByText("SUBMIT");
    
        expect(button).toBeInTheDocument();
    });
    
    //TestingLibraryElementError: Unable to find an element with the text: RANDOM
    // test("should load contact us component",()=>{
    //     render(<Contact/>);
    
    //     const button=screen.getByText("RANDOM");
    
    //     expect(button).toBeInTheDocument();
    // });
    
    test("should load input WITH name placeholder inside a contact us component",()=>{
        render(<Contact/>);
    
        const inputName=screen.getByPlaceholderText("WRITE NAME");
    
        expect(inputName).toBeInTheDocument();
    }) 
    
    
    //TestingLibraryElementError: Unable to find an element with the placeholder text of: NAME   
    // test("should load input WITH name placeholder inside a contact us component",()=>{
    //     render(<Contact/>);
    
    //     const inputName=screen.getByPlaceholderText("NAME");
    
    //     expect(inputName).toBeInTheDocument();
    // }) 
    
    test("should load 2 input box on the contect component",()=>{
        render(<Contact/>);
    
        // rendering
        const inputBox=screen.getAllByRole("textbox");
        
        // Assertion
        expect(inputBox.length).toBe(2);
    })
    
    
    test("should load 2 input box on the contect component",()=>{
        render(<Contact/>);
    
        // rendering
        const inputBox=screen.getAllByRole("textbox");
        // it return the react element which is non other than js object
        
        // Assertion
        expect(inputBox.length).not.toBe(3);
    })
    
})

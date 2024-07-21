const Contact=()=>{
    return(
        <div className="">
            <h1 className="text-center"> This is contact page</h1>
            <form className="mx-96 my-10">
                NAME:     <input type="text" placeholder="WRITE NAME" className="border border-black p-1"></input><br/>
                MESSAGE:<input type="text" placeholder="write message here"className="border border-black p-1"/><br/>
                <button className="border border-black p-2 m-2 bg-gray-100 rounded-lg">SUBMIT</button>
            </form>
        </div>
    )
}

export default Contact;
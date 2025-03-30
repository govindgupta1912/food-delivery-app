import React from "react";

class User_class extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state={
            count:0,
            count2:2,
            userinfo:{
                name:"Dummy",
            },
        };
        console.log(this.props.name+"constructor");
    }
    async componentDidMount(){
        console.log(this.props.name+"Component did mount");

        const data= await fetch("https://api.github.com/users/govindgupta1912");
        const jason= await data.json();

        this.setState({
            userinfo:jason
        })
    }
    
    componentDidUpdate(){
        console.log("component did update");
    }
    componentWillUnmount(){
        console.log("component will unmount");
    }
    render(){

        const {name,location,avatar_url}=this.state.userinfo;
        const{Location,contact}=this.props
         const{count2}=this.state
         console.log(this.props.name+"render");
        return(
           <div>
            <div className="user-card">
                <h1>NAME:{this.props.name}</h1>
                <h2>Location:{Location}
                </h2>
                <h2>Contact:{contact}</h2>
                <h3>count:{this.state.count}</h3>
                <button
                onClick={()=>{
                    this.setState({
                        count:this.state.count+1,
                        count2:count2+1
                    })
                    
                }}>click</button>
                <h3>count2:{count2}</h3>
               
            </div>
            <div className="user-card">
                <h1>github profile</h1>
                <h2>Name:{name}</h2>
                <h2>Location:{location}</h2>
                <img src={avatar_url}/>

                
                </div>
            </div>
        )
    }
}

export default User_class;
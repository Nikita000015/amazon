import { createRef } from "react";
import { Component } from "react";

class UnconClass extends Component
{
    constructor()
    {
        super()
        this.inputref=createRef()
    }
    
    hello()
    {
       
         this.inputref.current.value="Hello"
         this.inputref.current.style.color="red"
         this.inputref.current.style.backgroundColor="green"
           
    }
    
    render()
    {
        return(
            <div>
               
                <input type="text"placeholder="Enter name" ref={this.inputref}></input><br></br>
               
               <button onClick={()=>this.hello()} >submit</button><br></br>
               
               
            </div>
        )
    }
}
export default UnconClass
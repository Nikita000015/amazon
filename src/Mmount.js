import { Component } from "react";

class Mmount extends Component
{
    render()
    {
        return(
          <div>
            <h1>Mount</h1>
          </div>
        )

    }
    constructor()
    { 
        super()
        console.log("constructer")
    }
    componentDidMmount()
    {
        console.log("componentDidMmoun")
    }
}
export default Mmount
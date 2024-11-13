import { Component } from "react";

class Mount extends Component
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
        console.log("conctructer")
    }
    componentDidMount()
    {
        console.log("component Did mount")
    }

    
}
export default Mount
import { useState } from "react";

function Function()
{
    var[name,setName]=useState("nikki")
    function hello()
    {
        setName("nikki")
    }
    return(
        <div>
            <h1>my name is {name}</h1>
            <button onClick={hello}>submit</button>
        </div>
    )
}
export default Function
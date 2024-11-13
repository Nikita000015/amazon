import { useRef } from "react";

function UnconFun()
{
    const inputref=useRef()
    function hello()
    {
        console.log(inputref.current.value)
        inputref.current.value="Hello world"
        inputref.current.style.color="red"
        inputref.current.style.backgroundColor="black"
    }
    return(
        <div>
            <input type="name"placeholder="Enter name" ref={inputref}></input><br></br>
            <button onClick={()=>hello()} style={{backgroundColor:black,color:white}}>submit</button>

        </div>
    )
}
export default UnconFun
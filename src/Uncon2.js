import { useRef } from "react";

function Uncon2()
{
    const nameref=useRef()
    const addref=useRef()
    function hello(e)
    {
        e.preventDefault()
        var name=nameref.current.value;
        var add=addref.current.value;
        var age=document.getElementById("age").value;
        console.log(name,add,age)
    }
    return(
        <div>
            <form onSubmit={hello}>
                <input type="text"placeholder="Enter name"ref={nameref}></input><br></br>
                <input type="text"placeholder="Enter add"ref={addref}></input><br></br>
                <input type="number"placeholder="Enter age"id="age"></input><br></br>

                <button >submit</button>
            </form>
        </div>

    )
} 
export default Uncon2
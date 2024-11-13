import { render } from "@testing-library/react";
import { useRef, useState } from "react";
import { Form } from "react-bootstrap";
function Uncon3()
{
    var[name,setname]=useState()
    var[add,setadd]=useState()
    function hello(e)
    {
        e.preventDefault()
        console.log(name,add)
    }
    return(
        <>
        <form onSubmit={hello}>
            <input type="text" placeholder="Enter name" onChange={(e)=>setname(e.target.value)}></input><br></br>
            <input type="text" placeholder="Enter add" onChange={(e)=>setadd(e.target.value)}></input><br></br>
            <button>submit</button>

        </form>
        </>
    )
}
export default Uncon3
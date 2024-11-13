import { useState } from "react"

function Controlled()
{
    const[name,setname]=useState()
    const[add,setadd]=useState()
    function hello(e)
    {
        e.preventDefault()
        console.log(name,add)
    }

    return(
        <div>
            <form onSubmit={hello}>
                <input type="text"placeholder="Enter name" onChange={(e)=>setname(e.target.value)}></input><br></br>
                <input type="text"placeholder="Enter add" onChange={(e)=>setadd(e.target.value)}></input><br></br>
                <button>submit</button>
                </form>
                </div>
    )
}
export default Controlled
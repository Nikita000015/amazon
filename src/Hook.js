import { useEffect } from "react";
import { useState } from "react";

function Hook()
{
    const[data,setdata]=useState(0)
    const[count,setcount]=useState(10)
    const[hello,sethello]=useState(100)
    useEffect(()=>{
        console.log("Loading")
    },[count])
    return(
        <div>
            <h1>Data{data}</h1>
            <h1>Count{count}</h1>
            <h1>Hello{hello}</h1>
            <button onClick={()=>setdata(data+1)}>Data</button>
            <button onClick={()=>setcount(count+1)}>count</button>
            <button onClick={()=>sethello(hello+1)}>hello</button>
        </div>
    )

}
export default Hook
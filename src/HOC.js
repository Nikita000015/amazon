import { useState } from "react";

function HOC()
{
    return(
        <div>
            <Redcmp cmp={Counter}></Redcmp>
            <Greencmp cmp={Counter}></Greencmp>
            <Yellowcmp cmp={Counter}></Yellowcmp>
            <Orangecmp cmp={Counter}></Orangecmp>
        </div>
    )
}
function Redcmp(prop)
{
    return<h1 style={{background:"red",width:"200px"}}><prop.cmp></prop.cmp></h1>
}
function Greencmp(prop)
{
    return<h1 style={{background:"Green",width:"200px"}}><prop.cmp></prop.cmp></h1>
}
function Yellowcmp(prop)
{
    return<h1 style={{background:"Yellow",width:"200px"}}><prop.cmp></prop.cmp></h1>
}
function Orangecmp(prop)
{
    return<h1 style={{background:"Orange",width:"200px"}}><prop.cmp></prop.cmp></h1>
}

function Counter()

{
  const[count,setCount]=useState(0)
  return(
    <div>
        <h1>Count:{count}</h1>
        <button onClick={()=>setCount(count+1) }>submit</button>
    </div>
  )
}
export default HOC
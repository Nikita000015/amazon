import { useState } from "react"
import { Button } from "react-bootstrap"

function Colorcmp()
{
    return(
        <div>
    <Redcmp cmp={Counter}></Redcmp>
    <Yellowcmp cmp={Counter}></Yellowcmp>
    <Greencmp cmp={Counter}></Greencmp>
     </div>
    )
    
}
function Redcmp(prop)
{
    return<h1 style={{backgroundColor:"red",width:"200px",height:"100px"}}><prop.cmp></prop.cmp></h1>
}
function Yellowcmp(prop)
{
    return<h1 style={{backgroundColor:"Yellow",width:"200px",height:"100px"}}><prop.cmp></prop.cmp></h1>
}    
function Greencmp(prop)
{
    return<h1 style={{backgroundColor:"Green",width:"200px",height:"100px"}}><prop.cmp></prop.cmp></h1>
}    


function Counter()
{
    const[count,setCount]=useState(0)
    return(
        <div>
            <h1>count:{count}</h1>
            <Button onClick={()=>setCount(count+1)}> submit</Button>
        </div>
    )
}
/*{
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
}*/
export default Colorcmp

    

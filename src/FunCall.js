function FunCall()
{   
    function hello()
    {
        alert("hello world")
    }
    return(
       <button onClick={hello}>submit</button>
       //<button onClick={()=>hello()}>submit</button>
            
    )
}
export default FunCall
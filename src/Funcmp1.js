function Funcmp1()
{
    function hello()
    {
        alert("Namste indea")
    }
    return(
        <div>
           <button onClick={()=>hello()}>submit  </button>
        </div>
    )
}
export default Funcmp1
function Condition1()
{   
    var no=20;
    return(
        <div>
            {
              no==10?<h1>No is 10</h1>:
              no==20?<h2>No is 20</h2>:
              no==30?<h3>No is 30</h3>:null
            }
        </div>
    )
}
export default Condition1
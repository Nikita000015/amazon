function MapCmp()
{
    var data=[{rollno:101,name:"Ram",marks:45},
        {rollno:102,name:"neha",marks:55},
        {rollno:103,name:"nikki",marks:65},
        {rollno:104,name:"shyam",marks:70}]
    return(<div>
        <table striped bordered hover variant="dark red">
            <tbody>
                <tr>
                    <th>key</th>
                    <th>Rollno</th>
                    <th>Name</th>
                    <th>Marks</th>
                </tr>
                {
                    data.map((item,i)=>
                        <tr key={i}>
                            <td>{i}</td>
                            <td>{item.rollno}</td>
                            <td>{item.name}</td>
                            <td>{item.marks}</td>
                        </tr>
                        )
                }
            </tbody>
        </table>
    </div>)    
}
export default MapCmp
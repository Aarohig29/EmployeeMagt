import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function EmpList()
{
    const [data,setData]=useState(null)
    const navigate=useNavigate()
    useEffect(()=>{
        fetch("http://localhost:3006/Employee")
        .then((resp)=>{
            return resp.json()
        })
        .then((res)=>{
            
            setData(res)
        })
    },[])
    const edit=((id)=>{
        navigate("/empedit/"+id)
    })
    const delet=(id)=>{
        fetch("http://localhost:3006/Employee/"+id,{
            method:"DELETE"
        })
        .then(()=>{
            alert("deleted successfully...")
            window.location.reload()
        })
    }
    const detail=((id)=>{
        navigate("/empdetail/"+id)
    })
    return(
        <div>
         
            <div className="container">
           
                <div className="card" style={{marginLeft:"200px",marginTop:"150px",boxShadow:"2px 3px 12px 5px", width:"900px"}}>
                <div className="card-title">
                            <h3 style={{marginLeft:"250px",marginTop:"30px",color:"navy"}}>Employee Management System</h3>
                    </div>
                    <div className="card-body">
                        <Link to="/form" className="btn btn-primary" style={{marginBottom:"10px"}}>Add New</Link>
                            <table className="table table-bordered">
                                <thead className="bg-primary text-white">
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Actions</th>
                                </thead>
                                <tbody>
                                    { data && data.map(item=>(
                                        <tr>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phone}</td>
                                            <td>
                                                <a onClick={()=>{edit(item.id)}} className="btn btn-success">Edit</a>
                                                <a  onClick={()=>{delet(item.id)}} className="btn btn-danger" style={{marginLeft:"3px"}}>Delete</a>
                                                <a onClick={()=>{detail(item.id)}} className="btn btn-primary"style={{marginLeft:"3px"}}>Details</a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default EmpList;
// 
// 
// 
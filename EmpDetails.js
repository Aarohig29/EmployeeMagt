import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"


function EmpDetails()
{
    const [data,setData]=useState()
    const {empid}=useParams()
    useEffect(()=>{
        fetch("http://localhost:3006/Employee/"+empid)
        .then((resp)=>{
            return resp.json()
        })
        .then((res)=>{
            
            setData(res)
        })
    },[])
    return(
        <div className="container">
            <div className="card" style={{marginLeft:"380px",marginTop:"200px",boxShadow:"2px 3px 12px 5px", width:"700px"}}>
                <div className="card-title" style={{marginLeft:"20px",color:"navy"}}>
                        <h2>Employee Details : </h2>
                </div>
                <div className="card-body">
                    {
                        data &&
                        <div>
                            <p>Employee Name   : {data.name} ({data.id})</p>
                            <p>Employee Email  : {data.email}</p>
                            <p>Employee Phone  :  {data.phone}</p>
                            <div>
                                <Link to="/" className="btn btn-primary">Back</Link>
                            </div>
                       </div>
                    }
                </div>

            </div>
        </div>
    )
}
export default EmpDetails;
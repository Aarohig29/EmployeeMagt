import { useState } from "react";
import { Link, json, useNavigate} from "react-router-dom";


function EmpForm()
{
    const [id,setId]=useState("")
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")
    const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        const data={id,name,email,phone}
        fetch("http://localhost:3006/Employee",{
            method:"post",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(data)

        })
        .then(()=>{
                alert("successfuly Saved")
                navigate("/")
        })
        .catch((err)=>{
                console.log(err.message)
        })
    }
    return(
            <div className="row">
                <div className="offsetlg-3 col-lg-6">
                    <form className="container" onSubmit={handleSubmit} >
                        <div className="container" >
                            <div className="card" style={{marginLeft:"400px",marginTop:"150px",boxShadow:"2px 3px 12px 5px", width:"700px"}}>
                                <div className="card-title">
                                        <h3 style={{marginLeft:"250px",marginTop:"30px",color:"navy"}}>Employee Form</h3>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label>ID</label>
                                                <input value={id} disabled="disabled" onChange={e=>setId(e.target.value)} className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                          <div className="form-group">
                                             <label>Name</label>
                                            <input value={name} onChange={e=>setName(e.target.value)} className="form-control"/>
                                        </div>
                                      </div>
                                      <div className="col-lg-12">
                                          <div className="form-group">
                                              <label>Email</label>
                                              <input value={email} onChange={e=>setEmail(e.target.value)} className="form-control"/>
                                         </div>
                                      </div>
                                      <div className="col-lg-12">
                                          <div className="form-group">
                                              <label>Phone</label>
                                              <input value={phone} onChange={e=>setPhone(e.target.value)} className="form-control"/>
                                          </div>
                                     </div>
                                     <div className="col-lg-12">
                                          <div className="form-group" style={{marginTop:"10px",marginLeft:"250px"}}>
                                             <button type="submit" className="btn btn-success" >Save</button>
                                             <Link to="/" className="btn btn-primary" style={{marginLeft:"5px"}}>Back</Link>
                                         </div>
                                     </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
    )
}
export default EmpForm;
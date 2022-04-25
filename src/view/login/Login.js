import React , {useState} from "react";


function Login() {
  const [user , setUser] = useState({
    name: "",
    email: "",
    password: ""
  })

  const changeHandler = (e) => {
    setUser({...user , [e.target.name]:e.target.value})
  }


  const Submit = async (e) => {
    e.preventDefault()
    await console.log(user)
  }



  return (
    <>
       <div className="row d-flex justify-content-center">
         <div className="col-md-6">
         <form onSubmit={Submit}>
            <input 
              className="form-control m-2 px-2"
              placeholder="name"
              type="text" 
              name="name"
              value={user.name}
              onChange={changeHandler} 
              required 
            />
            <input 
              className="form-control m-2 px-2"
              placeholder="email"
              type="email" 
              name="email"
              value={user.email}
              onChange={changeHandler} 
              required 
            />
            <input 
              className="form-control m-2 px-2"
              placeholder="password"
              type="password" 
              name="password"
              value={user.password}
              onChange={changeHandler} 
              required 
            />
            <input 
              className="btn btn-primary align-items-md-center"type="submit" value="Send" />
        </form>
         </div>
       </div>
    </>
  );
}

export default Login;

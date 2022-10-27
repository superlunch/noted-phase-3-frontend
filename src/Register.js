import React from 'react'



function Register({onclickp}) {

onclickp()

  return (
  <div className="Form-container">
    <div className="Header">Register</div>
    <div className="Content">
      <div className="logo">
        <img src="" alt="" />
      </div>
      <div className="Form">
      <form>
        <div className="Form-group">
          <label htmlFor="Add Username">Username: </label>
          <input type="text" name="Add Username" placeholder="Add Username" />
        </div>
        <div className="Form-group">
          <label htmlFor="Add Email">Email: </label>
          <input type="email" name="Add Email" placeholder="Add Email" />
        </div>
        <div className="Form-group">
          <label htmlFor="Password">Password: </label>
          <input type="Password" name="Password" placeholder="Password" />
        </div>
        <div className="Form-group">
          <label htmlFor="Confirm Password">Confirm Password: </label>
          <input type="Password" name="Confirm Password" placeholder="Confirm Password" />
        </div>
        </form>
      </div>
    </div>
    <div className="Form-group">
      <button type="button" className="btn">Submit</button>
      </div>
  </div>
  )
}

export default Register
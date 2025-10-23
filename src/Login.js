import React, { useState } from 'react'
import "./Login.css"

import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import LockOpenRoundedIcon from '@mui/icons-material/LockOpenRounded';

const Login = () => {
    const [action,setAction]= useState("Login")
  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>
      <div className='inputs'>
        {action==="Login"?<></>:<div className='input'>
        <img src={InsertEmoticonIcon} alt=''/>
        <input type='text' placeholder='Name'/>
      </div>}
        
      <div className='input'>
        <img src={MailOutlineRoundedIcon} alt=''/>
        <input type='email' placeholder='Email ID'/>
      </div>
      <div className='input'>
        <img src={LockOpenRoundedIcon} alt=''/>
        <input type='password' placeholder='password'/>
      </div>
      </div>
      {action==="Sign Up"?<></>:<div className='forgot-password'>Lost password? <span>Click here</span></div>}
      <div className='submit-container'>
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sihn Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
      </div>
    </div>
  )
}

export default Login;



import React, { useState} from 'react'
import instance from '../utils/apiClient'
import "../styles/petownerforgotpassword.css";

function PetownerForgotpassword() {
    const [data, setData] = useState({username: ""})
    async function forgot(e){
        e.preventDefault()
        const response = await instance.post("http://localhost:8080/petowner/forgotpassword", data).then(() =>{
            alert("Password changed mail sent successfully")
        }).catch(() => {
            alert("Error")
        })
    }
    function change(e) {
        setData({ ...data, [e.target. name]: e.target.value })

    }
    
    return (
        <>
        <div className='petowner-forgot-pass-container'>
            <form action="" className='petowner-forgot-pass'>
                <label htmlFor="username">Username:</label>
                <input type="email" onChange={change} name='username' />
                <button className='btn btn-success' onClick={forgot}>RESET</button>

            </form>

        </div>
        </>
    )
}

export default PetownerForgotpassword;

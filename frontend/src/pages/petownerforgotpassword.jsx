import React, { useState} from 'react'

function PetownerForgotpassword() {
    const [data, setData] = useState({username})
    function change() {

    }
    function submit() {

    }
    return (
        <>
        <div className='petowner-forgot-pass-container'>
            <form action="" className='petowner-forgot-pass'>
                <label htmlFor="username">Username:</label>
                <input type="email" onChange={change} name='username' />
                <button className='btn btn-success' onClick={submit}>RESET</button>

            </form>

        </div>
        </>
    )
}

export default PetownerForgotpassword;

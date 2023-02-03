
import { useState } from 'react';
import '../css/styles.css';


const Login = () => {
    // First Name, Last Name, Username, Password, Gender, Tech Stack
    const [formData, setFormData] = useState({
        username : '',
        password : '',
        status : false,


    })

    const handleOnChange = (event) => {{
            if(event.target.name === 'status') {
                let copy = {...formData}

                if(event.target.checked) {
                    copy.status = true
                }else {
                    copy.status = false
                }

                setFormData(copy)
            }else{
                setFormData(() => ({
                    ...formData,
                    [event.target.name] : event.target.value
                }))
            }
        }

    }
    const submitForm = (event) => {
        event.preventDefault()
        console.log(formData)
    }

    return(
        <div className="r-form">
            <form className="p-4 position-absolute top-50 start-50 translate-middle border border-danger rounded-5" style={{backgroundColor: 'none'}}>

                <h1>Login Form</h1>
                <label htmlFor="username">Username:</label>
                    <input type='text' name='username' id='username' onChange={handleOnChange} className='form-control mb-3'></input>
                <label htmlFor="password">Password:</label>
                    <input type='password' name='password' id='password' onChange={handleOnChange} className='form-control mb-3'></input>

                <div className='form-check'>
                    <input className='form-check-input' type='checkbox' onChange={handleOnChange} name='status' id='status' value='true'/>
                    <label className='form-check-label'>Remember Me</label>
                </div>
                <br/>

            <div className="submit-btn">
                <button onClick={submitForm} className="btn btn-primary d-block w-100">Submit</button>
            </div>


            </form>
        </div>
    )
}

export default Login;
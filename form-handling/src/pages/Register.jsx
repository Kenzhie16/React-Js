
import { useState } from 'react';
import '../css/styles.css';


const Register = () => {
    // First Name, Last Name, Username, Password, Gender, Tech Stack
    const [formData, setFormData] = useState({
        firstName : '',
        lastName : '',
        username : '',
        password : '',
        gender : '',
        techstack : []
    })

    const handleOnChange = (event) => {
        if(event.target.name === 'techstack') {
            let copy = {...formData}

            if(event.target.checked) {
                copy.techstack.push(event.target.value)
            }else {
                copy.techstack = copy.techstack.filter(el => el !== event.target.value )
            }
            setFormData(copy)
        }else{
            setFormData(() => ({
                ...formData,
                [event.target.name] : event.target.value
            }))
        }

    }
    const submitForm = (event) => {
        event.preventDefault()
        console.log(formData)
    }

    return(
        <div className="r-form">
            <form className="p-4 position-absolute top-50 start-50 translate-middle border border-danger rounded-5" style={{backgroundColor: 'none'}}>

                <h1>Registration Form</h1>
                <label htmlFor="firstName">First Name:</label>
                    <input type='text' name='firstName' id='firstName' onChange={handleOnChange} className='form-control mb-4'></input>
                <label htmlFor="lastName">Last Name:</label>
                    <input type='text' name='lastName' id='lastName' onChange={handleOnChange} className='form-control mb-3'></input>
                <label htmlFor="username">Username:</label>
                    <input type='text' name='username' id='username' onChange={handleOnChange} className='form-control mb-3'></input>
                <label htmlFor="password">Password:</label>
                    <input type='password' name='password' id='password' onChange={handleOnChange} className='form-control mb-3'></input>
                <label htmlFor="gender">Gender:</label>
                <select onChange={handleOnChange}className='form-control mb-3' name='gender' id='gender'>
                    <option disable="true">Please select</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                    <option value='Prefer not to say'>Prefer not to say</option>
                </select>
                <h6>Tech Stack:</h6>
                <div className='form-check'>
                    <input className='form-check-input' type='checkbox' onChange={handleOnChange} name='techstack' id='html' value='html'/>
                    <label className='form-check-label' htmlFor='html'>HTML</label>
                </div>
                <div className='form-check'>
                    <input className='form-check-input' type='checkbox' onChange={handleOnChange} name='techstack' id='css' value='css'/>
                    <label className='form-check-label' htmlFor='css'>CSS</label>
                </div>
                <div className='form-check'>
                    <input className='form-check-input' type='checkbox' onChange={handleOnChange} name='techstack' id='js' value='javascript' />
                    <label className='form-check-label' htmlFor='js'>JavaScript</label>
                </div>
                <div className='form-check'>
                    <input className='form-check-input' type='checkbox' onChange={handleOnChange} name='techstack' id='reactjs' value='reactjs' />
                    <label className='form-check-label' htmlFor='reactjs'>React JS</label>
                </div>
                <div className='form-check'>
                    <input className='form-check-input' type='checkbox' onChange={handleOnChange} name='techstack' id='python' value='python'/>
                    <label className='form-check-label' htmlFor='python'>Python</label>
                </div>
                <br/>
            <div className="submit-btn">
                <button onClick={submitForm} className="btn btn-primary d-block w-100">Submit</button>
            </div>

            </form>
        </div>
    )
}

export default Register;
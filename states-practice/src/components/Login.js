

function Login() {
    return(
        <div className='login-card'>
            <div className="card">
                <div className="card-body">
                    <form className="form-group">
                        <label htmlFor="username">Username:<input name="username" className="form-control"></input>
                        </label>
                        <br/>
                        <label htmlFor="password">Password:<input type="password" className="form-control"></input>
                        </label>
                        <br/><br/>
                        <button className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Login;
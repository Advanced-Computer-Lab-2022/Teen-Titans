

const Login = () => {

    return(
        <div>
            <h2>Log in</h2>
            <div className='Login page'>

                <label>Enter your username:</label>
                <input username ='username'></input>
                <label>Enter your password:</label>
                <input password ='password'></input>
                <button onClick={() => window.location.href = `/`} > log in</button>

                <a href = "/RegisterPage"> Register </a>
            </div>
        </div>
    )
}
export default Login
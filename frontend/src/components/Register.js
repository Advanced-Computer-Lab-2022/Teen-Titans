const Register = () => {

    return(
        <div>
            <h2>Register</h2>
            <div className='Register page'>

                <label>Enter your username:</label>
                <input username ='username'></input>
                <label>Enter your password:</label>
                <input password ='password'></input>
                <button onClick={() => window.location.href = `/`} > Sign up</button>
                <a href = "/InstructorHomePage"> Log in </a>
            </div>
        </div>
    )
}
export default Register
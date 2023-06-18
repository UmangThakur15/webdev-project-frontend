export const Register = () => {
    return(
        <form>
            <h1>Welcome to MovieFlix</h1>
            <h3>Sign Up as a new user</h3>
            <label style={{marginRight: "1%"}} for="username">Username</label>
            <input type="text" placeholder="username123" 
                id="login_uname" name="username"></input><br/><br/>
            <label style={{marginRight: "1%"}} for="password">Password</label>
            <input type="password" placeholder="*****" 
                id="login_pword" name="password"></input><br/><br/>
            <button type="submit">Register</button>
            <p>Already have an account? <button>Login Here</button></p>
        </form>
    )
}
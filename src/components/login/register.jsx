export const Register = () => {
    return(
        <form style={{marginTop: "11%"}}>
            <h1>Welcome to MovieFlix</h1>
            <h3>Sign Up as a new user</h3><br/><br/>
            <label style={{marginRight: "1%"}} for="fname">First Name</label>
            <input type="text" placeholder="Jane" 
                id="register_fname" name="ufname"></input><br/><br/>
            <label style={{marginRight: "1%"}} for="lname">Last Name</label>
            <input type="text" placeholder="Doe" 
                id="register_lname" name="ulname"></input><br/><br/>
            <label style={{marginRight: "1%"}} for="username">Username</label>
            <input type="text" placeholder="janedoe123" 
                id="register_uname" name="username"></input><br/><br/>
            <label style={{marginRight: "1%"}} for="password">Password</label>
            <input type="password" placeholder="*****" 
                id="register_pword" name="password"></input><br/><br/><br/>
            <p><input style={{marginRight: "0.5%"}} type="checkbox"></input>You agree to our terms and conditions</p>
            <button type="submit">Register</button><br/><br/>
            <p>Already have an account? <button>Login Here</button></p>
        </form>
    )
}
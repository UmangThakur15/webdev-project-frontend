export const Login = () => {
    return(
        <form style={{marginTop: "12%"}}>
            <h1>Welcome to MovieFlix!</h1>
            <h2>It's great having you back! Let's binge!</h2><br/>
            <h3>Login Here</h3>
            <label style={{marginRight: "1%"}} for="username">Username</label>
            <input type="text" placeholder="janedoe123" 
                id="login_uname" name="username"></input><br/><br/>
            <label style={{marginRight: "1%"}} for="password">Password</label>
            <input type="password" placeholder="*****" 
                id="login_pword" name="password"></input><br/><br/>
            <button type="submit">Login</button><br/><br/>
            <p>Don't have an account? <button>Register Here</button></p>
        </form>
    )
}
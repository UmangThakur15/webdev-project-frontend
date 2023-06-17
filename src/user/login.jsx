export const Login = () => {
    return(
        <form>
            <label for="username">Username</label>
            <input type="text" placeholder="username123" 
                id="login_uname" name="username"></input>
            <br></br>
            <label for="password">Password</label>
            <input type="password" placeholder="*****" 
                id="login_pword" name="password"></input>
        </form>
    )
}
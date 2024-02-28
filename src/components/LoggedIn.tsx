import { useState } from "react"
export const LoggedIn = ()=>{
    const [isLoggedIn,setLoggedIn]=useState(false)

    const handleLogin =()=>{
        setLoggedIn(true)

    }

    const handleLogout = ()=>{
        setLoggedIn(false)

    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User is {isLoggedIn?'loggedin':'logged out'}</div>
        </div>
    )
}
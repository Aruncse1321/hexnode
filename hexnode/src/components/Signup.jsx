import React from 'react'
import "../styles/Signup.css"
const Signup = () => {
    return (
        <div id="signup">
            <div className="container background" >
                <div className="signup-content">
                    <h1>Sign up and try Hexnode free for 14 days!</h1>
                    <p>Talk to our experts to see how Botree Software empowers your brand.</p>
                    <button className="btn">Get Started</button>
                </div>
                <div className="shadow">
                    <img src="/acc-main.png" />
                </div>

            </div>
        </div>
    )
}

export default Signup

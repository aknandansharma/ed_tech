import React, {useState} from "react";
import "./SignIn.css";

const SignIn = () => {

    const[username, setUsername] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    // register the users
    const registerUser = async (e) => {
        e.preventDefault()

        const res = await fetch('http://localhost:8080/register', {  
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username, email, password
            })
        })

        const data = await res.json()
        console.log(data)
        console.log(data.status)

        if(data.status === 422 || !data){
            window.alert('Invalid Registration')
        }else{
            window.alert('Registration Successfull')
        }
    }

    return (
            <div id='container'>
                <div className='main'>
                    <input type='checkbox' id='chk' aria-hidden='true' />
                    {/* this is sign up/Register part */}
                    <div className='signup'>
                        <form onSubmit={registerUser}>
                            <label htmlFor='chk' aria-hidden='true'>
                                Sign up
                            </label>
                            <input
                                type='text'
                                name='txt'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder='UserName'
                                required
                            />
                            <input
                                type='email'
                                name='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Email'
                                required
                            />
                            <input
                                type='password'
                                name='pswd'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='Password'
                                required
                            />
                            <button id='logBTN'>Sign up</button>
                        </form>
                    </div>

                    {/* this is Signup/login part */}
                    <div className='login'>
                        <form>
                            <label htmlFor='chk' aria-hidden='true'>
                                Login
                            </label>
                            <input
                                type='email'
                                name='email'
                                placeholder='Email'
                                required
                            />
                            <input
                                type='password'
                                name='pswd'
                                placeholder='Password'
                                required
                            />
                            <button id='logBTN'>Login</button>
                        </form>
                    </div>
                </div>
            </div>
    );
};

export default SignIn;

import React from "react";

function Login() {
    return (
        <div id="log">
            <form className="relative left-1/3 w-2/4 h-96 flex-col login">
            <div className="relative left-0.5">
            <div className="mail">
                <i class="fa-regular fa-envelope text-5xl relative -left-3 top-3"></i>
                <input type="text" placeholder="Email" className="bg-slate-500 w-64 p-3 rounded-2xl text-slate-50" ></input>
            </div><br></br>
            <div className="password">
                <i class="fa-solid fa-key text-5xl relative -left-3 top-3"></i>
                <input type="password" placeholder="password" className="bg-slate-500 w-64 p-3 rounded-2xl text-slate-50" ></input>
            </div><br></br>
            <div>
            <button type="submit" placeholder="Login" className="bg-green-600 p-2 rounded-2xl w-56 text-2xl text-slate-300 cursor-pointer relative left-20">Login</button>
            </div><br></br>
            <div>
            <button className="bg-red-600 p-2 rounded-2xl w-56 text-2xl text-slate-300 cursor-pointer relative left-20">Signup</button>
            </div><br></br>
            <div>
            <a href="" className="text-blue-800 underline text-xl relative left-20">Forgot Password?</a>
            </div>
            </div>
            </form>
        </div>    
        );
};

export default Login;
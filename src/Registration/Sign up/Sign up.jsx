

import Back from "../img/pic1.png";  

function Signup() {  
    return (  
        <>  
            <div className="flex items-center min-h-screen">  
                <div className="flex-1">  
                    <img src={Back} alt="Background" className="w-full h-full object-cover" />  
                </div>  
                <div className="p-6 bg-white rounded-md shadow-md">  
                    <h1 className="text-blue-700 font-extrabold text-4xl py-5">Login</h1>  
                    <p className="mb-4">Please enter your login details to sign in</p>  
                    <input className="border rounded p-2 mb-4 w-full" type="text" placeholder="Full Name" />  
                    <input className="border rounded p-2 mb-4 w-full" type="email" placeholder="Email Address" />  
                    <input className="border rounded p-2 mb-4 w-full" type="password" placeholder="Password" />  
                    <button className="bg-blue-700 text-white rounded p-2 w-full">Sign Up</button>  
                    <p className="mt-4">Don't have an account? <a href="#" className="text-blue-500">Log in</a></p>  
                    <p className="mt-2">or continue with</p>  
                </div>  
            </div>  
        </>  
    )  
}  

export default Signup;
import BackgroundImage from "../img/pic1.png"; 
function SignIn() { 
    return (  
        <>  
            <div className="flex items-center ml-60 gap-6 ">  
                <div>  
                    <img src={BackgroundImage} /> {}  
                </div>  
                <div className="">  
                    <h1 className="text-blue-700 font-extrabold text-4xl py-5">Login</h1>  
                    <p className="text-current">Please enter your login details to sign in</p>  
                    <div className="flex flex-col gap-3 p-5">  
                        <input className="border p-3 rounded-lg" type="text" placeholder="Email address" />  
                        <input className="border p-3 rounded-lg" type="password" placeholder="Password" />  {}  
                    </div>  
                    <button className="text-center border-black border-2 rounded-lg p-2 bg-blue-700 w-6/12 ml-5">Log in</button>  
                    <div className="flex flex-row-reverse gap-2 mt-3">  
                        <p>Don't have an account? Sign up</p> {}  
                        <input type="checkbox" />  
                    </div>  
                    <p className="ml-10 text-center">or continue with</p>  
                </div>  
            </div>  
        </>  
    )  
}  
export default SignIn;
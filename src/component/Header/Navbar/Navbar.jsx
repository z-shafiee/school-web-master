import { NavLink } from "react-router-dom";  
import Navimg from "../../img/Top Banner.png";  
import Iconbtn from "../../img/shape-14.png";  

function Navbar() {  
                                     
              return (  
        <header className="m-10">  
            <h1>  
                <img src={Navimg} alt="Top Banner" />  
            </h1>  
            <nav className="flex border-solid border-black mt-3 items-center justify-between">  
                <div className="flex items-center">  
                    <button className="bg-orange-400 p-2 rounded-lg flex items-center mr-10">  
                        <img className="mr-2" src={Iconbtn} alt="Little Learners Icon" />  
                        Little Learners  
                    </button>  
                </div>  
                <div className="flex gap-10 text-center">  
                    <NavLink to='/Home' className={({ isActive }) => (isActive ? "text-orange-500 font-bold" : "text-black")}>  
                        Home  
                    </NavLink>  
                    <NavLink to='/About' className={({ isActive }) => (isActive ? "text-orange-500 font-bold" : "text-black")}>  
                        About  
                    </NavLink>  
                    <NavLink to='/Academics' className={({ isActive }) => (isActive ? "text-orange-500 font-bold" : "text-black")}>  
                        Academics  
                    </NavLink>  
                    <NavLink to='/StudentLife' className={({ isActive }) => (isActive ? "text-orange-500 font-bold" : "text-black")}>  
                        Student Life  
                    </NavLink>  
                    <NavLink to='/login' className={({ isActive }) => (isActive ? "text-orange-500 font-bold" : "text-black")}>  
                        Login  
                    </NavLink>  
                </div>  
                <button className="bg-orange-400 p-2 rounded-lg w-40 hover:bg-orange-200" aria-label="Contact Us">  
                    Contact  
                </button>  
            </nav>  
        </header>  
    );  
}  

export default Navbar;
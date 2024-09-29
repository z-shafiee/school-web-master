import Phone from "../img/Icon(02).png";
import Location from "../img/Icon(03).png";
import Massage from "../img/Icon(01).png";
import Btn from "../img/Buttons Container.png";
import Logo from "../img/shape-14.png";
function Footer() {
    return (
        <>
            <footer className="bg-orange-200 ">
                <div>
                    <div className="flex pt-24 m-10 gap-10">
                        <ul>

                            <li className="flex font-bold items-center gap-2 text-xl"><img src={Logo} /><a href="">Little Learners</a></li>
                            <p>We believe in the power problem-solving skills, and imagination.</p>
                            <li className="flex items-center gap-2 mt-1"> <img src={Massage} /><a href="">hello@littlelearners.com</a></li>
                            <li className="flex items-center gap-2 mt-1"> <img src={Phone} /><a href="">+91 91813 23 2309</a></li>
                            <li className="flex items-center gap-2 mt-1"> <img src={Location} /><a href="">Somewhere in the World</a></li>
                        </ul>
                        <ul>
                            <li className="font-bold"><a href="">Home</a></li>
                            <li><a href="">Features</a></li>
                            <li><a href="">Our Testimonials</a></li>
                            <li><a href="">FAQ</a></li>


                        </ul>
                        <ul>
                            <li className="font-bold"><a href="">About Us</a></li>
                            <li><a href="">Our Mission</a></li>
                            <li><a href="">Our Vission</a></li>
                            <li><a href="">Awards and Recognitions</a></li>
                            <li><a href="">History</a></li>
                            <li><a href="">Teachers</a></li>
                        </ul>
                        <ul>
                            <li className="font-bold"><a href="">Academics</a></li>
                            <li><a href="">Special Features</a></li>
                            <li><a href="">Gallery</a></li>
                        </ul>
                        <ul>
                            <li className="font-bold"><a href="">Contact Us</a></li>
                            <li><a href="">Information</a></li>
                            <li><a href="">Map & Direction</a></li>
                        </ul>
                       
                    </div>
                    <hr className="bg-black"/>
                    <div className="flex items-center justify-around gap-96 p-">
                       
                        <p><a href="">Terms of Use | Privacy Policy | Cookie Policy</a></p>
                        <img src={Btn} />
                    </div>
                </div >
            </footer >
        </>
    )
}
export default Footer;
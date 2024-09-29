import FirstIcon from "../img/Icon.png";  
import SecondIcon from "../img/Icon(1).png";  
import ThirdIcon from "../img/Icon(2).png";  
import FourthIcon from "../img/Icon(3).png";  
import FifthIcon from "../img/Icon(4).png";  
import VectorIcon from "../img/Vector(1).png";  
import ContainerIcon from "../img/Icon Container.png";  

function Advantages() {  
    return (  
        <>  
            <div className="text-center margin-top-52 margin-10">  
                <button className="text-center border-gray-800 border-2 rounded-lg padding-1">Bright Future for Children</button>  
                <h1 className="text-2xl font-semibold margin-y-4">Our Advantages</h1>  
                <p>With a devoted team of skilled educators, modern facilities, and a comprehensive curriculum, we strive to create a solid foundation for your child's future.</p>  
            </div>  
            <div className="flex-center margin-10">  
                <div className="flex justify-around margin-top-10 gap-10">  

                    <div className="border-2 border-gray-800 padding-7 rounded-lg shadow-lg shadow-gray-800 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">  
                        <img className="bg-yellow-200 padding-2 rounded-lg" src={FirstIcon}/>  
                        <h3 className="text-lg text-black font-medium">Comprehensive Learning Method</h3>  
                        <p className="text-inherit width-80">Our program emphasizes the development of cognitive, social, emotional, and physical skills, ensuring a holistic education.</p>  
                    </div>  

                    <div className="border-2 border-gray-800 padding-7 rounded-lg shadow-lg shadow-gray-800 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">  
                        <img className="bg-yellow-200 padding-2 rounded-lg" src={VectorIcon} />  
                        <h3 className="text-lg text-black font-medium">Qualified Educators</h3>  
                        <p className="width-80">Our dedicated and qualified teachers foster a supportive and enriching learning environment.</p>  
                    </div>  

                    <div className="border-2 border-gray-800 padding-7 rounded-lg shadow-lg shadow-gray-800 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">  
                        <img className="bg-yellow-200 padding-2 rounded-lg" src={FifthIcon} />  
                        <h3 className="text-lg text-black font-medium">Supportive Environment</h3>  
                        <p className="width-80">We focus on safety and provide a nurturing and caring space for every child.</p>  
                    </div>  
                </div>  
                <div className="flex justify-around gap-10 margin-top-10">  

                    <div className="border-2 border-gray-800 padding-7 rounded-lg shadow-lg shadow-gray-800 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">  
                        <img className="bg-yellow-200 padding-2 rounded-lg" src={FourthIcon} />  
                        <h3 className="text-lg text-black font-medium">Learning Through Play</h3>  
                        <p className="width-80">We believe in the importance of play to boost creativity, problem-solving abilities, and imagination.</p>  
                    </div>  

                    <div className="border-2 border-gray-800 padding-7 rounded-lg shadow-lg shadow-gray-800 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">  
                        <img className="bg-yellow-200 padding-2 rounded-lg" src={SecondIcon} />  
                        <h3 className="text-lg text-black font-medium">Personalized Attention</h3>  
                        <p className="width-80">Our small class sizes provide tailored attention that meets each child's unique requirements.</p>  
                    </div>  

                    <div className="border-2 border-gray-800 padding-7 rounded-lg shadow-lg shadow-gray-800 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">  
                        <img className="bg-yellow-200 padding-2 rounded-lg " src={ThirdIcon} />  
                        <h3 className="text-lg text-black font-medium">Parental Engagement</h3>  
                        <p className="width-80">We promote a robust partnership between parents and school to ensure effective communication and collaboration.</p>  
                    </div>  
                </div>  
            </div>  
        </>  
    )  
}  

export default Advantages;  // نام تابع و بخش exports تغییر کرد.
import Art from "../image/3.png";  
import Sports from "../image/2.png";  
import Science from "../image/1.png";  
import Games from "../image/4.png";  
import Culinary from "../image/6.png";  
import Languages from "../image/5.png";  

function Activities() {  
    return (  
        <>  
            <div>  
                <div className="text-center mt-52 m-10">  
                    <button className="text-center border-black border-2 rounded-lg p-1">Discover Our Activities</button>  
                    <h1 className="text-2xl font-bold my-4">Enrichment Programs</h1>  
                    <p>At Little Learners Academy, we are committed to fostering holistic development. Our enrichment programs encompass a variety of experiences that enhance our academic offerings and inspire students to delve into their interests. Here are some of the programs we provide:</p>  
                </div>  
                <div className="items-center m-10">  
                    <div className="flex justify-around mt-10 gap-10">  

                        <div className="border-2 border-black p-7 rounded-lg shadow-lg shadow-black cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">  
                            <img className="bg-orange-200 p-2 rounded-lg" src={Science} alt="Science Club" />  
                            <h3 className="text-lg text-black font-medium">Exploratory Science</h3>  
                            <p className="text-inherit w-80">Our science program invites young explorers to engage in exciting experiments and interactive learning opportunities.</p>  
                        </div>  

                        <div className="border-2 border-black p-7 rounded-lg shadow-lg shadow-black cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">  
                            <img className="bg-orange-200 p-2 rounded-lg" src={Sports} alt="Sports and Athletics" />  
                            <h3 className="text-lg text-black font-medium">Athletic Excellence</h3>  
                            <p className="w-80">Students can join various sports, from soccer to gymnastics, fostering teamwork, fitness, and self-discipline.</p>  
                        </div>  

                        <div className="border-2 border-black p-7 rounded-lg shadow-lg shadow-black cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">  
                            <img className="bg-orange-200 p-2 rounded-lg" src={Art} alt="Art and Creativity" />  
                            <h3 className="text-lg text-black font-medium">Creative Expression</h3>  
                            <p className="w-80">Our art classes provide students a platform to showcase their creativity through various artistic mediums.</p>  
                        </div>  
                    </div>  
                    <div className="flex justify-around gap-10 mt-10">  

                        <div  
                        className="border-2 border-black p-7 rounded-lg shadow-lg shadow-black cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">  
                            <img className="bg-orange-200 p-2 rounded-lg" src={Games} alt="Music and Performing Arts" />  
                            <h3 className="text-lg text-black font-medium">Musical Journey</h3>  
                            <p className="w-80">Students can explore their musical talents through instruments, singing, and drama performances.</p>  
                        </div>  

                        <div className="border-2 border-black p-7 rounded-lg shadow-lg shadow-black cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">  
                            <img className="bg-orange-200 p-2 rounded-lg" src={Languages} alt="Language Clubs" />  
                            <h3 className="text-lg text-black font-medium">Cultural Connections</h3>  
                            <p className="w-80">Our language clubs allow students to discover new languages and cultures through engaging activities.</p>  
                        </div>  

                        <div className="border-2 border-black p-7 rounded-lg shadow-lg shadow-black cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">  
                            <img className="bg-orange-200 p-2 rounded-lg" src={Culinary} alt="Cooking and Culinary Arts" />  
                            <h3 className="text-lg text-black font-medium">Culinary Skills</h3>  
                            <p className="w-80">Cooking classes introduce students to the joys of preparing delicious and healthy meals.</p>  
                        </div>  
                    </div>  
                </div>  
            </div>  
        </>  
    )  
}  

export default Activities;
import Headimg from "../../img/Image Container.png";  

function Main() {  
    return (  
        <>  
            <div className="flex m-10 gap-16">  
                <div className="w-3/6">  
                    <img src={Headimg} alt="Welcome to Little Learners Academy" className="w-full h-auto object-cover" />  
                </div>  
                <div className="w-3/6 mt-48">  
                    <p className="text-xl font-medium">Welcome to Little Learners Academy</p>  
                    <hr className="w-full my-4" />  
                    <h1 className="text-2xl font-bold w-4/5">  
                        Where Young Minds Blossom and <span className="text-amber-500">Dreams Take Flight.</span>  
                    </h1>  
                    <p className="w-96 mt-8">  
                        Our kindergarten school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!  
                    </p>  
                    <div className="flex gap-8 shadow-xl p-5 shadow-orange-500 rounded-lg mt-8 bg-orange-200 border-2 font-bold w-auto">  
                        <div className="text-center">  
                            <h1 className="text-3xl">+7000</h1>  
                            <p>Students Passed Out</p>  
                        </div>  
                        <div className="text-center">  
                            <h1 className="text-3xl">+37</h1>  
                            <p>Awards & Recognitions</p>  
                        </div>  
                        <div className="text-center">  
                            <h1 className="text-3xl">+15</h1>  
                            <p>Experienced Educators</p>  
                        </div>  
                    </div>  
                </div>  
            </div>  
        </>  
    );  
}  

export default Main;
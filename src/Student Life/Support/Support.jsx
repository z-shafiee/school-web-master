import Lamp from "../image/7.png";
import Book from "../image/8.png";
import Human from "../image/9.png";
function Support() {
    return (
        <>
            <div className="m-10">
                <div className="text-center mt-52 m-10">
                    <button className="text-center border-black border-2 rounded-lg p-1">Our Achievements</button>
                    <h1 className="text-2xl font-bold my-4">Student Support</h1>
                    <p>At Little Learners Academy, we are committed to providing a supportive and nurturing environment that meets the unique needs of each student. Our student support services include</p>
                </div>
                <div className="items-center m-10 flex justify-around  mt-10  gap-10 ">
                    <div className="border-2 m-10 border-black p-7 rounded-lg shadow-lg shadow-black cursor-pointer  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
                        <img className="bg-orange-200 p-2 rounded-lg" src={Lamp} />
                        <h1 className="text-lg text-black font-medium">Counseling</h1>
                        <p className="text-inherit w-80">Professional counselors offer guidance and support to students, addressing their emotional and social well-being.</p>
                    </div>
                    <div className="items-center m-10  justify-around  mt-10  gap-10 border-2  border-black p-7 rounded-lg shadow-lg shadow-black cursor-pointer  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
                        <img className="bg-orange-200 p-2 rounded-lg " src={Book} />
                        <h1 className="text-lg text-black font-medium">Learning Support</h1>
                        <p className="text-inherit w-80">Our educators provide additional assistance to students who may require extra support in their academic journey.</p>
                    </div>
                    <div className="items-center m-10  justify-around  mt-10  gap-10 border-2  border-black p-7 rounded-lg shadow-lg shadow-black cursor-pointer  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
                        <img className="bg-orange-200 p-2 rounded-lg" src={Human} />
                        <h1 className="text-lg text-black font-medium">Parent-Teacher Collaboration</h1>
                        <p className="text-inherit w-80">We foster a strong partnership with parents to ensure seamless communication and mutual support in a child's development.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Support;
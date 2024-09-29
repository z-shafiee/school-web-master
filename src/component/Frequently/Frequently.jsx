import React, { useState } from 'react';  



function Frequently() {

    
                            
    
    const faqData = [  
        {  
            question: "What are the school hours at Little Learners Academy?",  
            answer: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday."  
        },  
        {  
            question: "Is there a uniform policy for students?",  
            answer: "Yes, there is a uniform policy for all students."  
        },  
        {  
            question: "What extracurricular activities are available for students?",  
            answer: "We offer various extracurricular activities including sports, arts, and music."  
        },  
        {  
            question: "How do you handle food allergies and dietary restrictions?",  
            answer: "We have specific guidelines to manage allergies and dietary restrictions."  
        },  
        {  
            question: "What is the teacher-to-student ratio at Little Learners Academy?",  
            answer: "The teacher-to-student ratio is typically 1:10."  
        },  
        {  
            question: "How do you handle discipline and behavior management?",  
            answer: "We promote positive behavior management techniques."  
        },  
        {  
            question: "How do I apply for admission to Little Learners Academy?",  
            answer: "You can apply through our website or by visiting our office."  
        }  
    ];  

    const [openIndex, setOpenIndex] = useState(null);  

    const toggleAnswer = (index) => {  
        setOpenIndex(openIndex === index ? null : index);  
    };  

    return (  
        <section className="m-10">  
            <div className="text-center mt-52">  
                <button className="text-center border-black border-2 rounded-lg p-2 mb-4 hover:bg-gray-200 transition">Solutions For The Doubts</button>  
                <h2 className="text-2xl font-bold my-4">Frequently Asked Questions</h2>  
                <p className="p-Frequently w-3/4 mx-auto">  
                    Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education.  
                </p>  
            </div>  
            <div className="all-freqnce">  
                {faqData.map((item, index) => (  
                    <div key={index} className="border-black border-2 rounded-lg p-5 bg-orange-100 m-4 shadow-md transition-transform transform hover:scale-105">  
                        <div className="flex justify-between items-center">  
                            <h4 className="text-lg text-black font-medium">{item.question}</h4>  
                            <button  
                                className="border-black border-2 rounded-full w-8 h-8 flex items-center justify-center"  
                                onClick={() => toggleAnswer(index)}  
                            >  
                                {openIndex === index ? '-' : '+'}  
                            </button>  
                        </div>  
                        {openIndex === index && (  
                            <div className="mt-2">  
                                <p>{item.answer}</p>  
                            </div>  
                        )}  
                    </div>  
                ))}  
            </div>  
        </section>  
    );  
}  

export default Frequently;
import React from "react";
import Events from "./Events/Events";
function Products({ image, title, text }) {
    return (
        <>
            <div className="flex gap-10">
                <section className=" text-center border-black border-2 rounded-lg p-1 items-center ">
                    <div className="flex items-center ">
                        <img src={image} />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold my-4">{title}</h1>
                        <p >{text}</p>
                    </div>
                </section>
            </div>
        </>
    )
}
export default Products;
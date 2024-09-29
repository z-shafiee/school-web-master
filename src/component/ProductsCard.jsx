import React from "react";

function ProductsCard({ image, title, text }) {
    return (
        <>
            <div className="flex h-full">
                <section className=" text-center border-black border-2 rounded-lg p-1 bg-orange-200  shadow-black cursor-pointer  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
                    <div >
                        <img className="items-center "  src={image} />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold my-4">{title}</h1>
                        <p className="p-12">{text}</p>
                    </div>
                </section>
            </div>
        </>
    )
}
export default ProductsCard;
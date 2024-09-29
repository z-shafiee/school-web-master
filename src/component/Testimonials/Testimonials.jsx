import ProductsCard from "../ProductsCard";
import axios from "axios";
import { useEffect, useState } from "react";

function Testimonials() {
    const [products, setProducts] = useState([]);

    async function getProducts() {
        try {
            const response = await axios.get("http://localhost:8080/card");
            const datas = response.data;
            console.log(datas);
            setProducts(datas);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>
            <div className="m-10 ">
                <div className="text-center mt-52 m-10 items-center ">
                    <button className="text-center border-black border-2 rounded-lg p-1">Their Happy Words 🤗</button>
                    <h1 className="text-2xl font-bold my-4">Our Testimonials</h1>
                    <p>Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally.</p>
                </div>
            <div className="flex  gap-7">
                {products.map((item) => (
                    <ProductsCard key={item.id} {...item} />
                ))}
            </div>
             
            </div>
        </>
    );
}
export default Testimonials;

import axios from "axios";  
import { useEffect, useState } from "react";  
import ProductCard from "../Product"; 

function EventList() {  
  const [items, setItems] = useState([]);  

  const fetchProducts = async () => { // 
    try {  
      const response = await axios.get("http://localhost:8080/student");  
      const data = response.data;  
      console.log(data);  
      setItems(data); 
    } catch (error) {  
      console.error("Error fetching products:", error);  
    }  
  };  

  useEffect(() => {  
    fetchProducts(); 
  }, []);  

  return (  
    <>  
      <div className="m-10 items-center">  
        <div className="text-center mt-52 m-10 items-center gap-10">  
          <button className="text-center border-black border-2 rounded-lg p-1">  
            Features We Offer  
          </button>  
          <h1 className="text-2xl font-bold my-4">Celebrations & Events</h1>  
          <p> At Little Learners Academy, we value every moment and create lasting memories for our students. Throughout the academic year, we organize various events and gatherings that unite the entire community. Some of our standout celebrations include  
          </p>  
        </div>  
        <div className="flex gap-5">  
          {items.map((product) => ( 
            <ProductCard key={product.id} {...product} />  
          ))}  
        </div>  
        <div>  
          <ProductCard /> {}  
        </div>  
      </div>  
    </>  
  );  
}  
export default EventList; 
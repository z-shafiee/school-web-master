
import Advantages from "./Advantages/Advantages";
import Testimonials from "./Testimonials/Testimonials";

import Frequently from "./Frequently/Frequently";
import ProductsCard from "./ProductsCard";



import Main from "./Header/Main/Main";
function Home() {
  return (
    <>
      <Main />
              <Advantages/>
      <ProductsCard />
          <Frequently />
      <Testimonials />
      <Navigate />
      
    </>
  );
}
export default Home;

import ProductList from "./ProductList";
import useFetch from "./useFetch";

const Home = () => {

    const { data: products, isLoading, error } = useFetch("http://localhost:8000/products");

    return ( 
       <div className="home">
       { error && <p>{error}</p> }
       { isLoading && <p>Loading products ...</p> }
       { products && <ProductList products={ products } />}
       </div>
     );
}
 
export default Home;
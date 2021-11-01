import { Link } from 'react-router-dom';

const ProductList = ({ products }) => {
    


    return ( 
         <div className="product-list">
             <h2>Products List</h2> 

             {products.map((product) => {
                 return (
                     <div className="product-preview" key={product.id}>

                         <Link to={`/products/${product.id}`}>
                            <h3>{product.name}</h3>
                            <h4>{product.category}</h4>
                            <p>{product.Seller}</p>
                            <p>{product.id}</p>
                         </Link>

                     </div>
                 )
             })}
         </div>

     );
}
 
export default ProductList;
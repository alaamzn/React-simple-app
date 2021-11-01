import { useParams } from 'react-router-dom';
import useFetch from './useFetch';
import { useHistory } from 'react-router';

const ProductDetails = () => {
    
    const { id } = useParams();
    const {data: product, isLoading, error } = useFetch("http://localhost:8000/products/" +id);
    const history = useHistory();

    const handleDelete = (() =>{
        fetch('http://localhost:8000/products/' +id, {
            method: 'DELETE'
        })
        .then(() => {
            console.log('Product deleted !!!');
            history.push('/products');
        })
    })
     
    return ( 
           <div className="product-details">

               { error && <div>{ error }</div>}
               
               { isLoading && 
                  <div>Loading product ...</div>
               }

               { product &&
                (
                <div className="product">
                   <h3>{product.name}</h3>
                   <h5>{product.category}</h5>
                   <p>{product.Seller}</p>
                   <button onClick={handleDelete}>Delete product</button>
                 </div>
                )
                 
               }
           </div>
     );
}
 
export default ProductDetails;
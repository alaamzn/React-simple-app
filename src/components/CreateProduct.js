import { useState } from "react";
import { useHistory } from "react-router";

const CreateProduct = () => {

    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [Seller, setSeller] = useState('Alaa');
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();
    
    const handleSubmit = ((e) => {
        e.preventDefault();


        setIsLoading(true);

        const productToAdd = { name, category, Seller };

        fetch('http://localhost:8000/products', {
            method: 'POST', 
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(productToAdd)
        })
        .then(() =>{
            console.log('Product Added Successfully');
            setIsLoading(false);
            history.push('/products')
        })
    })
    

    return ( 

        <div className="create-product">
            <form onSubmit={handleSubmit}>
                <label>Product name :</label>
                <input 
                type="text"
                required
                value={name}
                onChange={((e) => setName(e.target.value))}
                />
                <label>Product category :</label>
                <input 
                type="text"
                required
                value={category}
                onChange={((e) => setCategory(e.target.value))}

                />
                <label>Product Seller</label>
                <select
                value={Seller}
                onChange={((e) => setSeller(e.target.value))}
                >
                    <option>First Seller </option>
                    <option>Second Seller</option>
                </select>
                { !isLoading && <button >Add Product</button>}
                { isLoading && <button disabled >Adding Product...</button>}

            </form>
            

            {/* <p>{name}</p>
            <p>{category}</p>
            <p>{Seller}</p> */}
        </div>
     );

}
 
export default CreateProduct;

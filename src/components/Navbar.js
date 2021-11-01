import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <div className="navbar">
            <h2>Ecommerce</h2>
            <div className="links">
               <Link to="/products">Home</Link>
               <Link to="/createproduct"> New product </Link>
            </div>
        </div>
     );
}
 
export default Navbar;
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import CreateProduct from './components/CreateProduct';

function App() {
  return (
    <Router>
      <div className="App">
       <Navbar />
       
       <div className="content">
         <Switch>
           <Route exact path="/products">
             <Home />
           </Route>

           <Route path="/products/:id">
             <ProductDetails />
           </Route>
           
           <Route path="/createproduct">
           <CreateProduct />
           </Route>
               
          

           
         </Switch>
       </div>
      </div>
    </Router>
  );
}

export default App;

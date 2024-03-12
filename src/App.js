import './App.css';
import { Routes,Route } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Nav } from './components/Nav';
import { OrderSummary } from './components/OrderSummary';
import { NoMatch } from './components/NoMatch';
import { Product } from './components/Product';
import { Featured} from './components/Featured';
import { New } from './components/New';
import { Users } from './components/Users'
import { UserDetails } from './components/UserDetails'
import { Admin } from './components/Admin'
function App() {
  return (
    <div className="App">
      <>
      <Nav></Nav>
      <Routes>
        <Route path = '/' element = { <Home />}> </Route> 
        <Route path = 'about' element = { <About />} > </Route> 
        <Route path = 'order-summary' element = { <OrderSummary />} ></Route> 
        <Route path = 'product' element = { <Product />} >
          <Route index element = {<Featured></Featured>} ></Route>
        <Route path = 'featured' element = { <Featured />} > </Route> 
        <Route path = 'new' element = { <New />} > </Route> 
          </Route> 
        <Route path = '*' element = { <NoMatch />} > </Route> 
        <Route path = 'users' element = { <Users />} >
        <Route path = ':userId' element = { <UserDetails />} > </Route> 
        <Route path = 'admin' element = { <Admin />} > </Route>
           </Route> 
        
        </Routes>
      </>   
    </div>
  );
}

export default App;

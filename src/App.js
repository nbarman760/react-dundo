import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'
import Resturantlist from './components/Resturantlist';
import Resturantdetails from './components/Resturantdetails';
import Addresturant from './components/Addresturant';
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Cart from './components/Cart';
function App() {
  const cart = useSelector(state => state.cart);
  console.log(cart);
  return (
    <div className="App">
      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/list">Dundo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/list" className="nav-menu">Home</Link>
              <Link to="/add-resturant" className="nav-menu">Add Restoruant</Link>
              {/* <Link to="/details" className="nav-menu">Resturant Details</Link> */}
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
            <div className="cart-icon">
              <Link to="/cart">
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
              </Link>
              <span>{cart.cartItems.length}</span>
            </div>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route path="/list">
            <Resturantlist />
          </Route>
          <Route path="/details/:id"
            render={props=>(
              <Resturantdetails {...props}/>
            )}
          > 
          </Route>
          <Route path="/add-resturant">
            <Addresturant />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

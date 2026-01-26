import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// import AddReview from './components/add-review';
import MoviesList from './Components/Movies-list';
// import Movie from './components/movie';
// import Login from './components/login';
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/NavBar';
import { Link, Route, Switch } from 'react-router-dom/cjs/react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar bg='light' expand='lg'>
        <NavBar.Brand href='#home'>React Bootstrap</NavBar.Brand>
        <NavBar.Toggle aria-controls='basic-navbar-nav'></NavBar.Toggle>
        <NavBar.Collapse id="basic-navbar-nav">
          <Nav className='mr-auto'>
            <Nav.Link ><Link to={"/movies"}>Movies</Link></Nav.Link>
            <Nav.Link href='#link'>Link</Nav.Link>
          </Nav>
        </NavBar.Collapse>
      </NavBar>

        <Switch>
            <Route exact path={["/", "/movies"]} component={MoviesList}></Route>
        </Switch>
    </div>
  );
}

export default App;
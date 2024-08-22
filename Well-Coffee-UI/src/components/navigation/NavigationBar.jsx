import logo from '../../assets/images/logo-transparent.png';
import './NavigationBar.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = ({ authenticated }) => {
  return (
    <>
     <Navbar className='nav' bg="dark" data-bs-theme="dark" sticky='top' expand='sm' collapseOnSelect>
          <Navbar.Brand>
            <Nav.Link as={Link} to={"/home"}><img src={logo} width='200px' height='30px' /></Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className='mc-3'>
            {authenticated ? (
              <Nav className='ml-auto text-start nav-links'>
                <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                <Nav.Link as={Link} to={"/order"}>Make an Order</Nav.Link>
                <Nav.Link as={Link} to={"/manage"}>Manage Employees</Nav.Link>
                <Nav.Link as={Link} to={"/search"}>Search</Nav.Link>
                <Nav.Link as={Link} to={"/logout"}>Logout</Nav.Link>

              </Nav>
            ) : (
            <Nav className='ml-auto nav-links'>
              <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>
              <NavDropdown align='end'title='Account'>
                <NavDropdown.Item as={Link} to={"/register"}>Register</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            )}
          </Navbar.Collapse> 
      </Navbar>
    </>
  )
}

export default NavigationBar
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";


const MyNav = ({ match, location, history }) => {
    return (
      <Container>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
           
            <Link to="/Register">
                <div className= 'nav-link'>Register</div>
            </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  };
  export default withRouter(MyNav)
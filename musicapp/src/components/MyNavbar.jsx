import { Navbar, Nav } from "react-bootstrap";
//import * as Icon from "react-bootstrap-icons";

function MyNavbar() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary d-flex px-5 d-block d-lg-none"
      bg="dark"
      data-bs-theme="dark"
    >
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />
      {/* <Icon.List
          as={Navbar.Toggle}
          className="text-danger"
          fontSize="44px"
          aria-controls="basic-navbar-nav"
        /> */}
      {/* <Navbar.Brand href="#home">Music</Navbar.Brand> */}

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Novità</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <p className="text-white mb-0 d-flex">
        <img src="../../public/assets/img/apple.svg" className="align-middle" />
        Music
      </p>
      <p className="text-danger mb-0">Accedi</p>
    </Navbar>
  );
}

export default MyNavbar;

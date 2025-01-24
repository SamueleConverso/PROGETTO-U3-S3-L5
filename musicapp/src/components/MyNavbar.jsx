import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

function MyNavbar() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container fluid className="justify-content-around">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* <Navbar.Brand href="#home">Music</Navbar.Brand> */}

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <p className="h1 text-white mb-0 d-flex">
          <img
            src="../../public/assets/img/apple.svg"
            className="align-middle"
          />
          Music
        </p>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;

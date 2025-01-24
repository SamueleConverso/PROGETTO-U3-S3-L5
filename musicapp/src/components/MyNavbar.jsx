import { Navbar, Nav } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { Form } from "react-bootstrap";

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
          <div className="mb-2 mt-2">
            <div
              className="d-flex gap-1"
              style={{
                backgroundColor: "#1F1F1F",
                borderRadius: "6px",
              }}
            >
              <Icon.Search className="text-danger align-self-center ms-2" />
              <Form.Control
                type="search"
                placeholder="Cerca"
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  border: "0",
                  outline: "none",
                  boxShadow: "none",
                }}
              ></Form.Control>
            </div>
          </div>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Novità</Nav.Link>
          <Nav.Link href="#link">Radio</Nav.Link>
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

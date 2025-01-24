import { Navbar, Nav } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { Form } from "react-bootstrap";

function MyNavbar() {
  return (
    <Navbar
      style={{ backgroundColor: "#2E2E2E" }}
      expand="lg"
      className="d-flex px-5 d-block d-lg-none"
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
                placeholder="Cerca..."
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
          <div className="d-flex gap-3">
            <Icon.House className="text-danger align-self-center ms-2" />
            <Nav.Link href="#home">Home</Nav.Link>
          </div>
          <div className="d-flex gap-3">
            <Icon.Grid className="text-danger align-self-center ms-2" />
            <Nav.Link href="#home">Novità</Nav.Link>
          </div>
          <div className="d-flex gap-3">
            <Icon.Broadcast className="text-danger align-self-center ms-2" />
            <Nav.Link href="#home">Radio</Nav.Link>
          </div>
        </Nav>
      </Navbar.Collapse>
      <div className="ms-1 mt-1">
        <p className="text-white mb-0 d-flex">
          <img
            src="../../public/assets/img/apple.svg"
            className="align-middle"
          />
          Music
        </p>
      </div>
      <p className="text-danger mb-0">Accedi</p>
    </Navbar>
  );
}

export default MyNavbar;

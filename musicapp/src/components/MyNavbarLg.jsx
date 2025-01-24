//import { Navbar, Nav, NavDropdown } from "react-bootstrap";
//import * as Icon from "react-bootstrap-icons";

import { Form } from "react-bootstrap";

function MyNavbarLg() {
  return (
    // <Navbar
    //   expand="lg"
    //   className="bg-body-tertiary d-flex px-5 d-none d-lg-block"
    //   bg="dark"
    //   data-bs-theme="dark"
    // >
    //   <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />
    //   {/* <Icon.List
    //       as={Navbar.Toggle}
    //       className="text-danger"
    //       fontSize="44px"
    //       aria-controls="basic-navbar-nav"
    //     /> */}
    //   {/* <Navbar.Brand href="#home">Music</Navbar.Brand> */}

    //   <Navbar.Collapse id="basic-navbar-nav">
    //     <Nav className="me-auto">
    //       <Nav.Link href="#home">Home</Nav.Link>
    //       <Nav.Link href="#link">Link</Nav.Link>
    //       <NavDropdown title="Dropdown" id="basic-nav-dropdown">
    //         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //         <NavDropdown.Item href="#action/3.2">
    //           Another action
    //         </NavDropdown.Item>
    //         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //         <NavDropdown.Divider />
    //         <NavDropdown.Item href="#action/3.4">
    //           Separated link
    //         </NavDropdown.Item>
    //       </NavDropdown>
    //     </Nav>
    //   </Navbar.Collapse>
    //   <p className="text-white mb-0 d-flex">
    //     <img src="../../public/assets/img/apple.svg" className="align-middle" />
    //     Music
    //   </p>
    //   <p className="text-danger mb-0">Accedi</p>
    // </Navbar>
    <>
      <div
        style={{ backgroundColor: "#252526", width: "200px", height: "100vh" }}
      >
        <div>
          <p className="text-white mb-0 d-flex">
            <img
              src="../../public/assets/img/apple.svg"
              className="align-middle"
            />
            Music
          </p>
        </div>

        <div>
          <Form.Control
            type="search"
            placeholder="Cerca"
            className="text-white"
          ></Form.Control>
        </div>

        <div>
          <ul>
            <li>Home</li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default MyNavbarLg;

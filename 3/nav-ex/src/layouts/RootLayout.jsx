import { Navbar, Nav, Container } from "react-bootstrap";
import { homePath, pageOnePath, pageTwoPath } from "../data/paths";
// eslint-disable-next-line react/prop-types
function RootLayout({ children }) {
  return (
    <Container>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/home">Lecture 3</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href={homePath}>Home</Nav.Link>
              <Nav.Link href={pageOnePath}>Page1</Nav.Link>
              <Nav.Link href={pageTwoPath}>Page2</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main>{children}</main>
    </Container>
  );
}

export default RootLayout;

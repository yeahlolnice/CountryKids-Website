import {Navbar, Nav} from 'react-bootstrap';

function NavBar () {
    return (
        <>
            <Navbar bg="light" expand="lg" className="bgColor" style={{outline: "2px solid black"}}>
            <Navbar.Brand href="#home">Country Kids</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" style={{"textColor": "white"}}>
                <Nav.Link href="#About">About</Nav.Link>
                <Nav.Link href="#Gallery">Gallery</Nav.Link>
                <Nav.Link href="#Pricing">Pricing</Nav.Link>
                <Nav.Link href="#Contact">Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
        </>
    )
}
export default NavBar;
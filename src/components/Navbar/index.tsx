import React from "react"
import { Navbar, Container, DropdownButton, Dropdown } from "react-bootstrap"
import { ChevronDown, Menu } from "../Icons"

// Dropdown needs access to the DOM node in order to position the Menu
const CustomToggle = React.forwardRef(({ children, onClick, icon }: any, ref: any) => (
    <a
        href=""
        ref={ref}
        onClick={e => {
            e.preventDefault();
            onClick(e);
        }}
    >
        {/* Render custom icon here */}
        {icon ? icon : <Menu />}
        {children}
    </a>
));

export const _Navbar = () => {
    return (
        <Navbar variant="light" bg="light" className="Small shadow py-0 my-0">
            <Container fluid>
                <Navbar.Brand href="#">
                    <Dropdown
                        className="dropmenustart"
                        align="start"
                        title=""
                        id="dropdown-menu-align-start"
                    >
                        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" />
                        <Dropdown.Menu>
                            <Dropdown.Item eventKey="1">Inicio</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="2">Opción 1</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="3">Opción 2</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="4">Opción 3</Dropdown.Item>
                        </Dropdown.Menu>

                    </Dropdown>
                </Navbar.Brand>
                <Navbar.Toggle />

                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <div className="container">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="rounded-circle" style={{
                                    height: 24,
                                    width: 24,
                                    backgroundColor: "black"
                                }}></div>
                                <DropdownButton
                                    align="end"
                                    title="Pedro P."
                                    id="dropdown-menu-align-end"
                                    variant="link"

                                >
                                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                </DropdownButton>
                                <ChevronDown />
                            </div>
                        </div>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
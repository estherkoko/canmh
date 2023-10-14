'use client';
import { useState } from 'react';
import Link from 'next/link'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
  } from 'reactstrap';
  
  function NavContainer() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div className='container bg-green-mobile'>
        <Navbar className='navbar-expand-xl'>
          <Link href="/" className="navbar-brand">
              <img src='/canmh-logo-name.svg' width={112} height={28} />
          </Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto" navbar>
              <NavItem>
                <Link href="/about" className="nav-link" aria-current="page">About us</Link>
              </NavItem>
              <NavItem>
                <Link href="/directory" className="nav-link">Directory</Link>
              </NavItem>
              <NavItem>
                 <Link href="/meet-team" className="nav-link">Meet Team</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
  
  export default NavContainer;
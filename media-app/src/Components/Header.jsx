import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div>
      <Navbar className="bg-info">
        <Container>
          <Navbar.Brand  className='text-danger fw-bolder'>
          <Link style={{textDecoration:"none",color:"red"}} to={'/'}>
          <i className="fa-brands fa-youtube fa-beat-fade me-2"></i>
            Media-Player
          </Link>
          </Navbar.Brand>
        </Container>
      </Navbar> 
    </div>
  )
}

export default Header

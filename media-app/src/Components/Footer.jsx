import React from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
Button
function Footer() {
  return (
    <>
      <div style={{height:'300px'}} className='d-flex justify-content-center align-items-center w-100 '>
        <div className='d-flex justify-content-evenly align-items-center w-100'>
          <div className='websites' style={{width:'400px'}}>
            <h4 className='mb-3'>
            <i class="fa-brands fa-youtube fa-beat-fade me-2"></i>
            Media-Player
            </h4>
            <h6>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente porro rerum fugiat debitis quibusdam totam voluptates vitae distinctio odio, tempore cupiditate odit dolorem beatae laborum iure corrupti reiciendis a iusto.
            </h6>
          </div>
          <div className='links d-flex flex-column'>
            <h4 className='mb-3'>Links</h4>
              <h6>Landing Page</h6>
              <h6>Home Page</h6>
              <h6>Watch History</h6>
          </div>
          <div className='links d-flex flex-column'>
            <h4 className='mb-3'>Guides</h4>
              <h6>React</h6>
              <h6>React Bootstrap</h6>
              <h6>Bootswatch</h6>
          </div>
          <div className='links d-flex flex-column'>
            <h4 className='mb-3'>Contact Us</h4>
            <InputGroup className="mb-3">
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          placeholder='Enter Your Email id'
        />
        <Button className='ms-2' variant="warning">Subscribe</Button>{' '}
      </InputGroup> 
       <div className='d-flex justify-content-between'>
        <i className="fa-brands fa-facebook" style={{color:"white",fontSize:"30px"}}></i>
        <i className="fa-brands fa-instagram" style={{color:"white",fontSize:"30px"}}></i>
        <i className="fa-brands fa-github" style={{color:"white",fontSize:"30px"}}></i>
        <i className="fa-brands fa-linkedin" style={{color:"white",fontSize:"30px"}}></i>
        <i className="fa-brands fa-twitter" style={{color:"white",fontSize:"30px"}}></i>
        </div>
      </div>
    </div>
  </div>
  <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className='text-reset fw-bold' style={{textDecoration:"none"}}>
          Media Player App
        </a>
      </div>
    </>
  )
}

export default Footer

import React from 'react';
import logo from '../images/Genkilogo.jpg';
import { Container, Row, Col, Button } from 'react-bootstrap';


function nav() {
  return (
    <div>
      <nav id="nav1" className="navbar navbar-light bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src={logo}></img></a>
          <Button id= "butn" className='btn'>CHECK AVAILABILITY</Button>
        </div>
      </nav>
    </div>
  )
}

export default nav

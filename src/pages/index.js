import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import icon from '../images/icon.png';
import Nav from "../components/nav"
import Header from "../components/header"
import Footer from "../components/footer"

const App = () => {
  return (
    <>
    <Nav/>
    <Header/>
    <Footer/>
    </>
  )
}

export default App
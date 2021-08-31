import React from "react"
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom"
import "./index.css";

const Header = () => {
    return (
        <Container className="header">
            <Link className="nav-link" to='/statistics'>
                Dashboard
            </Link>
            <Link className="nav-link" to='/posts'>
                Posts List
            </Link>
        </Container>
    )
}

export default Header
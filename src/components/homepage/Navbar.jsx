import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function navbar() {
    return (
        <>
            <div className="red">
                <Navbar>
                    <Container>
                        <Navbar.Brand href="#home">
                            <img src="https://img.icons8.com/color/256/netflix.png" alt="" className='logo' />
                        </Navbar.Brand>
                        <Nav className="me-auto links">
                            <Nav.Link href="#home" className='text-white'>Home</Nav.Link>
                            <Nav.Link href="#features" className='text-white'>Series</Nav.Link>
                            <Nav.Link href="#pricing" className='text-white'>Filims</Nav.Link>
                            <Nav.Link href="#pricing" className='text-white'>New & popular</Nav.Link>
                            <Nav.Link href="#pricing" className='text-white'>My List</Nav.Link>
                        </Nav>
                        <Nav className="">
                            <Nav.Link href="#home"><img src="/navSearch.png" alt="" className='icon' /></Nav.Link>
                            <Nav.Link href="#pricing" className='text-white fonts'>Children</Nav.Link>
                            <Nav.Link href="#features" ><img src="/gift.png" alt="" className='icon' /></Nav.Link>
                            <Nav.Link href="#features"><img src="/bell.png" alt="" className='icon' /></Nav.Link>
                            <Nav.Link href="#features">
                            </Nav.Link>
                        </Nav>
                        <div className='py-2 d-flex justfiy-content-between flex-direction-row'>
                            <button className="profile">
                            </button>
                        </div>
                            <img src="/chevron down.png" alt="" className='chevicon'/>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}

export default navbar
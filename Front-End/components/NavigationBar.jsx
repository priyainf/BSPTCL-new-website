import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { RiEnglishInput } from "react-icons/ri";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import companyLogo from '../src/assets/images/bsptclLogo.png'
import { FaSitemap } from "react-icons/fa";
import { MdKeyboardVoice } from "react-icons/md";
import '../styles/NavigationBar.css'

function NavigationBar() {


    return (
        <>
            <div className="navBarParent">
                <div className="parent">
                    {/*-------------------------Starting of Logo div--------------------------------- */}
                    <div className="logoAndName"> {/*This div holds the logo and company name */}
                        <div className="logo"> {/*This div holds the logo */}
                            <img src={companyLogo} alt="Company Logo" className='companyLogo' /> {/*company logo*/}
                        </div>
                        <div className='companyName'>{/*This div holds the company name */}
                            <h1 className='DeptNameHin'>बिहार स्टेट पावर ट्रांसमिशन कम्पनी लिमिटेड</h1>
                            <h1 className='DeptNameEng'>Bihar State Power Transmission Co. Ltd. </h1>
                            <p id='govtUndertaking'>(A Govt. of Bihar Undertaking)</p>
                        </div>
                    </div>
                    {/*--------------------------Ending of logo Div---------------------------------*/}


                    {/*--------------------------Starting of Utility div-------------------------- */}
                    <div className="utility">
                        <Navbar expand="lg" >
                            <Container>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto">
                                        <Nav.Link href="">Skip to Main Content</Nav.Link>
                                        <div className="utlityBorder"></div> {/*border-right*/}
                                        <Nav.Link href="">Screen Reader</Nav.Link>
                                        <div className="utlityBorder"></div> {/*border-right*/}
                                        <Nav.Link href="">A- </Nav.Link>
                                        <Nav.Link href="">A</Nav.Link>
                                        <Nav.Link href="">A+</Nav.Link>
                                        <div className="utlityBorder"></div> {/*border-right*/}
                                        <Nav.Link href=""><MdSunny /></Nav.Link>
                                        <Nav.Link href=""><FaMoon /></Nav.Link>
                                        <div className="utlityBorder"></div> {/*border-right*/}
                                        <Nav.Link href=""><RiEnglishInput /></Nav.Link>
                                        <Nav.Link href="">हि</Nav.Link>
                                        <div className="utlityBorder"></div> {/*border-right*/}
                                        <Nav.Link href=""><FaSitemap /></Nav.Link>
                                        <div className="utlityBorder"></div> {/*border-right*/}
                                        <Nav.Link href=""><FaSearch /></Nav.Link>
                                        <div className="utlityBorder"></div> {/*border-right*/}
                                        <Nav.Link href=""><MdKeyboardVoice /></Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </div>
                    {/*-------------------------Ending of utility div---------------------------- */}


                    {/*-------------------------Starting of mainLink div-------------------------- */}
                    <div className="mainLink">
                        <Navbar expand="lg" >
                            <Container >                               
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav >
                                        <Nav.Link href="" className="mainLinkFont">About Us</Nav.Link>
                                        <Nav.Link href="" className="mainLinkFont">Transmission N/W</Nav.Link>
                                        <NavDropdown title="Employee" id="basic-nav-dropdown" className="mainLinkFont">
                                            <NavDropdown.Item href="">Office Order</NavDropdown.Item>
                                            <NavDropdown.Item href="">Transfer/Posting</NavDropdown.Item>
                                            <NavDropdown.Item href="">Mediclaim</NavDropdown.Item>                                                                                     
                                        </NavDropdown>
                                        <Nav.Link href="" className="mainLinkFont">Media</Nav.Link>
                                        <Nav.Link href="" className="mainLinkFont">Procurement</Nav.Link>
                                        <Nav.Link href="" className="mainLinkFont">SLDC</Nav.Link>
                                        <Nav.Link href="" className="mainLinkFont">STU</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </div>
                    {/*-------------------------Ending of mainLink div--------------------------- */}
                </div>
            </div>




        </>
    );
}

export default NavigationBar;
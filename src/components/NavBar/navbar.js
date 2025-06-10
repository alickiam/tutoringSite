import React, {useState} from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import contactMe from "../../assets/mail.png";
import menu from "../../assets/menu.png";
import {Link} from "react-scroll";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className = "logo"/>
            <div className="desktopMenu">
                <Link activeClass = 'active' to='intro' spy = {true} smooth={true} offset = {-100} duration = {500} className="desktopMenuListItem">Home</Link>
                <Link activeClass = 'active' to='skills' spy = {true} smooth={true} offset = {-50} duration = {500}className="desktopMenuListItem">Teaching Philosophy</Link>
                <Link activeClass = 'active' to='works' spy = {true} smooth={true} offset = {-50} duration = {500}className="desktopMenuListItem">Experience</Link>
                <Link activeClass = 'active' to='works' spy = {true} smooth={true} offset = {480} duration = {500}className="desktopMenuListItem">What I Offer</Link>
                {/*<Link activeClass = 'active' to='clients' spy = {true} smooth={true} offset = {-100} duration = {500}className="desktopMenuListItem">Clients</Link>*/}
            </div>
            <button className="desktopMenuBtn" onClick={() => {
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }}>
                <img src={contactMe} alt = "ContactImg" className="desktopMenuImg"/>Contact Me
            </button>


            <img src={menu} alt="Menu" className = "mobMenu" onClick ={()=>setShowMenu(!showMenu)}/>
            <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
                <Link activeClass = 'active' to='intro' spy = {true} smooth={true} offset = {-100} duration = {500} className="listItem" onClick ={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass = 'active' to='skills' spy = {true} smooth={true} offset = {-50} duration = {500}className="listItem" onClick ={()=>setShowMenu(false)}>Teaching Philosophy</Link>
                <Link activeClass = 'active' to='works' spy = {true} smooth={true} offset = {-50} duration = {500}className="listItem" onClick ={()=>setShowMenu(false)}>Experience</Link>
                <Link activeClass = 'active' to='offer' spy = {true} smooth={true} offset = {-50} duration = {500}className="listItem" onClick ={()=>setShowMenu(false)}>What I Offer</Link>
                <Link activeClass = 'active' to='contact' spy = {true} smooth={true} offset = {480} duration = {500}className="listItem" onClick ={()=>setShowMenu(false)}>Contact</Link>
                {/*<Link activeClass = 'active' to='clients' spy = {true} smooth={true} offset = {-100} duration = {500}className="desktopMenuListItem">Clients</Link>*/}
            </div>

        </nav>
    )
}

export default Navbar
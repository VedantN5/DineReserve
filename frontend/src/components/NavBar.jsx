import React,{ useState } from 'react';
import { Link } from 'react-scroll';
import { GiHamburgerMenu } from 'react-icons/gi';
import { data } from '../restApi.json';
import { Link as ScrollLink } from 'react-scroll'; // for smooth scrolling
import { Link as RouterLink } from 'react-router-dom'; // for page navigation



const NavBar = () => {
  const [show,setShow] = useState(false);
  return (
    <nav>
        <div className='logo'>Vedzz</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
            {data[0].navbarLinks.map((Element) => {
                return (
                <Link 
                  to={Element.link} 
                  key={Element.id} 
                  spy={true} 
                  smooth={true} 
                  duration={500}
                >
                {Element.title}
                </Link>
                );
            })};
        </div>
        <RouterLink to="/menu" className="nav-button">Our Menu</RouterLink>
        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
            <GiHamburgerMenu/>
        </div>
    </nav>
  );
    
};

export default NavBar
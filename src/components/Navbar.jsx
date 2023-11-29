import { useState } from 'react';
import { navLinks } from "../constants";
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  const [openNav, setOpenNav] = useState(false)

  const openMenu = (prevValue) => {
    const previousValue = prevValue;
    setOpenNav(!previousValue)
    console.log(previousValue)
  }
  
  return (
    <nav>
        <ul>
            {navLinks.map((nav)=> (
                <li
                key={nav.id}>
                  <Link to={nav.id} smooth={true} offset={-100} duration={500}>{nav.title}
                  </Link>
                </li>
            ))}
        </ul>
        <div onClick={openMenu} className='toggle-nav'><FontAwesomeIcon className='bar'  icon={faBars} /></div>
        <ul className='toggle-menu'>
            {navLinks.map((nav)=> (
                <li
                key={nav.id}>
                  <Link to={nav.id} smooth={true} offset={-100} duration={500}>{nav.title}
                  </Link>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Navbar

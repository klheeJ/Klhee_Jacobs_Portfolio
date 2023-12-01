import { useState } from 'react';
import { navLinks } from "../constants";
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  const [openNav, setOpenNav] = useState(false)

  const openMenu = () => {
    const previousValue = openNav;
    setOpenNav(!previousValue)
    console.log(previousValue)
  }

  const largeScreenOffset = -100;
  const smallScreenOffsent = -250;

  const getOffset = () => {
    return window.innerWidth >= 750? largeScreenOffset : smallScreenOffsent
  }
   
  return (
    <div>
      <nav>
          <ul>
              {navLinks.map((nav)=> (
                  <li
                  key={nav.id}>
                    <Link to={nav.id} smooth={true} offset={getOffset} duration={500}>{nav.title}
                    </Link>
                  </li>
              ))}
          </ul>
          <div onClick={openMenu} className='toggle-nav'>
            <FontAwesomeIcon className={`bar ${openNav ? 'hidden': ''}`}  icon={faBars} />
            <FontAwesomeIcon className={`close ${openNav ? '': 'hidden'}`}  icon={faXmark} />
          </div>
      </nav>
      <ul
      className={`toggle-menu ${openNav ? 'open': ''}`}>
        {navLinks.map((nav)=> (
            <li
            key={nav.id}>
              <Link to={nav.id} onClick={openMenu} smooth={true} offset={getOffset()} duration={500}>{nav.title}
              </Link>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar

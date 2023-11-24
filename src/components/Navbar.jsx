import { useRef } from 'react';
import { navLinks } from "../constants";
import { Link } from 'react-scroll'

function Navbar() {
  const Home = useRef(null);
  
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
    </nav>
  )
}

export default Navbar

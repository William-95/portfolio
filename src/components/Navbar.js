import React,{useState} from 'react'
import "../css/navbar.css";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import classNames from "classnames";

export default function Navbar() {
    const [state, setState] = useState({ isOpen: false });


    const handleToggle = () => {
        setState({ isOpen: !state.isOpen });
      };
  return (
    <nav className='navbar'>
        <div className='navCenter'>
            <div className='navHeader'>
            <h3>Portfolio</h3>

          <button type="button" className="navBtn" onClick={handleToggle}>
            <FaAlignRight className="navIcon" />
          </button> 
            </div>


            <ul
          className={classNames("navLinks", { showNav: state.isOpen })}
          onClick={handleToggle}
        >
          <li>
            <Link to={`/`}>Home</Link>
          </li>
          <li>
            <Link to="/projects/">Progetti</Link>
          </li>
          <li>
            <Link to="/contact/">Contatti</Link>
          </li>
        </ul>

        </div>
    </nav>
  )
}

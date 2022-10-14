import './Sidebar.scss';
import {Link,NavLink} from 'react-router-dom';
import Logos from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome,faUser,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faLinkedin,faGithub,faFacebook } from '@fortawesome/free-brands-svg-icons';

const Sidebar=()=>{
    return(<>
    <div className="nav-bar">
        <Link className="logo" to="/">
            <img src={Logos} alt="Logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
        </Link>
        <nav>
            <NavLink exact="true" activeClassName="active"  to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            
            <NavLink exact="true" activeClassName="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            
            <NavLink exact="true" activeClassName="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/datta-soat-5835171a9">
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a></li>

                <li><a rel="noreferrer" target="_blank" href="https://github.com/dattas1234">
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a></li>

                <li><a rel="noreferrer" target="_blank" href="https://www.facebook.com/datta.soat.3">
                <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" />
                </a>
                
                </li>
        </ul>
    </div>
    </>)
}

export default Sidebar;
import "./styles.scss";
import Logo from "../../assets/logo.svg";

export const Nav = () => {
 return (
  <nav className="nav">
   <a href="/" className="nav__logo">
    <img src={Logo} alt="logo" />
   </a>
   <ul className="nav__list">
    <li className="nav__item">
     <a href="#" className="nav__link">
      Features
     </a>
    </li>
    <li className="nav__item">
     <a href="#" className="nav__link">
      Partners
     </a>
    </li>
    <li className="nav__item">
     <a href="#" className="nav__link">
      Stories
     </a>
    </li>
   </ul>
   <button aria-label="download" className="nav__button" type="button">
    Download for free
   </button>
  </nav>
 );
};

export default Nav;

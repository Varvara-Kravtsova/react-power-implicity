import "./styles.scss";

export const Header = () => {
 return (
  <header className="header">
   <div className="header__slider">
    <h1 className="header__title">The Power of Simplicity</h1>
    <p className="header__text">
     Instead of spending time searching for the right app, our AI will bring the
     right app to you.
    </p>
    <button aria-label="learn" className="header__button" type="button">
     Learn
    </button>
    <ul className="header__controls">
     <li className="header__dot"></li>
     <li className="header__dot"></li>
     <li className="header__dot header__dot--active"></li>
     <li className="header__dot"></li>
     <li className="header__dot"></li>
    </ul>
   </div>
  </header>
 );
};

export default Header;

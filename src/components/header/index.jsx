import "./style.css";
import Logo from "../../assets/images/logo.svg";
import Downbox from "../../assets/images/chevron-down.svg";

export default function Header() {
  return (
    <header>
      <img className="siteLogo" src={Logo} alt="Site Logo" />
      <nav>
        <a href="#">Link One</a>
        <a href="#">Link Two</a>
        <a href="#">Link Three</a>
        <a href="#">
          Link Four
          <img src={Downbox} alt="Down Icon" />
        </a>
      </nav>
      <button>Try it for free</button>
    </header>
  );
}

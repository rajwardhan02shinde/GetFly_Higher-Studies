import { MdOutlineEmail } from "react-icons/md";
import { TiSocialFacebookCircular } from "react-icons/ti";

import { TiSocialLinkedinCircular } from "react-icons/ti";
import { TiSocialTwitterCircular } from "react-icons/ti";
import logoImage from "../assets/logo.jpg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      {" "}
      <header className="headerContainer">
        <div class="nav1 ">
          <div class="navContent container">
            <a>
              <span>
                <MdOutlineEmail />
              </span>
              {"  "}
              tpo@pvppcoe.edu.in
            </a>
            <h1>Higher Studies</h1>
            <div class="logos">
              <TiSocialFacebookCircular />
              <TiSocialLinkedinCircular />
              <TiSocialTwitterCircular />
            </div>
          </div>
        </div>
        <div className="nav2box">
          <div class="nav2">
            <div className="mainLogo">
              <img src={logoImage} alt="" />
            </div>
            <ul class="ulItems">
              <li>
                <Link to="/">Dashboard</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;

import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="intro">
            <div className="innerBox">
              <h1>TPO DEPARTMENT </h1>
              <h1>Higher Studies</h1>

              <p>
                Through our comprehensive seminars and workshops, we cover
                essential topics such as application processes, scholarships,
                and visa requirements for studying abroad. Our partnerships with
                international universities offer students unique opportunities
                for exchange programs, dual-degree options, and internships,
                promoting invaluable global exposure.
              </p>
            </div>
          </div>
          <div className="quickLinks">
            <div className="inner">
              <h3>Quick Links</h3>
              <ul className="linkSections">
                <li>
                  <a href="">Dashboard </a>
                </li>
                <li>
                  <a href="">FAQ</a>
                </li>
                <li>
                  <a href="">Past Seminars</a>
                </li>
                <li>
                  <a href="">Seminar Applications</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="contactDetails">
            <div className="innerBox3">
              <h3>Contact Info</h3>
              <div className="location">
                <div className="adress">
                  TPO Department, Vasantdada Patil Pratishthan’s College of
                  Engineering, Eastern Express Highway, Near Everard Nagar,
                  Sion-Chunabhatti, Mumbai - 400022, Maharashtra, India.
                </div>
              </div>{" "}
              <IconContext.Provider value={{ size: "1.5em" }}>
                <div className="personalContact">
                  <div className="details">
                    <FaPhone />
                    <span>+91 9999999999</span>
                  </div>
                  <div className="details">
                    <MdEmail />
                    <span> tpo@pvppcoe.edu.in</span>
                  </div>
                </div>
              </IconContext.Provider>
              <div className="social-links">
                <h3>Social Links </h3>
                <div className="mainLinks">
                  <IconContext.Provider value={{ size: "2em" }}>
                    <FaFacebook />
                    <FaLinkedin />
                  </IconContext.Provider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;

import { Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const SocialsLinks = () => {
  return (
    <Col md="4" className="footer-body">
      <ul className="footer-icons">
        <li className="social-icons">
          <a
            href="https://github.com/C-Brooker"
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub />
          </a>
        </li>
        <li className="social-icons">
          <a
            href="https://www.linkedin.com/in/charlie-brooker-081b241b0/"
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </li>
      </ul>
    </Col>
  );
};

export default SocialsLinks;

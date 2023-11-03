import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" className="mb-4">
            <div className="logo">
              <img
                src={
                  "https://assets-global.website-files.com/6077f96cf4fa19216396daaf/63f36981950c481a7701e95f_logo-p-500.png"
                }
                alt="logo"
              />
            </div>
            <p className="footer__text mt-4">
              Welcome to devtown, your ultimate
              destination for an extraordinary online shopping experience. 
            </p>
          </Col>
          <Col lg="3" md="4" className="mb-4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Top Categories</h4>
              <ListGroup mb-3>
                {/* ListGroup & ListGroupItem is like 'ul' and 'li' */}
                <ListGroupItem className="ps-0 border-0">
                  <Link to={"#"}>Mobile Phone</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to={"#"}>Modern Sofa</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to={"#"}>Arm Chair</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to={"#"}>Smart Watches</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
         
          <Col lg="3" md="4" className="mb-4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Contact</h4>
              <ListGroup mb-3 className="footer__contact">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-linkedin-box-fill"></i>
                  </span>
                  <p>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/shreyanshsachan11/"
                    >
                      Shreyansh Sachan
                    </a>
                  </p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-mail-line"></i>
                  </span>
                  <p>shreyanshsachan2016@gmail.com</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-github-fill"></i>
                  </span>
                  <p>
                    <a
                      target="_blank"
                      href="https://github.com/ShreYansHSachan11"
                    >
                      ShreYansHSachan11
                    </a>
                  </p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="12">
            <p className="footer__copyright text-center">
              <i class="ri-copyright-line"></i> Copyright Shreyansh Sachan
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

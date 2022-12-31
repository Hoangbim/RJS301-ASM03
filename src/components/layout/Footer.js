import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Footer() {
  return (
    <FooterWrapper>
      <div className="footer-container">
        <div className="column">
          <p>CUSTOMER SERVICES</p>
          <ul>
            <li>
              <Link to={"#"}>Help & Contact Us</Link>
            </li>
            <li>
              <Link to={"#"}>Return & Refunds</Link>
            </li>
            <li>
              <Link to={"#"}>Online Stores</Link>
            </li>
            <li>
              <Link to={"#"}>Terms & Conditions</Link>
            </li>
          </ul>
        </div>
        <div className="column">
          <p>COMPANY</p>
          <ul>
            <li>
              <Link to={"#"}>What We Do</Link>
            </li>
            <li>
              <Link to={"#"}>Avalable Services</Link>
            </li>
            <li>
              <Link to={"#"}>Latest Posts</Link>
            </li>
            <li>
              <Link to={"#"}>FAQs</Link>
            </li>
          </ul>
        </div>
        <div className="column">
          {" "}
          <p>SOCIAL MEDIA</p>
          <ul>
            <li>
              <Link to={"#"}>Twitter</Link>
            </li>
            <li>
              <Link to={"#"}>Instagram</Link>
            </li>
            <li>
              <Link to={"#"}>Facebook</Link>
            </li>
            <li>
              <Link to={"#"}>Pinterest</Link>
            </li>
          </ul>
        </div>
      </div>
    </FooterWrapper>
  );
}

export default Footer;

const FooterWrapper = styled.div`
  height: 250px;
  color: var(--color-background);
  font-style: italic;
  text-align: left;

  .column {
    margin-right: 15%;
    margin-left: 2%;

    p {
      font-size: 17px;
    }

    padding-top: 30px;
  }

  h3 {
    font-weight: light;
  }

  a {
    text-decoration: none;
    color: var(--color-background);
  }
  ul {
    list-style-type: none;
    padding-left: 0;
    opacity: 0.6;
  }
  li {
    // float: left;
    // display: flex;
    // flex-direction: column;
    margin-bottom: 8px;
  }
  .footer-container {
    max-width: 996px;
    margin: auto;
    display: flex;
    // justify-content: space-between;
  }

  background-color: var(--color-footer_background);
`;

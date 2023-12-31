import React from "react";
import "../css/footer.css";

export default function Footer() {
  return (
    <footer>
      <ul className="social-icon">
        <li>
          {" "}
          <a
            href="https://www.facebook.com/profile.php?id=100010400947448"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <i
              className="fab fa-facebook"
              style={{ color: "#3b5998" }}
            ></i>{" "}
          </a>{" "}
        </li>

        <li>
          {" "}
          <a
            href="https://www.instagram.com/williamverga/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-instagram" style={{ color: "#ff00ff" }}></i>
          </a>{" "}
        </li>
        <li>
          {" "}
          <a
            href="https://www.linkedin.com/in/verga-william"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin" style={{ color: "#0e76a8" }}></i>
          </a>{" "}
        </li>
        <li>
          {" "}
          <a
            href="https://github.com/William-95"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github" style={{ color: "#171515" }}></i>
          </a>{" "}
        </li>
        <li>
          {" "}
          <a href="/contact/">
            <i
              className="fas fa-envelope-square"
              style={{ color: "#FF0000" }}
            />{" "}
          </a>{" "}
        </li>
      </ul>
      <p>&#169;2023 William Verga | Portfolio | All Rights Reserved</p>
    </footer>
  );
}

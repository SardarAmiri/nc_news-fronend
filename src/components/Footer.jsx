import React from "react";

function Footer() {
  return (
    <div className="footer">
      <footer>
        <h3>
          Developed and designed by Sardar Amiri &middot; junior full-stack
          software engineer
        </h3>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/sardar-amiri/" target="_blank">
              <span className="fab fa-linkedin" aria-hidden="true"></span>
              <span className="sr-only">LinkedIn</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/SardarAmiri" target="_blank">
              <span className="fab fa-github-square" aria-hidden="true"></span>
              <span className="sr-only">Github</span>
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <span className="fas fa-envelope" aria-hidden="true"></span>
              <span className="sr-only">Email</span>
            </a>
          </li>
        </ul>
        <p>
          <small>&copy; 2024 Sardar Amiri. All rights reserved.</small>
        </p>
      </footer>
    </div>
  );
}

export default Footer;

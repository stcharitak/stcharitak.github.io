import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer clearfix">
      <div className="footer-social">
        <ul className="footer-social-links">
          <li>
            <a
              href="https://www.linkedin.com/in/stavros-charitakis-755231175"
              rel="noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/stcharitak"
              rel="noreferrer"
              target="_blank"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/stavros.haritakis/"
              rel="noreferrer"
              target="_blank"
            >
              Facebook
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-copyrights">
        <p>© 2023 Stavros Charitakis.</p>
      </div>
    </footer>
  );
}

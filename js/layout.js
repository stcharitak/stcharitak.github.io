(function renderSharedLayout() {
  var page = document.body.getAttribute("data-page");
  var headerMount = document.getElementById("layout-header");
  var footerMount = document.getElementById("layout-footer");

  if (headerMount) {
    headerMount.innerHTML = [
      '<header id="site_header" class="header">',
      '  <div class="header-content clearfix">',
      '    <div class="text-logo">',
      '      <a href="/">',
      '        <div class="logo-symbol">S</div>',
      '        <div class="logo-text">Stavros <span>Charitakis</span></div>',
      "      </a>",
      "    </div>",
      '    <div class="site-nav mobile-menu-hide">',
      '      <ul class="leven-classic-menu site-main-menu">',
      '        <li class="menu-item' + (page === "about" ? " current-menu-item" : "") + '"><a href="/">About Me</a></li>',
      '        <li class="menu-item' + (page === "resume" ? " current-menu-item" : "") + '"><a href="resume.html">Resume</a></li>',
      '        <li class="menu-item' + (page === "contact" ? " current-menu-item" : "") + '"><a href="contact.html">Contact</a></li>',
      "      </ul>",
      "    </div>",
      '    <a class="menu-toggle mobile-visible"><i class="fa fa-bars"></i></a>',
      "  </div>",
      "</header>",
    ].join("");
  }

  if (footerMount) {
    footerMount.innerHTML = [
      '<footer class="site-footer clearfix">',
      '  <div class="footer-social">',
      '    <ul class="footer-social-links">',
      "      <li>",
      '        <a href="https://www.linkedin.com/in/stavros-charitakis-755231175" target="_blank"><i class="fab fa-linkedin-in fa-2x"></i></a>',
      "      </li>",
      "      <li>",
      '        <a href="https://github.com/stcharitak" target="_blank"><i class="fab fa-github fa-2x"></i></a>',
      "      </li>",
      "    </ul>",
      "  </div>",
      '  <div class="footer-copyrights">',
      "    <p>© 2025 Stavros Charitakis</p>",
      "  </div>",
      "</footer>",
    ].join("");
  }
})();

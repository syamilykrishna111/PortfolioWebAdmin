export default function Navbar() {
  return (
    <nav id="navmenu" className="navmenu">
      <ul>
        <li><a href="/" className="active">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
    </nav>
  );
}

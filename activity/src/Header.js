import { Link } from "react-router-dom";

function Header() {
  return (
<nav class="navbar navbar-expand-lg bg-lgiht">
  <div class="container-fluid">
    <Link to="/" class="navbar-brand"><img src="/rakion.png"></img></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='/main' class="nav-link active" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/about' class="nav-link">About</Link>
        </li>
        <li className="nav-item">
          <Link to='/services' class="nav-link">Characters</Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><Link to='/main' class="dropdown-item">Main</Link></li>
            <li><Link to='/about' class="dropdown-item">About</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link to='/services' class="dropdown-item">Characters</Link></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  );
}
export default Header;

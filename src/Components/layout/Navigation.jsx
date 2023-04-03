import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <header>
      <Link className="site-logo" to="/">
        #VanLife
      </Link>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
};

export default Navigation;

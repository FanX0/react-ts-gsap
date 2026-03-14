import { Link, useLocation } from "react-router-dom";
import { Zap } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="flex items-center gap-2">
          <Zap size={24} color="#6366f1" />
          <span className="font-bold text-xl">GSAP Template</span>
        </Link>

        <div className="nav-links">
          <Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link>
          <Link to="/about" className={isActive('/about') ? 'active' : ''}>About</Link>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </nav>
  );
}

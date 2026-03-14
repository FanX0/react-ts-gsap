import { Link } from "react-router-dom";
import { Zap, Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="flex items-center gap-2 mb-4">
              <Zap size={24} color="#6366f1" />
              <span className="font-bold text-xl">GSAP Template</span>
            </div>
            <p className="text-text-muted">
              The ultimate starter for high-performance React animations. 
              Build faster, animate smoother.
            </p>
          </div>

          <div className="footer-links">
            <h4>Platform</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><a href="#">Showcase</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">GSAP Docs</a></li>
              <li><a href="#">Community</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Social</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:scale-110 transition-transform"><Github size={20} /></a>
              <a href="#" className="hover:scale-110 transition-transform"><Twitter size={20} /></a>
              <a href="#" className="hover:scale-110 transition-transform"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} GSAP React Template. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

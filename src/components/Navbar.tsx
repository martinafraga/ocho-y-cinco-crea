
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-ochocinconegro">OCHO<span className="text-ochocincoamarillo">&</span>CINCO</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/sobre-nosotros">Sobre Nosotros</NavLink>
            <NavLink to="/servicios">Servicios</NavLink>
            <NavLink to="/proyectos">Proyectos</NavLink>
            <NavLink to="/testimonios">Testimonios</NavLink>
            <NavLink to="/contacto">Contacto</NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-ochocinconegro focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md animate-fade-in">
            <div className="flex flex-col p-4 space-y-4">
              <MobileNavLink to="/" onClick={() => setIsOpen(false)}>Inicio</MobileNavLink>
              <MobileNavLink to="/sobre-nosotros" onClick={() => setIsOpen(false)}>Sobre Nosotros</MobileNavLink>
              <MobileNavLink to="/servicios" onClick={() => setIsOpen(false)}>Servicios</MobileNavLink>
              <MobileNavLink to="/proyectos" onClick={() => setIsOpen(false)}>Proyectos</MobileNavLink>
              <MobileNavLink to="/testimonios" onClick={() => setIsOpen(false)}>Testimonios</MobileNavLink>
              <MobileNavLink to="/contacto" onClick={() => setIsOpen(false)}>Contacto</MobileNavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link to={to} className="text-ochocinconegro hover:text-ochocincoamarillo font-medium transition-colors">
    {children}
  </Link>
);

const MobileNavLink = ({ to, onClick, children }: { to: string; onClick: () => void; children: React.ReactNode }) => (
  <Link
    to={to}
    onClick={onClick}
    className="text-ochocinconegro hover:text-ochocincoamarillo font-medium py-2 border-b border-gray-100 transition-colors"
  >
    {children}
  </Link>
);

export default Navbar;

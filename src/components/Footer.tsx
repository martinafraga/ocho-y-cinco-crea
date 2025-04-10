
import { Mail, MapPin, Phone, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ochocinconegro text-ochocincoblanco pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-6">OCHO<span className="text-ochocincoamarillo">&</span>CINCO</h3>
            <p className="mb-6 text-gray-300">
              Agencia creativa y estratégica que trabaja con empresas que valoran la innovación, el impacto real y las ideas que conectan con las personas.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-ochocincoamarillo transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-ochocincoamarillo transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-ochocincoamarillo transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Enlaces rápidos</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-ochocincoamarillo transition-colors">Inicio</Link>
              </li>
              <li>
                <Link to="/sobre-nosotros" className="text-gray-300 hover:text-ochocincoamarillo transition-colors">Sobre Nosotros</Link>
              </li>
              <li>
                <Link to="/servicios" className="text-gray-300 hover:text-ochocincoamarillo transition-colors">Servicios</Link>
              </li>
              <li>
                <Link to="/proyectos" className="text-gray-300 hover:text-ochocincoamarillo transition-colors">Proyectos</Link>
              </li>
              <li>
                <Link to="/testimonios" className="text-gray-300 hover:text-ochocincoamarillo transition-colors">Testimonios</Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-300 hover:text-ochocincoamarillo transition-colors">Contacto</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 text-ochocincoamarillo flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-300">Buenos Aires, Argentina</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-ochocincoamarillo flex-shrink-0" size={18} />
                <span className="text-gray-300">+54 11 1234-5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-ochocincoamarillo flex-shrink-0" size={18} />
                <a href="mailto:info@ochocinco.com" className="text-gray-300 hover:text-ochocincoamarillo transition-colors">info@ochocinco.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-gray-400 text-center text-sm">
            © {currentYear} Ocho y Cinco. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

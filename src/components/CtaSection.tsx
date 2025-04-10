
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="bg-ochocinconegro text-ochocincoblanco rounded-2xl p-10 lg:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-ochocincoamarillo opacity-10 transform -skew-x-12"></div>
          
          <div className="relative z-10 max-w-3xl">
            <h2 className="heading-lg mb-6">
              ¿Listo para llevar tus ideas al siguiente nivel?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Nos encantaría conocer tu proyecto y explorar cómo podemos ayudarte a alcanzar tus objetivos. Agendá una reunión con nuestro equipo para comenzar.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contacto" className="btn-primary flex items-center">
                Agendá una reunión
                <Calendar className="ml-2" size={18} />
              </Link>
              <Link to="/servicios" className="bg-transparent border border-ochocincoblanco text-ochocincoblanco hover:bg-white hover:bg-opacity-10 transition-colors font-medium px-6 py-3 rounded flex items-center">
                Explorá nuestras ideas
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;

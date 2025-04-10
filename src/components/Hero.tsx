
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-ochocincoblanco">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1579389083046-e3df9c2b3325?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-5"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="heading-xl mb-6 animate-slide-in-right">
              Ideas que <span className="yellow-highlight">conectan</span> e <span className="yellow-highlight">inspiran</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl animate-slide-in-right" style={{ animationDelay: "0.1s" }}>
              Somos una agencia creativa y estratégica que combina innovación, experiencia y visión para generar resultados que transforman.
            </p>
            <div className="flex flex-wrap gap-4 animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
              <Link to="/contacto" className="btn-primary flex items-center">
                Conversemos
                <ArrowRight className="ml-2" size={18} />
              </Link>
              <Link to="/servicios" className="btn-secondary">
                Descubrí nuestros servicios
              </Link>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-md">
              <div className="aspect-square bg-ochocincoamarillo rounded-lg absolute -top-4 -left-4 w-full h-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80" 
                alt="Equipo de Ocho y Cinco trabajando" 
                className="relative z-10 w-full h-full object-cover object-center rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-2xl font-bold mb-3">Estrategia</h3>
            <p className="text-gray-600">Definimos el camino más efectivo para alcanzar los objetivos de tu empresa.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-2xl font-bold mb-3">Creatividad</h3>
            <p className="text-gray-600">Desarrollamos ideas innovadoras que conectan con tu audiencia y generan impacto.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <h3 className="text-2xl font-bold mb-3">Resultados</h3>
            <p className="text-gray-600">Nos enfocamos en generar valor medible y tangible para tu negocio.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

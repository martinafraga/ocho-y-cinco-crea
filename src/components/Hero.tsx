
import { ArrowRight, Star, Zap, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-ochocinconegro text-ochocincoblanco">
      {/* Formas geométricas animadas de fondo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-ochocincoamarillo opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-10 w-80 h-80 bg-ochocincogris opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute w-full h-full bg-[url('https://images.unsplash.com/photo-1579389083046-e3df9c2b3325?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-ochocinconegro/90 via-transparent to-ochocinconegro/90"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="flex items-center mb-4 space-x-2">
              <span className="inline-flex items-center px-3 py-1 text-xs font-semibold bg-ochocincoamarillo/20 text-ochocincoamarillo rounded-full">
                <Star className="mr-1" size={14} /> AGENCIA CREATIVA
              </span>
              <span className="h-px w-10 bg-gray-600"></span>
              <span className="text-sm text-gray-400">EST. 2024</span>
            </div>

            <h1 className="heading-xl mb-8 leading-tight">
              Creamos <span className="relative inline-block">
                <span className="relative z-10">ideas</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-ochocincoamarillo opacity-40"></span>
              </span> que <span className="relative inline-block">
                <span className="relative z-10">conectan</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-ochocincoamarillo opacity-40"></span>
              </span> e <span className="relative inline-block">
                <span className="relative z-10">inspiran</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-ochocincoamarillo opacity-40"></span>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl">
              Somos una agencia creativa y estratégica que combina innovación, experiencia y visión para generar resultados que transforman.
            </p>
            
            <div className="flex flex-wrap gap-6 mb-16">
              <Link to="/contacto" className="btn-primary flex items-center group relative overflow-hidden shadow-lg shadow-ochocincoamarillo/20">
                <span className="relative z-10">Conversemos</span>
                <ArrowRight className="ml-2 relative z-10 transform group-hover:translate-x-1 transition-transform" size={18} />
                <span className="absolute inset-0 bg-ochocincoamarillo opacity-100 group-hover:scale-105 transition-transform duration-300"></span>
              </Link>
              <Link to="/servicios" className="relative overflow-hidden btn-secondary group border-2 border-ochocincoblanco/30 hover:border-ochocincoblanco/80 transition-colors">
                <span className="relative z-10">Descubrí nuestros servicios</span>
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-ochocincoamarillo group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex -space-x-3">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Cliente" className="w-10 h-10 rounded-full border-2 border-ochocinconegro object-cover" />
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" alt="Cliente" className="w-10 h-10 rounded-full border-2 border-ochocinconegro object-cover" />
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80" alt="Cliente" className="w-10 h-10 rounded-full border-2 border-ochocinconegro object-cover" />
              </div>
              <div>
                <p className="text-sm font-medium flex items-center">
                  <Award size={16} className="mr-1 text-ochocincoamarillo" />
                  <span>Confiado por más de 50+ empresas</span>
                </p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-md transform hover:scale-[1.01] transition-transform duration-500">
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-tr from-ochocincoamarillo/80 to-ochocincoamarillo/40 rounded-lg transform rotate-2"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-ochocincoamarillo/30 rounded-lg transform -rotate-1"></div>
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80" 
                alt="Equipo de Ocho y Cinco trabajando" 
                className="relative z-10 w-full h-full object-cover object-center rounded-lg shadow-2xl transform -rotate-1 transition-transform duration-300 hover:rotate-0"
              />
              <div className="absolute -bottom-6 -right-6 bg-ochocinconegro text-ochocincoblanco p-4 rounded-lg shadow-lg border border-gray-800 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center">
                  <Zap className="mr-2 text-ochocincoamarillo" size={20} />
                  <span className="font-bold">Creatividad que transforma</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:border-ochocincoamarillo/30 transition-colors group hover:bg-white/10">
            <div className="bg-ochocincoamarillo/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6 group-hover:bg-ochocincoamarillo/20 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ochocincoamarillo"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 group-hover:text-ochocincoamarillo transition-colors">Estrategia</h3>
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Definimos el camino más efectivo para alcanzar los objetivos de tu empresa.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:border-ochocincoamarillo/30 transition-colors group hover:bg-white/10">
            <div className="bg-ochocincoamarillo/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6 group-hover:bg-ochocincoamarillo/20 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ochocincoamarillo"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path><circle cx="7.5" cy="11.5" r="1.5"></circle><circle cx="12" cy="11.5" r="1.5"></circle><circle cx="16.5" cy="11.5" r="1.5"></circle></svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 group-hover:text-ochocincoamarillo transition-colors">Creatividad</h3>
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Desarrollamos ideas innovadoras que conectan con tu audiencia y generan impacto.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:border-ochocincoamarillo/30 transition-colors group hover:bg-white/10">
            <div className="bg-ochocincoamarillo/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6 group-hover:bg-ochocincoamarillo/20 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ochocincoamarillo"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 group-hover:text-ochocincoamarillo transition-colors">Resultados</h3>
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Nos enfocamos en generar valor medible y tangible para tu negocio.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

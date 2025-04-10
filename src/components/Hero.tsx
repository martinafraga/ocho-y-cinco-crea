
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  // Variantes para las animaciones de texto
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5 + i * 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  // Variantes para el contenedor
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video/Imagen de fondo a pantalla completa */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-ochocinconegro/70 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80" 
          alt="Ocho y Cinco - Agencia creativa" 
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      
      {/* Contenido principal */}
      <div className="container-custom relative z-20 px-4 md:px-0">
        {/* Palabras clave animadas - Ahora más abajo en la pantalla */}
        <motion.div 
          className="text-center mt-16 md:mt-20"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {["CREER", "CREAR", "COMUNICAR", "CONECTAR"].map((word, index) => (
            <motion.div 
              key={index}
              custom={index}
              variants={textVariants}
              className="relative inline-block mx-4"
            >
              <span className="text-4xl md:text-7xl lg:text-8xl font-extrabold text-ochocincoamarillo tracking-tighter">
                {word}
              </span>
              {index < 3 && (
                <span className="hidden md:inline-block mx-4 text-5xl text-ochocincoblanco">•</span>
              )}
            </motion.div>
          ))}
        </motion.div>
        
        {/* Contenido descriptivo y CTA */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <h2 className="text-xl md:text-2xl text-ochocincoblanco/90 mb-8 leading-relaxed">
            Somos una agencia creativa y estratégica que combina innovación, experiencia y visión para generar resultados que transforman.
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/contacto" 
              className="btn-primary flex items-center group relative overflow-hidden shadow-lg shadow-ochocincoamarillo/20 w-full sm:w-auto"
            >
              <span className="relative z-10">Conversemos</span>
              <ArrowRight className="ml-2 relative z-10 transform group-hover:translate-x-1 transition-transform" size={18} />
              <span className="absolute inset-0 bg-ochocincoamarillo opacity-100 group-hover:scale-105 transition-transform duration-300"></span>
            </Link>
            
            <Link 
              to="/servicios" 
              className="relative overflow-hidden btn-secondary group border-2 border-ochocincoblanco/30 hover:border-ochocincoblanco/80 transition-colors w-full sm:w-auto"
            >
              <span className="relative z-10">Descubrí nuestros servicios</span>
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-ochocincoamarillo group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>
          
          <motion.div 
            className="mt-16 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.8 }}
          >
            <motion.div 
              className="bg-ochocinconegro/80 backdrop-blur-sm p-3 rounded-full border border-ochocincoamarillo/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-8 w-8 text-ochocincoamarillo animate-bounce" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

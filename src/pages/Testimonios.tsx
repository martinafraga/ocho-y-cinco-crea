
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import { Quote } from "lucide-react";

const testimonios = [
  {
    name: "Alejandra Martínez",
    position: "Directora de Marketing",
    company: "Global Corp",
    quote: "El trabajo de Ocho y Cinco superó todas nuestras expectativas. Su enfoque estratégico y creativo nos ayudó a conectar con nuestra audiencia de una manera que no habíamos logrado antes. Su equipo se convirtió en una extensión del nuestro, comprendiendo nuestras necesidades y objetivos a la perfección.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    service: "Campañas integrales"
  },
  {
    name: "Carlos Rodríguez",
    position: "CEO",
    company: "Innovate SA",
    quote: "El equipo de Ocho y Cinco entiende perfectamente nuestro negocio y necesidades. Han sido un socio estratégico clave en nuestro crecimiento durante los últimos dos años. Su capacidad para traducir conceptos complejos en comunicaciones claras y atractivas ha transformado la manera en que nos relacionamos con nuestros clientes.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80",
    service: "Marketing de contenidos"
  },
  {
    name: "Laura González",
    position: "Directora de RRHH",
    company: "Tech Solutions",
    quote: "Los eventos corporativos que organizan son excepcionales. Han logrado fortalecer nuestra cultura y valores de una manera que impacta positivamente en la retención y satisfacción de nuestro equipo. Su atención al detalle y capacidad para crear experiencias memorables es inigualable.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=150&q=80",
    service: "Eventos corporativos"
  },
  {
    name: "Miguel Sánchez",
    position: "Director de Innovación",
    company: "Future Company",
    quote: "Los workshops facilitados por Ocho y Cinco revolucionaron nuestra forma de pensar y abordar los desafíos. Su metodología nos permitió desbloquear la creatividad del equipo y desarrollar soluciones que nunca hubiéramos imaginado. El ROI de estas sesiones ha sido extraordinario.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    service: "Grupo de ideas"
  },
  {
    name: "Sofía Torres",
    position: "Gerente de Comunicaciones",
    company: "Multi Corp",
    quote: "La estrategia de comunicación interna desarrollada por Ocho y Cinco transformó completamente nuestra organización. Pasamos de tener información dispersa y empleados desconectados a contar con canales efectivos y un equipo altamente comprometido. Su enfoque centrado en las personas marca la diferencia.",
    image: "https://images.unsplash.com/photo-1569913486515-b74bf7751574?auto=format&fit=crop&w=150&q=80",
    service: "Comunicación interna"
  },
  {
    name: "Pedro Gutiérrez",
    position: "Director de Capacitación",
    company: "EduTech",
    quote: "La plataforma de educación virtual que diseñaron para nosotros revolucionó nuestra oferta formativa. Los índices de engagement y finalización superaron ampliamente nuestras expectativas, y el feedback de los usuarios ha sido extraordinario. Su comprensión de la experiencia de aprendizaje es profunda y se refleja en cada detalle.",
    image: "https://images.unsplash.com/photo-1562788869-4ed32648eb72?auto=format&fit=crop&w=150&q=80",
    service: "Educación virtual"
  }
];

const Testimonios = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero section */}
        <section className="pt-32 pb-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="heading-lg mb-6">
                Lo que dicen nuestros <span className="yellow-highlight">clientes</span>
              </h1>
              <p className="text-lg text-gray-600">
                Empresas que confían en nuestra experiencia para impulsar sus estrategias y lograr resultados excepcionales.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {testimonios.map((testimonio, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md relative">
                  <Quote className="text-ochocincoamarillo absolute top-6 right-6 opacity-20" size={40} />
                  <span className="inline-block px-3 py-1 bg-ochocincoamarillo bg-opacity-10 text-ochocinconegro rounded-full text-sm font-medium mb-6">
                    {testimonio.service}
                  </span>
                  <p className="text-gray-600 mb-8 text-lg relative z-10">
                    "{testimonio.quote}"
                  </p>
                  <div className="flex items-center">
                    <img 
                      src={testimonio.image} 
                      alt={testimonio.name} 
                      className="w-14 h-14 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-bold">{testimonio.name}</h4>
                      <p className="text-sm text-gray-500">
                        {testimonio.position}, {testimonio.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Logos de clientes */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-md mb-6">
                Empresas que confían en <span className="yellow-highlight">nosotros</span>
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
                  <div className="h-20 w-32 bg-gray-300 rounded flex items-center justify-center">
                    <span className="text-gray-500 font-bold">LOGO</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Testimonios;

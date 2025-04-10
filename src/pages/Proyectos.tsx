
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";

const proyectos = [
  {
    title: "Evento corporativo para Empresa Líder",
    category: "Eventos corporativos",
    client: "Empresa Líder S.A.",
    description: "Organización de un evento para 500 personas que fortaleció la cultura organizacional y mejoró el engagement de los empleados.",
    challenge: "La empresa necesitaba revitalizar el compromiso de sus empleados después de un período de cambios importantes y trabajo remoto prolongado.",
    solution: "Diseñamos un evento experiencial que combinó contenido inspirador, actividades de team building y espacios de networking estratégico, todo bajo un concepto creativo que reflejaba los valores de la organización.",
    results: "Aumento del 40% en el índice de satisfacción de los empleados y mejora del 25% en el engagement, medido en la encuesta posterior al evento.",
    image: "https://images.unsplash.com/photo-1540317580384-e5d43867caa6?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Campaña integral para lanzamiento de producto",
    category: "Campañas integrales",
    client: "Innovate Tech",
    description: "Desarrollo de estrategia y ejecución para el lanzamiento de un nuevo producto que superó las expectativas de ventas en un 30%.",
    challenge: "Introducir un producto innovador en un mercado altamente competitivo y con consumidores escépticos ante nuevas tecnologías.",
    solution: "Implementamos una estrategia omnicanal que incluía activaciones experienciales, marketing de contenidos, influencer marketing y campaña digital segmentada, centrada en los beneficios diferenciadores del producto.",
    results: "30% más de ventas que las proyectadas en el primer trimestre y un aumento del 45% en el reconocimiento de marca según estudios post-campaña.",
    image: "https://images.unsplash.com/photo-1559223607-a43c990c692c?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Programa de comunicación interna",
    category: "Comunicación interna",
    client: "Global Finance",
    description: "Implementación de un programa de comunicación que mejoró la satisfacción interna en un 45% en 6 meses.",
    challenge: "Superar las barreras de comunicación en una organización con múltiples oficinas en diferentes países y culturas diversas.",
    solution: "Desarrollamos una estrategia de comunicación interna multicanal, con énfasis en contenido audiovisual, plataformas interactivas y encuentros virtuales periódicos, adaptados a las diferentes audiencias dentro de la organización.",
    results: "Mejora del 45% en la satisfacción de los empleados con la comunicación interna y reducción del 30% en el tiempo de adopción de nuevas iniciativas.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Workshop de innovación para equipos",
    category: "Grupo de ideas",
    client: "Future Solutions",
    description: "Facilitación de un proceso de ideación que resultó en el desarrollo de tres nuevas líneas de negocio para la compañía.",
    challenge: "Estimular el pensamiento innovador en una empresa con estructuras tradicionales y procesos muy establecidos.",
    solution: "Diseñamos una serie de workshops utilizando metodologías como Design Thinking y Lean Startup, combinadas con técnicas de creatividad que desafiaban los paradigmas existentes.",
    results: "Generación de más de 150 ideas, de las cuales 12 fueron seleccionadas para desarrollo y 3 se implementaron como nuevas líneas de negocio.",
    image: "https://images.unsplash.com/photo-1544531585-9847b68c8c86?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Plataforma de aprendizaje virtual",
    category: "Educación virtual",
    client: "EduCorp",
    description: "Desarrollo de una plataforma de formación online que logró un 92% de tasa de finalización, frente al 30% promedio de la industria.",
    challenge: "Crear una experiencia de aprendizaje virtual que mantuviera el engagement y produjera resultados de aprendizaje reales.",
    solution: "Implementamos una plataforma con contenido microlearning, elementos de gamificación, comunidad de práctica y aplicación inmediata de conocimientos, apoyada en un diseño UX/UI intuitivo y atractivo.",
    results: "92% de tasa de finalización, 87% de aplicación efectiva de los conocimientos adquiridos y ROI de 320% en el primer año.",
    image: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Estrategia de contenidos para posicionamiento",
    category: "Marketing de contenidos",
    client: "Salud Integral",
    description: "Desarrollo de una estrategia de contenidos que posicionó a la empresa como referente en su sector, aumentando un 280% el tráfico orgánico.",
    challenge: "Destacar en un sector altamente regulado y con múltiples competidores establecidos, sin recurrir a grandes inversiones publicitarias.",
    solution: "Diseñamos un ecosistema de contenidos que incluía blog especializado, podcast con expertos, informes de investigación y contenido social educativo, todos alineados con las necesidades de información de los diferentes públicos objetivo.",
    results: "280% de aumento en tráfico orgánico, 175% más de leads calificados y reconocimiento como referente del sector según estudios de percepción.",
    image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=800&q=80"
  }
];

const Proyectos = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero section */}
        <section className="pt-32 pb-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="heading-lg mb-6">
                Proyectos <span className="yellow-highlight">destacados</span>
              </h1>
              <p className="text-lg text-gray-600">
                Soluciones creativas y estratégicas que generan resultados reales para nuestros clientes.
              </p>
            </div>
          </div>
        </section>

        {/* Proyectos */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {proyectos.map((proyecto, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={proyecto.image} 
                      alt={proyecto.title} 
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-ochocinconegro bg-opacity-60 flex flex-col justify-end p-6">
                      <span className="text-ochocincoamarillo font-medium mb-2">{proyecto.category}</span>
                      <h3 className="text-white text-2xl font-bold">{proyecto.title}</h3>
                      <p className="text-gray-200 mt-2">{proyecto.client}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      <h4 className="font-bold mb-2">El desafío</h4>
                      <p className="text-gray-600">{proyecto.challenge}</p>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-bold mb-2">La solución</h4>
                      <p className="text-gray-600">{proyecto.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Resultados</h4>
                      <p className="text-gray-600">{proyecto.results}</p>
                    </div>
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

export default Proyectos;

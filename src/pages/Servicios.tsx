
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import { ArrowRight, Users, MessageSquare, Lightbulb, BookOpen, Radio, FileText, Monitor } from "lucide-react";

const servicios = [
  {
    icon: <Users size={32} />,
    title: "Eventos corporativos",
    description: "Diseñamos y producimos eventos memorables que fortalecen la cultura y valores de tu empresa.",
    benefits: [
      "Experiencias únicas y memorables que refuerzan la cultura organizacional",
      "Producción integral: desde la conceptualización hasta la ejecución",
      "Medición y análisis de resultados para optimizar futuras acciones",
      "Adaptabilidad a diferentes formatos: presenciales, virtuales o híbridos"
    ]
  },
  {
    icon: <MessageSquare size={32} />,
    title: "Comunicación interna",
    description: "Desarrollamos estrategias efectivas para mejorar el flujo de información dentro de tu organización.",
    benefits: [
      "Mayor engagement y sentido de pertenencia de los colaboradores",
      "Implementación de canales efectivos para cada tipo de comunicación",
      "Creación de contenidos relevantes y atractivos para tu audiencia interna",
      "Sistemas de medición para evaluar el impacto y optimizar constantemente"
    ]
  },
  {
    icon: <Lightbulb size={32} />,
    title: "Grupo de ideas",
    description: "Facilitamos workshops, brainstorming y espacios de desarrollo creativo para potenciar la innovación.",
    benefits: [
      "Metodologías probadas que estimulan el pensamiento creativo y la colaboración",
      "Facilitadores expertos que guían el proceso de ideación",
      "Documentación y análisis de resultados para convertir ideas en acciones",
      "Procesos adaptados a las necesidades específicas de cada organización"
    ]
  },
  {
    icon: <BookOpen size={32} />,
    title: "Entrenamiento y capacitación para equipos",
    description: "Formamos a tu equipo con metodologías dinámicas y contenido relevante para su desarrollo.",
    benefits: [
      "Programas personalizados según objetivos y necesidades específicas",
      "Enfoque práctico y experiencial que favorece la retención y aplicación",
      "Combinación de conocimientos técnicos y habilidades blandas",
      "Seguimiento post-capacitación para garantizar la aplicación de lo aprendido"
    ]
  },
  {
    icon: <Monitor size={32} />,
    title: "Educación virtual",
    description: "Creamos experiencias de aprendizaje online que mantienen el compromiso y facilitan la adopción de conocimientos.",
    benefits: [
      "Contenidos interactivos y multimedia que mantienen el engagement",
      "Plataformas intuitivas y accesibles desde cualquier dispositivo",
      "Sistemas de gamificación para aumentar la motivación y participación",
      "Análisis de datos para evaluar el progreso y optimizar la experiencia"
    ]
  },
  {
    icon: <Radio size={32} />,
    title: "Campañas integrales",
    description: "Diseñamos campañas que conectan con tu audiencia a través de múltiples canales y puntos de contacto.",
    benefits: [
      "Estrategia omnicanal con mensajes coherentes y adaptados a cada plataforma",
      "Creatividad diferenciadora que destaca en entornos saturados",
      "Implementación ágil y optimización continua basada en resultados",
      "Medición precisa de KPIs para evaluar el retorno de inversión"
    ]
  },
  {
    icon: <FileText size={32} />,
    title: "Marketing de contenidos",
    description: "Desarrollamos contenido relevante y valioso que posiciona a tu marca como referente en tu industria.",
    benefits: [
      "Estrategia editorial alineada con objetivos de negocio y ciclo de compra",
      "Contenidos de alta calidad que atraen, educan y convierten",
      "Distribución optimizada para maximizar el alcance e impacto",
      "Análisis de performance para identificar oportunidades y optimizar resultados"
    ]
  }
];

const Servicios = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero section */}
        <section className="pt-32 pb-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="heading-lg mb-6">
                Nuestros <span className="yellow-highlight">servicios</span>
              </h1>
              <p className="text-lg text-gray-600">
                Una combinación única de estrategia y creatividad para potenciar tu empresa y conectar con tu audiencia a través de soluciones integrales y personalizadas.
              </p>
            </div>
          </div>
        </section>

        {/* Servicios detallados */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="space-y-24">
              {servicios.map((servicio, index) => (
                <div key={index} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={index % 2 !== 0 ? 'md:order-2' : ''}>
                    <div className="p-4 bg-ochocincoamarillo bg-opacity-10 rounded-full w-fit mb-6 text-ochocinconegro">
                      {servicio.icon}
                    </div>
                    <h2 className="heading-md mb-4">{servicio.title}</h2>
                    <p className="text-lg text-gray-600 mb-6">{servicio.description}</p>
                    <h3 className="font-bold text-lg mb-4">Beneficios:</h3>
                    <ul className="space-y-3">
                      {servicio.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <ArrowRight className="text-ochocincoamarillo mr-3 flex-shrink-0 mt-1" size={16} />
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`relative ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                    <div className="aspect-square bg-ochocincoamarillo rounded-lg absolute -bottom-4 -right-4 w-full h-full"></div>
                    <img 
                      src={`https://images.unsplash.com/photo-${1550000000000 + index * 1000}?auto=format&fit=crop&w=800&q=80`} 
                      alt={servicio.title} 
                      className="relative z-10 w-full h-full object-cover rounded-lg shadow-xl"
                    />
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

export default Servicios;

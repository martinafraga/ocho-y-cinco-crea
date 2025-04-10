
import { ArrowRight, Users, MessageSquare, Lightbulb, BookOpen, Radio, FileText, Monitor } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <Users />,
    title: "Eventos corporativos",
    description: "Diseñamos y producimos eventos memorables que fortalecen la cultura y valores de tu empresa."
  },
  {
    icon: <MessageSquare />,
    title: "Comunicación interna",
    description: "Desarrollamos estrategias efectivas para mejorar el flujo de información dentro de tu organización."
  },
  {
    icon: <Lightbulb />,
    title: "Grupo de ideas",
    description: "Facilitamos workshops, brainstorming y espacios de desarrollo creativo para potenciar la innovación."
  },
  {
    icon: <BookOpen />,
    title: "Entrenamiento y capacitación",
    description: "Formamos a tu equipo con metodologías dinámicas y contenido relevante para su desarrollo."
  },
  {
    icon: <Monitor />,
    title: "Educación virtual",
    description: "Creamos experiencias de aprendizaje online que mantienen el compromiso y facilitan la adopción de conocimientos."
  },
  {
    icon: <Radio />,
    title: "Campañas integrales",
    description: "Diseñamos campañas que conectan con tu audiencia a través de múltiples canales y puntos de contacto."
  },
  {
    icon: <FileText />,
    title: "Marketing de contenidos",
    description: "Desarrollamos contenido relevante y valioso que posiciona a tu marca como referente en tu industria."
  }
];

const ServicesSection = () => {
  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-6">
            Nuestros <span className="yellow-highlight">servicios</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Una combinación única de estrategia y creatividad para potenciar tu empresa y conectar con tu audiencia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card group"
            >
              <div className="p-3 bg-ochocincoamarillo bg-opacity-10 rounded-full w-fit mb-6 text-ochocinconegro">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-ochocincoamarillo transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/servicios" className="btn-primary inline-flex items-center">
            Ver todos los servicios
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;


import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
    title: "Evento corporativo para Empresa Líder",
    category: "Eventos",
    description: "Organización de un evento para 500 personas que fortaleció la cultura organizacional y mejoró el engagement de los empleados."
  },
  {
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
    title: "Campaña integral para lanzamiento de producto",
    category: "Campaña integral",
    description: "Desarrollo de estrategia y ejecución para el lanzamiento de un nuevo producto que superó las expectativas de ventas en un 30%."
  },
  {
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80",
    title: "Programa de comunicación interna",
    category: "Comunicación",
    description: "Implementación de un programa de comunicación que mejoró la satisfacción interna en un 45% en 6 meses."
  }
];

const ProjectsSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-6">
            Proyectos <span className="yellow-highlight">destacados</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Soluciones creativas y estratégicas que generan resultados reales para nuestros clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md group">
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-ochocinconegro bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link to="/proyectos" className="bg-ochocincoamarillo text-ochocinconegro px-5 py-2 rounded-full font-medium">
                    Ver proyecto
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <span className="text-sm font-semibold text-ochocincoamarillo mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mb-3 group-hover:text-ochocincoamarillo transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/proyectos" className="btn-primary inline-flex items-center">
            Explorar todos los proyectos
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

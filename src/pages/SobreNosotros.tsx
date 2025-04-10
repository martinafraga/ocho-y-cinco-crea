
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import { ArrowRight, Check } from "lucide-react";

const SobreNosotros = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero section */}
        <section className="pt-32 pb-20 bg-gray-50">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="heading-lg mb-6">
                  Sobre <span className="yellow-highlight">Ocho y Cinco</span>
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                  Somos una agencia creativa y estratégica con un enfoque único que combina innovación, experiencia y visión para generar resultados que transforman.
                </p>
                <p className="text-lg text-gray-600">
                  Trabajamos con empresas que valoran la innovación, el impacto real y las ideas que conectan con las personas, creando experiencias memorables y efectivas.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-video bg-ochocincoamarillo rounded-lg absolute -bottom-4 -right-4 w-full h-full"></div>
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" 
                  alt="Equipo de Ocho y Cinco" 
                  className="relative z-10 w-full h-full object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Nuestra historia */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-md mb-8 text-center">Nuestra historia</h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Ocho y Cinco nació en 2015 con una visión clara: transformar la manera en que las empresas se conectan con sus audiencias y equipos. Comenzamos como un pequeño estudio creativo y rápidamente nos convertimos en una agencia integral gracias a nuestro enfoque en resultados y nuestra pasión por el trabajo bien hecho.
                </p>
                <p>
                  A lo largo de los años, hemos trabajado con empresas de diversos tamaños y sectores, desde startups innovadoras hasta grandes corporaciones, ayudándolas a comunicar mejor sus valores, fortalecer su cultura organizacional y conectar de manera más efectiva con sus clientes.
                </p>
                <p>
                  Hoy, nuestro equipo multidisciplinario de estrategas, creativos, diseñadores y especialistas en comunicación trabaja en conjunto para ofrecer soluciones integrales que generan impacto real y resultados medibles.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nuestra forma de trabajar */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-md mb-6">
                Nuestra forma de <span className="yellow-highlight">trabajar</span>
              </h2>
              <p className="text-gray-600 text-lg">
                Un enfoque metodológico que combina estrategia, creatividad y ejecución para lograr resultados excepcionales.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-ochocincoamarillo text-xl font-bold mb-4">01</div>
                <h3 className="text-xl font-bold mb-3">Descubrimiento</h3>
                <p className="text-gray-600 mb-4">
                  Investigamos a fondo para entender tus objetivos, desafíos y oportunidades, estableciendo bases sólidas para nuestra estrategia.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="text-ochocincoamarillo mr-2 flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-600">Análisis de situación</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-ochocincoamarillo mr-2 flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-600">Entrevistas y workshops</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-ochocincoamarillo mr-2 flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-600">Benchmarking</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-ochocincoamarillo text-xl font-bold mb-4">02</div>
                <h3 className="text-xl font-bold mb-3">Estrategia y creatividad</h3>
                <p className="text-gray-600 mb-4">
                  Diseñamos estrategias personalizadas y desarrollamos ideas creativas que conectan con tu audiencia y cumplen tus objetivos.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="text-ochocincoamarillo mr-2 flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-600">Planificación estratégica</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-ochocincoamarillo mr-2 flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-600">Conceptualización creativa</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-ochocincoamarillo mr-2 flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-600">Diseño de experiencias</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-ochocincoamarillo text-xl font-bold mb-4">03</div>
                <h3 className="text-xl font-bold mb-3">Implementación y resultados</h3>
                <p className="text-gray-600 mb-4">
                  Ejecutamos con precisión cada proyecto, midiendo resultados y optimizando continuamente para maximizar el impacto.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="text-ochocincoamarillo mr-2 flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-600">Producción y ejecución</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-ochocincoamarillo mr-2 flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-600">Medición de resultados</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-ochocincoamarillo mr-2 flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-600">Mejora continua</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Nuestro equipo */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-md mb-6">
                Nuestro <span className="yellow-highlight">equipo</span>
              </h2>
              <p className="text-gray-600 text-lg">
                Un grupo multidisciplinario de profesionales apasionados por crear soluciones innovadoras y efectivas.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Martín Rodríguez",
                  position: "Director Creativo",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80"
                },
                {
                  name: "Lucía Fernández",
                  position: "Directora de Estrategia",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80"
                },
                {
                  name: "Gabriel Torres",
                  position: "Director de Proyectos",
                  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
                },
                {
                  name: "Carolina López",
                  position: "Directora de Arte",
                  image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80"
                }
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="relative mx-auto w-48 h-48 mb-6">
                    <div className="absolute inset-0 rounded-full bg-ochocincoamarillo opacity-10"></div>
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover rounded-full p-1"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.position}</p>
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

export default SobreNosotros;

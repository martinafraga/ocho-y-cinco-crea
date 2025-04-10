
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alejandra Martínez",
    position: "Directora de Marketing",
    company: "Global Corp",
    quote: "El trabajo de Ocho y Cinco superó todas nuestras expectativas. Su enfoque estratégico y creativo nos ayudó a conectar con nuestra audiencia de una manera que no habíamos logrado antes.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Carlos Rodríguez",
    position: "CEO",
    company: "Innovate SA",
    quote: "El equipo de Ocho y Cinco entiende perfectamente nuestro negocio y necesidades. Han sido un socio estratégico clave en nuestro crecimiento durante los últimos dos años.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Laura González",
    position: "Directora de RRHH",
    company: "Tech Solutions",
    quote: "Los eventos corporativos que organizan son excepcionales. Han logrado fortalecer nuestra cultura y valores de una manera que impacta positivamente en la retención y satisfacción de nuestro equipo.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=150&q=80"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-6">
            Lo que dicen nuestros <span className="yellow-highlight">clientes</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Empresas que confían en nuestra experiencia para impulsar sus estrategias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card relative">
              <Quote className="text-ochocincoamarillo mb-4 opacity-30" size={40} />
              <p className="text-gray-600 mb-6 relative z-10">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

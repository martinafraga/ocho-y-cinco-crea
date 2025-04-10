
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Calendar, Mail, MapPin, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contacto = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo pronto.",
      duration: 5000,
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      service: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero section */}
        <section className="pt-32 pb-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="heading-lg mb-6">
                <span className="yellow-highlight">Conversemos</span> sobre tu proyecto
              </h1>
              <p className="text-lg text-gray-600">
                Estamos listos para escuchar tus ideas y ayudarte a transformarlas en realidades que inspiran y conectan.
              </p>
            </div>
          </div>
        </section>

        {/* Formulario de contacto */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="heading-md mb-6">Contáctanos</h2>
                <p className="text-gray-600 mb-8">
                  Completa el formulario y un miembro de nuestro equipo se pondrá en contacto contigo a la brevedad. Estamos ansiosos por conocer tu proyecto y explorar cómo podemos ayudarte.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <MapPin className="text-ochocincoamarillo mr-4 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-bold mb-1">Visítanos</h4>
                      <p className="text-gray-600">Av. Corrientes 1234, Piso 5<br />Buenos Aires, Argentina</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="text-ochocincoamarillo mr-4 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-bold mb-1">Llámanos</h4>
                      <p className="text-gray-600">+54 11 1234-5678</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="text-ochocincoamarillo mr-4 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-bold mb-1">Escríbenos</h4>
                      <p className="text-gray-600">info@ochocinco.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Calendar className="text-ochocincoamarillo mr-4 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-bold mb-1">Agenda una reunión</h4>
                      <p className="text-gray-600">Disponible de lunes a viernes<br />9:00 - 18:00 hs</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
                  <div className="mb-4">
                    <label htmlFor="name" className="block font-medium mb-2">Nombre completo</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-ochocincoamarillo"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block font-medium mb-2">Correo electrónico</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-ochocincoamarillo"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="company" className="block font-medium mb-2">Empresa</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-ochocincoamarillo"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="service" className="block font-medium mb-2">Servicio de interés</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-ochocincoamarillo"
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="eventos">Eventos corporativos</option>
                      <option value="comunicacion">Comunicación interna</option>
                      <option value="ideas">Grupo de ideas</option>
                      <option value="capacitacion">Entrenamiento y capacitación</option>
                      <option value="educacion">Educación virtual</option>
                      <option value="campanas">Campañas integrales</option>
                      <option value="contenidos">Marketing de contenidos</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block font-medium mb-2">Mensaje</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-ochocincoamarillo"
                      placeholder="Cuéntanos sobre tu proyecto o necesidad"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center"
                  >
                    Enviar mensaje
                    <Send className="ml-2" size={18} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Mapa */}
        <section className="h-96 bg-gray-200">
          <div className="w-full h-full bg-gray-300 flex items-center justify-center">
            <p className="text-gray-600 font-medium">Mapa - Ubicación de la oficina</p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contacto;

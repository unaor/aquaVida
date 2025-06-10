import React, { useState, useRef } from "react";
import { Droplets, Flame, Shield, Leaf, Timer, ThumbsUp, MessageCircle, Plus, Minus, Check } from "lucide-react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);

  const scrollToImage = (index: number) => {
    if (galleryRef.current) {
      const scrollWidth = galleryRef.current.scrollWidth;
      const numImages = galleryImages.length;
      const scrollTo = (scrollWidth / numImages) * index;
      galleryRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      });
      setCurrentImageIndex(index);
    }
  };

  const handleScroll = () => {
    if (galleryRef.current) {
      const scrollPosition = galleryRef.current.scrollLeft;
      const imageWidth = galleryRef.current.scrollWidth / galleryImages.length;
      const newIndex = Math.round(scrollPosition / imageWidth);
      if (newIndex !== currentImageIndex) {
        setCurrentImageIndex(newIndex);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "aquaFontain",
        "template_9jul5do",
        {
          to_email: "naoru24@gmail.com",
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message || "No message provided",
        },
        "KomT_lQL_Ws97vIr9"
      );

      toast.success("Tu mensaje fue enviado exitosamente!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      toast.error("No se pudo enviar el mensaje. Por favor inténtalo de nuevo.");
      console.error("Error sending email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    {
      icon: <Droplets className="w-8 h-8 text-blue-500" />,
      title: "Agua filtrada helada",
      description: "Temperatura perfecta para bebidas refrescantes, disponible al instante.",
    },
    {
      icon: <Flame className="w-8 h-8 text-red-500" />,
      title: "Agua hirviendo instantánea",
      description: "Listo para tomar té, café o cocinar, no es necesario esperar.",
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "Filtración avanzada",
      description: "El filtrado en varias etapas elimina las impurezas y mejora el sabor.",
    },
    {
      icon: <Leaf className="w-8 h-8 text-emerald-500" />,
      title: "Ecológico",
      description: "Reduce los residuos plásticos del agua embotellada.",
    },
    {
      icon: <Timer className="w-8 h-8 text-purple-500" />,
      title: "Ahorro de tiempo",
      description: "No más espera a que el agua hierva o se enfríe.",
    },
    {
      icon: <ThumbsUp className="w-8 h-8 text-indigo-500" />,
      title: "Fácil de usar",
      description: "Controles sencillos y fácil mantenimiento y seguro para los niños.",
    },
  ];

  const galleryImages = [
    {
      url: "/resources/white.jpeg",
      caption: "En Blanco",
    },
    {
      url: "/resources/grey.jpeg",
      caption: "En Gris",
    },
    {
      url: "/resources/black.jpeg",
      caption: "En Negro",
    },
    {
      url: "/resources/red.jpeg",
      caption: "En Rojo",
    },
  ];

  const faqs = [
    {
      question: "¿Qué colores están disponibles?",
      answer:
        "Nuestra barra de agua viene en tres elegantes acabados: rojo rosa, negro mate y blanco perla. Cada color está diseñado para complementar los espacios modernos de cocina y oficina.",
    },
    {
      question: "¿Qué filtros están incluidos?",
      answer:
        "El sistema incluye un completo sistema de filtración de 4 etapas: filtro de sedimentos que elimina partículas grandes como polvo, óxido, arena y suciedad, filtro de bloque de carbón activado que elimina el cloro, malos sabores y olores del agua, membrana UF que filtra bacterias, virus y partículas finas, y carbón activado granular que absorbe productos químicos como pesticidas, cloro y otros contaminantes. Estos filtros eliminan impurezas y mantienen los minerales esenciales para un excelente sabor.",
    },
    {
      question: "¿Cuál es el proceso de instalación?",
      answer:
        "La instalación es sencilla y suele tardar 30 minutos. Nuestros técnicos profesionales se encargan de todo, desde la conexión de la línea de agua hasta la calibración del sistema. Garantizamos una configuración adecuada y ofrecemos una demostración completa de todas las funciones.",
    },
    {
      question: "¿Qué ventajas hay?",
      answer:
        "Las ventajas clave incluyen: acceso instantáneo a agua filtrada fría y caliente, eficiencia energética, diseño que ahorra espacio, reducción de residuos plásticos, ahorro de costos en comparación con el agua embotellada y filtración avanzada para un mejor sabor y beneficios para la salud.",
    },
    {
      question: "¿Hay una garantía?",
      answer:
        "Sí, ofrecemos un paquete de garantía integral: 1 año de garantía para la unidad principal, 1 año de garantía para los componentes eléctricos y 1 año de garantía para los filtros. También ofrecemos servicios de mantenimiento y atención al cliente 24 horas al día, 7 días a la semana.",
    },
  ];

  const products = [
    {
      name: "Basico",
      price: "$799,999",
      description: "Perfecto para casas pequeñas",
      features: [
        "Agua fría y caliente",
      ],
      isPopular: false,
      paymentUrl: "https://checkout.wompi.co/l/hPIr23"
    },
    {
      name: "Premium",
      price: "$999,999",
      description: "Elección más popular",
      features: [
        "Agua fría y caliente",
        "Filtración avanzada de 4 etapas",
        "Garantía extendida de 1 año",
        "Instalación prioritaria",
        "Soporte prioritario 24 horas al día, 7 días a la semana",
      ],
      isPopular: true,
      paymentUrl: "https://checkout.wompi.co/l/K5dD5B"
    },
    {
      name: "Professional",
      price: "$1,499,999",
      description: "Para oficinas y grandes espacios",
      features: [
        "Agua fría y caliente",
        "Filtración avanzada de 4 etapas",
        "Garantía extendida de 2 años",
        "Instalación prioritaria",
        "Soporte prioritario 24 horas al día, 7 días a la semana",
        "Visitas de mantenimiento trimestrales",
      ],
      isPopular: false,
      paymentUrl: "https://checkout.wompi.co/l/kg2dke"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      {/* Hero Section */}
      <div
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h2 className="text-4xl font-bold mb-6">El Futuro de Dispensar Agua</h2>
              <p className="text-xl">
                Disfruta la comodidad de tener agua fría o caliente al instante, al alcance de tu mano. Ideal para casas
                y oficinas.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">¿Por qué elegir nuestra barra de agua?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-16">Véalo en acción</h2>
          <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
            <div className="aspect-w-16 aspect-h-9 bg-gray-800">
              {/* Video placeholder - replace src with actual video URL */}
              <video className="w-full h-full object-cover" controls poster="/resources/black.jpeg">
                <source src="/resources/waterbar_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-20 bg-gray-100 overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Galería de productos</h2>
          <div className="relative">
            <div
              ref={galleryRef}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
              onScroll={handleScroll}
            >
              {galleryImages.map((image, index) => (
                <div key={index} className="flex-none w-full snap-center px-4">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-xl shadow-xl">
                    <img src={image.url} alt={image.caption} className="w-full h-full object-contain" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <p className="text-white p-8 text-xl font-medium">{image.caption}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-6 gap-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    currentImageIndex === index ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  onClick={() => scrollToImage(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Elige tu barra de agua perfecta</h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Selecciona el plan que mejor se ajuste a tus necesidades.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {products.map((product, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  product.isPopular
                    ? "bg-blue-600 text-white transform scale-105 shadow-xl relative"
                    : "bg-white border-2 border-gray-200"
                }`}
              >
                {product.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-400 text-blue-900 text-sm font-semibold px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className={`text-2xl font-bold mb-2 ${product.isPopular ? "text-white" : "text-gray-900"}`}>
                  {product.name}
                </h3>
                <p className={`mb-6 ${product.isPopular ? "text-blue-100" : "text-gray-600"}`}>{product.description}</p>
                <div className={`text-4xl font-bold mb-8 ${product.isPopular ? "text-white" : "text-gray-900"}`}>
                  {product.price}
                </div>

                <ul className="space-y-4 mb-8">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check
                        className={`w-5 h-5 mr-3 flex-shrink-0 ${
                          product.isPopular ? "text-blue-200" : "text-blue-500"
                        }`}
                      />
                      <span className={product.isPopular ? "text-blue-100" : "text-gray-600"}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                onClick={() => window.location.href = product.paymentUrl}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                    product.isPopular
                      ? "bg-white text-blue-600 hover:bg-blue-50"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  Empezar
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-16">Preguntas frecuentes</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                <button
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-100 transition-colors duration-200"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  {expandedFaq === index ? (
                    <Minus className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  )}
                </button>
                <div
                  className={`px-6 transition-all duration-200 ease-in-out ${
                    expandedFaq === index ? "max-h-48 py-4" : "max-h-0 overflow-hidden"
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 max-w-xl">
          <h2 className="text-3xl font-bold text-center mb-8">¿Interesado? Ponte en contacto</h2>
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Nombres
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                Número de teléfono
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32 resize-none"
                placeholder="Quiero conocer mas sobre el producto..."
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 ${
                isSubmitting ? "opacity-75 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/972532262121"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 z-50"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { Droplets, Flame, Shield, Leaf, Timer, ThumbsUp, MessageCircle, Plus, Minus, Check } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'aquaVida',
        'template_9jul5do',
        {
          to_email: 'naoru24@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message || 'No message provided',
        },
        'KomT_lQL_Ws97vIr9'
      );

      toast.success('Tu mensaje fue enviado exitosamente!');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    {
      icon: <Droplets className="w-8 h-8 text-blue-500" />,
      title: 'Ice-Cold Filtered Water',
      description: 'Perfect temperature for refreshing drinks, instantly available',
    },
    {
      icon: <Flame className="w-8 h-8 text-red-500" />,
      title: 'Instant Boiling Water',
      description: 'Ready for tea, coffee, or cooking - no waiting required',
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Advanced Filtration',
      description: 'Multi-stage filtering removes impurities and improves taste',
    },
    {
      icon: <Leaf className="w-8 h-8 text-emerald-500" />,
      title: 'Eco-Friendly',
      description: 'Reduces plastic waste from bottled water',
    },
    {
      icon: <Timer className="w-8 h-8 text-purple-500" />,
      title: 'Time-Saving',
      description: 'No more waiting for water to boil or chill',
    },
    {
      icon: <ThumbsUp className="w-8 h-8 text-indigo-500" />,
      title: 'User-Friendly',
      description: 'Simple controls and easy maintenance',
    },
  ];

  const galleryImages = [
    {
      url: "/resources/white.jpeg",
      caption: "En Blanco"
    },
    {
      url: "/resources/grey.jpeg",
      caption: "En Gris"
    },
    {
      url: "/resources/black.jpeg",
      caption: "En Negro"
    },
    {
      url: "/resources/red.jpeg",
      caption: "en Rojo"
    }
  ];

  const faqs = [
    {
      question: "What colors are available?",
      answer: "Our Water Bar comes in three elegant finishes: Brushed Stainless Steel, Matte Black, and Pearl White. Each color is designed to complement modern kitchen and office spaces."
    },
    {
      question: "What filters are included?",
      answer: "The system includes a comprehensive 4-stage filtration system: Sediment filter, Carbon block filter, RO membrane, and Mineral enhancement filter. These filters remove impurities while maintaining essential minerals for great taste."
    },
    {
      question: "What is the installation process?",
      answer: "Installation is straightforward and typically takes 1-2 hours. Our professional technicians handle everything from water line connection to system calibration. We ensure proper setup and provide a complete demonstration of all features."
    },
    {
      question: "What advantages are there?",
      answer: "Key advantages include: instant access to both hot and cold filtered water, energy efficiency, space-saving design, reduced plastic waste, cost savings compared to bottled water, and advanced filtration for better taste and health benefits."
    },
    {
      question: "Is there a guarantee?",
      answer: "Yes, we offer a comprehensive warranty package: 5-year warranty on the main unit, 2-year warranty on electrical components, and 1-year warranty on filters. We also provide 24/7 customer support and maintenance services."
    }
  ];

  const products = [
    {
      name: "Essential",
      price: "$999",
      description: "Perfect for small homes",
      features: [
        "Cold & Room Temperature Water",
        "Basic Filtration System",
        "1-Year Warranty",
        "Standard Installation",
        "Basic Maintenance Kit"
      ],
      isPopular: false
    },
    {
      name: "Premium",
      price: "$1,499",
      description: "Most Popular Choice",
      features: [
        "Hot, Cold & Room Temperature Water",
        "Advanced 4-Stage Filtration",
        "5-Year Extended Warranty",
        "Priority Installation",
        "Premium Maintenance Kit",
        "Smart App Integration",
        "24/7 Priority Support"
      ],
      isPopular: true
    },
    {
      name: "Professional",
      price: "$2,499",
      description: "For offices & large spaces",
      features: [
        "Hot, Cold & Sparkling Water",
        "Commercial-Grade Filtration",
        "10-Year Warranty",
        "Priority Installation",
        "Professional Maintenance Kit",
        "Smart App Integration",
        "24/7 VIP Support",
        "Quarterly Maintenance Visits"
      ],
      isPopular: false
    }
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
              <h2 className="text-4xl font-bold mb-6">The Future of Water Dispensing</h2>
              <p className="text-xl">Experience the convenience of instant ice-cold and boiling water at your fingertips. Perfect for homes and offices.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Why Choose Our Water Bar?</h2>
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
          <h2 className="text-3xl font-bold text-center text-white mb-16">See It In Action</h2>
          <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
            <div className="aspect-w-16 aspect-h-9 bg-gray-800">
              {/* Video placeholder - replace src with actual video URL */}
              <video
                className="w-full h-full object-cover"
                controls
                poster="/resources/black.jpeg"
              >
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
          <h2 className="text-3xl font-bold text-center mb-16">Product Gallery</h2>
          <div className="relative">
            <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8">
              {galleryImages.map((image, index) => (
                <div 
                  key={index}
                  className="flex-none w-full snap-center px-4"
                >
                  <div className="relative aspect-[16/9] overflow-hidden rounded-xl shadow-xl">
                    <img 
                      src={image.url} 
                      alt={image.caption}
                      className="w-full h-full object-cover"
                    />
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
                    currentImageIndex === index ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Choose Your Perfect Water Bar</h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">Select the plan that best fits your needs. All plans include professional installation and our commitment to quality.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {products.map((product, index) => (
              <div 
                key={index}
                className={`rounded-2xl p-8 ${
                  product.isPopular 
                    ? 'bg-blue-600 text-white transform scale-105 shadow-xl relative' 
                    : 'bg-white border-2 border-gray-200'
                }`}
              >
                {product.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-400 text-blue-900 text-sm font-semibold px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className={`text-2xl font-bold mb-2 ${product.isPopular ? 'text-white' : 'text-gray-900'}`}>
                  {product.name}
                </h3>
                <p className={`mb-6 ${product.isPopular ? 'text-blue-100' : 'text-gray-600'}`}>
                  {product.description}
                </p>
                <div className={`text-4xl font-bold mb-8 ${product.isPopular ? 'text-white' : 'text-gray-900'}`}>
                  {product.price}
                </div>
                
                <ul className="space-y-4 mb-8">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className={`w-5 h-5 mr-3 flex-shrink-0 ${
                        product.isPopular ? 'text-blue-200' : 'text-blue-500'
                      }`} />
                      <span className={product.isPopular ? 'text-blue-100' : 'text-gray-600'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                    product.isPopular
                      ? 'bg-white text-blue-600 hover:bg-blue-50'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-lg overflow-hidden"
              >
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
                    expandedFaq === index ? 'max-h-48 py-4' : 'max-h-0 overflow-hidden'
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
          <h2 className="text-3xl font-bold text-center mb-8">Interested? Get in Touch</h2>
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
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
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
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
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
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
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message (Optional)</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32 resize-none"
                placeholder="Tell us about your needs..."
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 ${
                isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/1234567890"
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
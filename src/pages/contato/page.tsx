import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  });

  const canaisAtendimento = [
    { titulo: "Atendimento Presencial", descricao: "Visite nossa sede para atendimento personalizado", icone: "ri-building-line", info: "Segunda a Sexta, 8h às 14h" },
    { titulo: "WhatsApp", descricao: "Atendimento rápido via WhatsApp", icone: "ri-whatsapp-line", info: "(93) 99221-1254" },
    { titulo: "Redes Sociais", descricao: "Acompanhe nossas redes sociais", icone: "ri-share-line", info: "@semju.orixi" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* HERO */}
      <section
        className="relative py-24 bg-cover bg-center bg-no-repeat text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(22,163,74,0.85), rgba(5,150,105,0.85)), url('https://readdy.ai/api/search-image?query=amazon%20government%20office%20community%20center%20in%20Oriximin%C3%A1&width=1200&height=600')`
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Entre em Contato</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Estamos aqui para ouvir você! Tire dúvidas, envie sugestões ou conheça mais sobre nossos programas.
          </p>
        </div>
      </section>



      {/* CANAIS DE ATENDIMENTO */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#004201] mb-10 text-center">Canais de Atendimento</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {canaisAtendimento.map((canal, i) => (
              <div key={i} className="bg-white/90 backdrop-blur-md border border-green-100 rounded-2xl shadow-md p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 bg-[#16A34A] rounded-full flex items-center justify-center mx-auto mb-3 animate-bounce-slow">
                  <i className={`${canal.icone} text-white text-xl`}></i>
                </div>
                <h4 className="text-lg font-bold text-[#1E1E1E] mb-2">{canal.titulo}</h4>
                <p className="text-gray-600 text-sm mb-2">{canal.descricao}</p>
                <p className="text-sm text-[#F59E0B] font-medium">{canal.info}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAPA */}
      <section className="py-16 bg-green-50 border-t border-green-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#004201] mb-8">Onde Estamos 📍</h2>
          <p className="text-gray-700 mb-6">
            Rua Barão do Rio Branco, 2336 - Centro, Oriximiná - PA, CEP: 68270-000
          </p>

          <div className="overflow-hidden rounded-2xl shadow-lg border border-green-100">
            <iframe
              title="Localização da SEMJU Oriximiná"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.765072369406!2d-55.86800658522038!3d-1.7697559986198456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92e9b8bb12a37e7f%3A0x7f8b8b8b8b8b8b8!2sOriximin%C3%A1%2C%20PA%2C%20Brasil!5e0!3m2!1spt-BR!2sbr!4v1709209485930!5m2!1spt-BR!2sbr"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl"
            ></iframe>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

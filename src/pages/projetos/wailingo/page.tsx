import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import Button from '../../../components/base/Button';

export default function WaiLingo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F8F4] to-[#E8F0FF]">
      <Header />

      {/* Hero Section */}
      <section
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(27, 73, 101, 0.8), rgba(14, 77, 43, 0.8)), url('https://readdy.ai/api/search-image?query=Young%20indigenous%20students%20using%20modern%20tablets%20and%20smartphones%20for%20bilingual%20education%2C%20traditional%20Amazon%20village%20setting%20with%20modern%20technology%20integration%2C%20colorful%20educational%20app%20interfaces%2C%20cultural%20bridge%20between%20traditional%20and%20digital%20learning%2C%20bright%20natural%20lighting%2C%20hope%20and%20innovation&width=1920&height=800&seq=wailingo-hero&orientation=landscape')`,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              WaiLingo
            </h1>
            <p className="text-2xl text-white/90 mb-8 leading-relaxed">
              Aplicativo Bilíngue para Inclusão Educacional e Preservação das Línguas Indígenas da Amazônia
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
              <p className="text-white text-lg leading-relaxed">
                Uma ferramenta digital inovadora que conecta saberes tradicionais e modernos,
                apoiando a inclusão educacional de jovens indígenas da Amazônia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Coluna Esquerda - Detalhes do Projeto */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-[#0E4D2B] mb-6">Sobre o Projeto</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                <p>
                  O WaiLingo é um aplicativo inovador que nasce com a missão de apoiar a inclusão
                  educacional de jovens indígenas da Amazônia e, ao mesmo tempo, contribuir para a
                  preservação e valorização das línguas nativas.
                </p>
                <p>
                  A proposta do aplicativo vai além de ser apenas uma ferramenta digital de ensino,
                  busca criar um ambiente de aprendizado que respeite a diversidade cultural, reconheça
                  os saberes tradicionais e dê visibilidade às identidades indígenas que compõem a
                  riqueza do território amazônico.
                </p>
                <p>
                  Seu objetivo central é oferecer uma experiência de aprendizagem bilíngue, integrando
                  o português e a língua indígena, tornando possível que jovens fortaleçam suas raízes
                  ao mesmo tempo em que se conectam a novos horizontes educacionais.
                </p>
              </div>

              {/* Galeria */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-[#0E4D2B] mb-6">Galeria do Projeto</h3>
                <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img
                      src="/public/wailingo.png"
                      alt="Aplicativo WaiLingo"
                      className="w-full h-144 object-cover object-top"
                    />
                  </div>

                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img
                      src="/public/wailingo1.jpg"
                      alt="Aplicativo WaiLingo"
                      className="w-full h-144 object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna Direita - Informações */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-[#E8F0FF] to-white rounded-xl p-8 shadow-lg sticky top-8">
                <h3 className="text-2xl font-bold text-[#0E4D2B] mb-6">Informações do Projeto</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-[#0E4D2B] mb-2">Responsável</h4>
                    <p className="text-gray-600">SEMJU / UFOPA Campus Oriximiná</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#0E4D2B] mb-2">Área de Impacto</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-[#1B4965] text-white px-3 py-1 rounded-full text-sm">Tecnologia</span>
                      <span className="bg-[#0E4D2B] text-white px-3 py-1 rounded-full text-sm">Educação</span>
                      <span className="bg-[#C6A15B] text-white px-3 py-1 rounded-full text-sm">Inclusão</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#0E4D2B] mb-2">Plataforma</h4>
                    <p className="text-gray-600">Aplicativo móvel multiplataforma</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#0E4D2B] mb-2">Idiomas</h4>
                    <p className="text-gray-600">Português + Línguas indígenas amazônicas</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#0E4D2B] mb-2">Público-Alvo</h4>
                    <p className="text-gray-600">Jovens indígenas da Amazônia</p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <Button
                    href="/projetos"
                    variant="outline"
                    className="w-full"
                  >
                    <i className="ri-arrow-left-line mr-2"></i>
                    Voltar aos Projetos
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-20 bg-gradient-to-r from-[#E8F0FF] to-[#F5F8F4]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#0E4D2B] text-center mb-12">
            Inovação Educacional
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center transform hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-gradient-to-r from-[#1B4965] to-[#0E4D2B] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-smartphone-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-[#0E4D2B] mb-4">Tecnologia Acessível</h3>
              <p className="text-gray-600">
                Interface intuitiva adaptada às necessidades das comunidades indígenas
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center transform hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-gradient-to-r from-[#0E4D2B] to-[#C6A15B] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-heart-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-[#0E4D2B] mb-4">Preservação Cultural</h3>
              <p className="text-gray-600">
                Mantém vivas as tradições enquanto facilita o acesso ao conhecimento moderno
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center transform hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-gradient-to-r from-[#C6A15B] to-[#1B4965] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-rocket-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-[#0E4D2B] mb-4">Futuro Inclusivo</h3>
              <p className="text-gray-600">
                Conecta jovens indígenas a oportunidades educacionais e profissionais
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

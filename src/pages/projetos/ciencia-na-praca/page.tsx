
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import Button from '../../../components/base/Button';

export default function CienciaNaPraca() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F8F4] to-[#E8F5E8]">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(14, 77, 43, 0.7), rgba(27, 73, 101, 0.7)), url('https://readdy.ai/api/search-image?query=University%20students%20and%20professors%20conducting%20outdoor%20science%20exhibition%20in%20a%20public%20square%20in%20Amazon%20city%2C%20interactive%20displays%20about%20biodiversity%20conservation%2C%20families%20and%20children%20learning%20together%2C%20colorful%20educational%20banners%2C%20tropical%20plants%20and%20trees%20in%20background%2C%20bright%20sunny%20day%20with%20golden%20light%2C%20community%20engagement%20and%20scientific%20education&width=1920&height=800&seq=ciencia-praca-hero&orientation=landscape')`
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Ciência na Praça
            </h1>
            <p className="text-2xl text-white/90 mb-8 leading-relaxed">
              Conhecer para Conservar
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
              <p className="text-white text-lg leading-relaxed">
                Aproximando a produção científica da UFOPA da comunidade através de exposições 
                itinerantes que democratizam o conhecimento e promovem a conservação da biodiversidade amazônica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-[#0E4D2B] mb-6">Sobre o Projeto</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                <p>
                  O Projeto Ciência na Praça busca aproximar a produção científica da UFOPA – Campus 
                  Oriximiná da comunidade, por meio de exposições itinerantes em praças públicas realizadas 
                  mensalmente em diferentes bairros.
                </p>
                <p>
                  A iniciativa integra docentes e estudantes, que atuam como mediadores e palestrantes, 
                  fortalecendo a relação entre universidade e sociedade. O projeto também marca presença 
                  em eventos culturais locais, como a Feira Agropecuária e o Círio, ampliando sua visibilidade.
                </p>
                <p>
                  Seu impacto esperado é democratizar o acesso ao conhecimento, valorizar a ciência, 
                  promover a conservação da biodiversidade e formar cidadãos mais críticos e participativos 
                  no desenvolvimento de Oriximiná.
                </p>
              </div>

              {/* Project Gallery */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-[#0E4D2B] mb-6">Galeria do Projeto</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="/napraca.jpg"
                      className="w-full h-64 object-cover object-top"
                    />
                  </div>
                  
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                     src="/napraca1.jpg"
                      alt="Interação com a comunidade"
                      className="w-full h-64 object-cover object-top"
                    />
                  </div>
                  
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="/napraca2.jpg"
                      className="w-full h-64 object-cover object-top"
                    />
                  </div>
                  
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="/napraca3.jpg"
                      className="w-full h-64 object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-[#F5F8F4] to-white rounded-xl p-8 shadow-lg sticky top-8">
                <h3 className="text-2xl font-bold text-[#0E4D2B] mb-6">Informações do Projeto</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-[#0E4D2B] mb-2">Responsável</h4>
                    <p className="text-gray-600">SEMJU / UFOPA Campus Oriximiná</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[#0E4D2B] mb-2">Área de Impacto</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-[#0E4D2B] text-white px-3 py-1 rounded-full text-sm">Educação</span>
                      <span className="bg-[#C6A15B] text-white px-3 py-1 rounded-full text-sm">Ciência</span>
                      <span className="bg-[#1B4965] text-white px-3 py-1 rounded-full text-sm">Meio Ambiente</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[#0E4D2B] mb-2">Local de Execução</h4>
                    <p className="text-gray-600">Praças públicas de Oriximiná</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[#0E4D2B] mb-2">Frequência</h4>
                    <p className="text-gray-600">Exposições mensais itinerantes</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[#0E4D2B] mb-2">Público-Alvo</h4>
                    <p className="text-gray-600">Comunidade em geral, estudantes e famílias</p>
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

      {/* Impact Section */}
      <section className="py-20 bg-[#F5F8F4]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#0E4D2B] text-center mb-12">
            Impacto na Comunidade
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center transform hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-[#1B4965] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-microscope-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-[#0E4D2B] mb-4">Divulgação Científica</h3>
              <p className="text-gray-600">
                Torna a ciência acessível e compreensível para toda a comunidade
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg text-center transform hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-[#B8934F] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-community-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-[#0E4D2B] mb-4">Engajamento Social</h3>
              <p className="text-gray-600">
                Fortalece a participação cidadã em questões ambientais e científicas
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg text-center transform hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-[#0E4D2B] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-seedling-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-[#0E4D2B] mb-4">Consciência Ambiental</h3>
              <p className="text-gray-600">
                Promove a valorização e conservação da biodiversidade amazônica
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

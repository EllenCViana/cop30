
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import Button from '../../../components/base/Button';

export default function CumaTrack() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F8F4] to-[#FFF8E7]">
      <Header />

      {/* Hero Section */}
      <section
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(14, 77, 43, 0.8), rgba(198, 161, 91, 0.8)), url('https://readdy.ai/api/search-image?query=Amazon%20cumaru%20tree%20seeds%20and%20sustainable%20harvesting%20with%20modern%20blockchain%20technology%20integration%2C%20digital%20tracking%20systems%2C%20sustainable%20forest%20management%2C%20traditional%20collectors%20using%20smartphones%20and%20QR%20codes%2C%20golden%20cumaru%20seeds%2C%20lush%20rainforest%20background%2C%20innovation%20meets%20tradition&width=1920&height=800&seq=cumatrack-hero&orientation=landscape')`
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              CumaTrack
            </h1>
            <p className="text-2xl text-white/90 mb-8 leading-relaxed">
              Rastreabilidade e Segurança da Cadeia Produtiva do Cumaru com Blockchain
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
              <p className="text-white text-lg leading-relaxed">
                Inovação tecnológica que une blockchain e sustentabilidade para garantir
                a origem e qualidade dos produtos amazônicos no mercado global.
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
                  O CumaTrack é um sistema de rastreabilidade agrícola desenvolvido para garantir transparência 
                  e confiança em toda a cadeia produtiva do cumaru — uma semente de alto valor econômico e cultural 
                  na Amazônia. A plataforma permite registrar e acompanhar cada etapa do processo, desde o cultivo 
                  nas fazendas até a chegada do produto final ao consumidor. Dessa forma, produtores, cooperativas 
                  e compradores têm acesso a informações verificadas sobre a origem e a qualidade do cumaru, fortalecendo 
                  práticas sustentáveis e valorizando o trabalho das comunidades locais.
                </p>
                <p>
                  Além de promover rastreabilidade, o CumaTrack também atua como uma ferramenta de gestão agrícola inteligente, 
                  oferecendo relatórios, indicadores e análises sobre produção, lotes e desempenho das fazendas. Isso auxilia 
                  produtores e gestores a tomarem decisões mais estratégicas, melhorando a produtividade e a eficiência no manejo. 
                  A interface do sistema é intuitiva e foi pensada com foco na experiência do usuário, garantindo fácil acesso às 
                  informações tanto pelo aplicativo móvel quanto pelo painel web.
                </p>
                <p>
                  Outro diferencial do projeto é a integração com tecnologia blockchain, que assegura a autenticidade dos dados 
                  registrados. Essa integração permite que, ao escanear um QR Code presente nos produtos derivados do cumaru, o 
                  consumidor visualize a origem exata da matéria-prima e sua trajetória até o mercado. O CumaTrack, portanto, 
                  representa uma união entre tecnologia, sustentabilidade e valorização regional, impulsionando a economia amazônica 
                  por meio da inovação e da confiança digital.
                </p>
              </div>

              {/* Project Gallery */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-[#0E4D2B] mb-6">Galeria do Projeto</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img
                      src="/qrcode2.png"
                      alt="QR Code do CumaTrack"
                      className="w-full h-72 object-cover object-top"
                    />
                  </div>

                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img
                      src="/qrcode.png"
                      alt="QR Code na arvore de Cumaru"
                      className="w-full h-72 object-cover object-top"
                    />
                  </div>

                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img
                      src="/cumaru12.jpg"
                      alt="Cumatrack"
                      className="w-full h-72 object-cover object-top"
                    />
                    {/* <div className="p-4 bg-white">
                      <h4 className="font-semibold text-[#0E4D2B]">Produtores Locais</h4>
                      <p className="text-sm text-gray-600">Inclusão digital de comunidades tradicionais</p>
                    </div> */}
                  </div>

                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img
                      src="/cumatrackapp.png"
                      alt="Cumatrack"
                      className="w-full h-72 object-cover object-top"
                    />
                    {/* <div className="p-4 bg-white">
                      <h4 className="font-semibold text-[#0E4D2B]">Mercado Global</h4>
                      <p className="text-sm text-gray-600">Produtos certificados no mercado internacional</p>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-[#FFF8E7] to-white rounded-xl p-8 shadow-lg sticky top-8">
                <h3 className="text-2xl font-bold text-[#0E4D2B] mb-6">Informações do Projeto</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-[#0E4D2B] mb-2">Responsável</h4>
                    <p className="text-gray-600">SEMJU / UFOPA Campus Oriximiná</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#0E4D2B] mb-2">Área de Impacto</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-[#0E4D2B] text-white px-3 py-1 rounded-full text-sm">Sustentabilidade</span>
                      <span className="bg-[#C6A15B] text-white px-3 py-1 rounded-full text-sm">Tecnologia</span>
                      <span className="bg-[#1B4965] text-white px-3 py-1 rounded-full text-sm">Economia</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#0E4D2B] mb-2">Produto Foco</h4>
                    <p className="text-gray-600">Cumaru amazônico</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#0E4D2B] mb-2">Tecnologia Principal</h4>
                    <p className="text-gray-600">Blockchain e IoT</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#0E4D2B] mb-2">Beneficiários</h4>
                    <p className="text-gray-600">Produtores, distribuidores e consumidores</p>
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

      {/* Blockchain Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-[#FFF8E7] to-[#F5F8F4]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#0E4D2B] text-center mb-12">
            Benefícios da Rastreabilidade
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center transform hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-gradient-to-r from-[#0E4D2B] to-[#1B4965] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-shield-check-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-[#0E4D2B] mb-4">Transparência Total</h3>
              <p className="text-gray-600">
                Rastreamento completo desde a coleta até o consumidor final
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center transform hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-gradient-to-r from-[#C6A15B] to-[#B8934F] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-leaf-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-[#0E4D2B] mb-4">Sustentabilidade Comprovada</h3>
              <p className="text-gray-600">
                Certificação digital de práticas ambientalmente responsáveis
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center transform hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-gradient-to-r from-[#1B4965] to-[#C6A15B] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-money-dollar-circle-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-[#0E4D2B] mb-4">Valorização Comercial</h3>
              <p className="text-gray-600">
                Diferenciação no mercado global através da origem certificada
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#0E4D2B] text-center mb-12">
            Fluxo de Rastreabilidade
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-[#0E4D2B] to-[#1B4965] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-seedling-line text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold text-[#0E4D2B] mb-2">1. Coleta</h3>
              <p className="text-gray-600 text-sm">Registro da origem e data de coleta do cumaru</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-[#1B4965] to-[#C6A15B] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-truck-line text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold text-[#0E4D2B] mb-2">2. Transporte</h3>
              <p className="text-gray-600 text-sm">Monitoramento durante toda a logística</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-[#C6A15B] to-[#B8934F] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-settings-line text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold text-[#0E4D2B] mb-2">3. Processamento</h3>
              <p className="text-gray-600 text-sm">Registro de todas as etapas de beneficiamento</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-[#B8934F] to-[#0E4D2B] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shopping-cart-line text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold text-[#0E4D2B] mb-2">4. Consumidor</h3>
              <p className="text-gray-600 text-sm">Acesso completo ao histórico do produto</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

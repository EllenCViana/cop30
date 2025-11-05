
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import Button from '../../../components/base/Button';

export default function WaiWaiTapota() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F8F4] to-[#FFF8E7]">
      <Header />

      {/* Hero Section */}
      <section
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(198, 161, 91, 0.8), rgba(184, 147, 79, 0.8)), url('https://readdy.ai/api/search-image?query=Indigenous%20Wai%20Wai%20people%20preserving%20their%20culture%20and%20language%2C%20traditional%20crafts%20and%20storytelling%2C%20elders%20teaching%20young%20people%2C%20digital%20technology%20integration%20with%20traditional%20knowledge%2C%20Amazon%20rainforest%20setting%2C%20cultural%20preservation%20activities%2C%20warm%20golden%20lighting%2C%20intergenerational%20learning&width=1920&height=800&seq=wai-wai-hero&orientation=landscape')`
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Wai
            </h1>
            <p className="text-2xl text-white/90 mb-8 leading-relaxed">
Educação, tecnologia e inclusão linguística por meio da gamificação
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
              <p className="text-white text-lg leading-relaxed">
                Revitalizando a língua Wai Wai do tronco Karib através de tecnologia digital,
                preservando a diversidade linguística e cultural da Amazônia para as futuras gerações.
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
                  O Wai é um jogo educativo e cultural criado com o propósito de fortalecer a inclusão
                  social e linguística da comunidade indígena Wai Wai, localizada em Oriximiná, no Pará.
                  A iniciativa funciona como uma ferramenta de apoio à adaptação dos indígenas à vida urbana,
                  oferecendo informações práticas e ensinamentos de língua portuguesa de forma interativa e
                  acessível. Por meio da tecnologia, o projeto busca reduzir barreiras de comunicação e
                  ampliar as oportunidades de integração dos Wai Wai na sociedade, promovendo autonomia
                  e valorizando sua identidade cultural.
                </p>
                <p>
                  No jogo, o jogador acompanha a história de Kesemani, um personagem indígena que se muda da aldeia
                  para a cidade e enfrenta desafios de convivência e comunicação em ambientes urbanos. Através de diálogos,
                  quizzes e missões, o usuário aprende expressões e vocabulários do português, simulando situações cotidianas
                  em locais como mercados, escolas e repartições públicas. Essa abordagem lúdica e contextual torna o aprendizado
                  mais acessível e significativo, especialmente para quem está em transição cultural.
                </p>
                <p>
                  Mais do que um jogo, o Wai representa uma ponte entre culturas — unindo o conhecimento ancestral dos povos 
                  indígenas à tecnologia moderna. O projeto reforça o respeito à diversidade linguística e cultural da Amazônia,
                  valorizando a identidade dos Wai Wai enquanto promove sua autonomia fora da aldeia. Dessa forma, a iniciativa 
                  se consolida como um exemplo inspirador de como o design, a educação e a tecnologia podem caminhar juntos para 
                  gerar transformação social.
                </p>
              </div>

              {/* Project Gallery */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-[#0E4D2B] mb-6">Galeria do Projeto</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img
                      src="https://readdy.ai/api/search-image?query=Wai%20Wai%20indigenous%20elders%20teaching%20traditional%20language%20to%20young%20people%20using%20digital%20tablets%20and%20traditional%20materials%2C%20intergenerational%20knowledge%20transfer%2C%20authentic%20indigenous%20setting%20with%20traditional%20crafts%20and%20decorations%2C%20warm%20community%20atmosphere%2C%20cultural%20preservation&width=600&height=400&seq=wai-wai-1&orientation=landscape"
                      alt="Ensino da língua Wai Wai"
                      className="w-full h-64 object-cover object-top"
                    />
                    <div className="p-4 bg-white">
                      <h4 className="font-semibold text-[#0E4D2B]">Ensino Tradicional</h4>
                      <p className="text-sm text-gray-600">Anciãos transmitindo conhecimento linguístico</p>
                    </div>
                  </div>

                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img
                      src="https://readdy.ai/api/search-image?query=Digital%20repository%20interface%20showing%20Wai%20Wai%20language%20materials%2C%20bilingual%20dictionary%20app%20on%20tablet%20screen%2C%20indigenous%20language%20learning%20platform%2C%20modern%20technology%20preserving%20traditional%20culture%2C%20user-friendly%20educational%20interface&width=600&height=400&seq=wai-wai-2&orientation=landscape"
                      alt="Repositório digital"
                      className="w-full h-64 object-cover object-top"
                    />
                    <div className="p-4 bg-white">
                      <h4 className="font-semibold text-[#0E4D2B]">Repositório Digital</h4>
                      <p className="text-sm text-gray-600">Plataforma bilíngue Wai Wai-Português</p>
                    </div>
                  </div>

                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img
                      src="https://readdy.ai/api/search-image?query=Bilingual%20street%20signs%20in%20Portuguese%20and%20Wai%20Wai%20language%20in%20public%20square%20in%20Amazon%20city%2C%20urban%20indigenous%20language%20visibility%2C%20cultural%20integration%20in%20city%20spaces%2C%20modern%20signage%20design%2C%20community%20pride%20and%20cultural%20recognition&width=600&height=400&seq=wai-wai-3&orientation=landscape"
                      alt="Placas bilíngues"
                      className="w-full h-64 object-cover object-top"
                    />
                    <div className="p-4 bg-white">
                      <h4 className="font-semibold text-[#0E4D2B]">Sinalização Urbana</h4>
                      <p className="text-sm text-gray-600">Placas bilíngues em espaços públicos</p>
                    </div>
                  </div>

                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img
                      src="https://readdy.ai/api/search-image?query=Indigenous%20students%20using%20educational%20materials%20in%20Wai%20Wai%20language%2C%20classroom%20setting%20with%20traditional%20and%20modern%20learning%20tools%2C%20young%20people%20engaged%20in%20cultural%20learning%2C%20books%20and%20digital%20devices%2C%20educational%20empowerment&width=600&height=400&seq=wai-wai-4&orientation=landscape"
                      alt="Material didático"
                      className="w-full h-64 object-cover object-top"
                    />
                    <div className="p-4 bg-white">
                      <h4 className="font-semibold text-[#0E4D2B]">Materiais Didáticos</h4>
                      <p className="text-sm text-gray-600">Recursos educacionais em língua Wai Wai</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-[#FFF8E7] to-white rounded-xl p-8 shadow-lg sticky top-8">
                <h3 className="text-2xl font-bold text-[#0E4D2B] mb-6">Informações do Projeto</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-[#0E4D2B] mb-2">Responsáveis</h4>
                    <p className="text-gray-600">Marcelo Ferreira de Souza</p>
                    <p className="text-gray-600">Raimundo Martins de Araújo Junior</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#0E4D2B] mb-2">Área de Impacto</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-[#C6A15B] text-white px-3 py-1 rounded-full text-sm">Cultura</span>
                      <span className="bg-[#0E4D2B] text-white px-3 py-1 rounded-full text-sm">Educação</span>
                      <span className="bg-[#1B4965] text-white px-3 py-1 rounded-full text-sm">Tecnologia</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#0E4D2B] mb-2">Local de Execução</h4>
                    <p className="text-gray-600">Norte do Pará e Leste de Roraima</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#0E4D2B] mb-2">Língua Foco</h4>
                    <p className="text-gray-600">Wai Wai (Tronco Karib)</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#0E4D2B] mb-2">Público-Alvo</h4>
                    <p className="text-gray-600">Comunidades indígenas, estudantes e pesquisadores</p>
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

      {/* Cultural Impact Section */}
      <section className="py-20 bg-gradient-to-r from-[#FFF8E7] to-[#F5F8F4]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#0E4D2B] text-center mb-12">
            Preservação Cultural Digital
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center transform hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-gradient-to-r from-[#C6A15B] to-[#B8934F] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-quill-pen-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-[#0E4D2B] mb-4">Revitalização Linguística</h3>
              <p className="text-gray-600">
                Preserva e fortalece a língua Wai Wai para as futuras gerações
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center transform hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-gradient-to-r from-[#0E4D2B] to-[#1B4965] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-global-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-[#0E4D2B] mb-4">Visibilidade Cultural</h3>
              <p className="text-gray-600">
                Promove o reconhecimento da diversidade cultural amazônica
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center transform hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-gradient-to-r from-[#1B4965] to-[#C6A15B] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-graduation-cap-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-[#0E4D2B] mb-4">Educação Intercultural</h3>
              <p className="text-gray-600">
                Facilita o aprendizado bilíngue e a troca de conhecimentos
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

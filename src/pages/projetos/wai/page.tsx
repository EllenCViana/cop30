
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import Button from '../../../components/base/Button';

export default function Wai() {
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
Um jogo sério projetado para auxiliar alunos indígenas da tribo Wai Wai no aprendizado da língua portuguesa durante sua transição da aldeia para a cidade de Oriximiná.

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
                  Este projeto aborda os desafios enfrentados por estudantes indígenas, especificamente da tribo Wai Wai , que migram de suas aldeias para a zona urbana de Oriximiná-PA, para estudar. Uma das maiores dificuldades é a barreira do idioma e a adaptação à língua portuguesa , o que frequentemente resulta em baixo aproveitamento acadêmico. Para mitigar esse problema, foi proposta a criação de um jogo sério , com o objetivo de usar a tecnologia para aperfeiçoar o aprendizado do português por parte desses alunos.

                </p>
                <p>
                  O jogo, intitulado "Wai" , possui um enredo focado no personagem Kesemani, um indígena Wai Wai que sai de sua aldeia rumo à "cidade grande" para estudar. A jogabilidade é baseada em diálogos que ocorrem enquanto Kesemani explora cenários urbanos, como mercados, escolas e praças. Ao final dessas interações, o jogador precisa responder a quizzes para poder avançar na jornada , aprendendo no processo palavras do cotidiano, gramática e formação de frases.

                </p>
                <p>
                  O projeto é o resultado de um Trabalho de Conclusão de Curso (TCC) do Bacharelado em Sistemas de Informação da UFOPA. Para seu desenvolvimento, foram utilizadas tecnologias como o motor de jogos Unity , a linguagem de programação C# , XML para armazenar os diálogos e ferramentas gráficas para a criação de personagens. Atualmente, o jogo já conta com quatro fases jogáveis, e estamos trabalhando ativamente para aprimorar a metodologia de transmissão dos conhecimentos da língua portuguesa de forma eficaz dentro da jogabilidade.
                </p>
              </div>

              {/* Project Gallery */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-[#0E4D2B] mb-6">Galeria do Projeto</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img
                     src="/public/wai1.jpg"
                      alt="Ensino da língua Wai Wai"
                      className="w-full h-64 object-cover object-top"
                    />
                  </div>

                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img
                      src="/public/wai2.jpg"
                      alt="Repositório digital"
                      className="w-full h-64 object-cover object-top"
                    />
                  </div>

                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img
                      src="/public/wai3.jpg"
                      alt="Placas bilíngues"
                      className="w-full h-64 object-cover object-top"
                    />
                  </div>

                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img
                      src="/public/wai4.jpg"
                      alt="Material didático"
                      className="w-full h-64 object-cover object-top"
                    />
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

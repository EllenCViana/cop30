
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function Sobre() {
  const equipe = [
    {
      nome: "Maria Silva",
      cargo: "Secretária Municipal da Juventude",
      descricao: "Liderança em políticas públicas para juventude com foco em sustentabilidade amazônica.",
      imagem: "https://readdy.ai/api/search-image?query=Professional%20woman%20leader%20in%20government%20office%20in%20Amazon%20region%2C%20wearing%20formal%20attire%2C%20confident%20expression%2C%20modern%20office%20background%20with%20plants%20and%20natural%20lighting%2C%20portrait%20style%20photography&width=300&height=300&seq=1&orientation=squarish"
    },
    {
      nome: "João Santos",
      cargo: "Coordenador de Projetos",
      descricao: "Especialista em gestão de projetos inovadores e parcerias com universidades.",
      imagem: "https://readdy.ai/api/search-image?query=Professional%20man%20project%20coordinator%20in%20Amazon%20region%2C%20wearing%20casual%20formal%20attire%2C%20friendly%20smile%2C%20modern%20workspace%20with%20technology%20and%20nature%20elements%2C%20portrait%20photography&width=300&height=300&seq=2&orientation=squarish"
    },
    {
      nome: "Ana Costa",
      cargo: "Coordenadora de Inclusão Digital",
      descricao: "Responsável por programas de tecnologia e inclusão digital para jovens indígenas.",
      imagem: "https://readdy.ai/api/search-image?query=Professional%20woman%20technology%20coordinator%20working%20with%20indigenous%20youth%2C%20wearing%20modern%20casual%20attire%2C%20warm%20expression%2C%20office%20with%20computers%20and%20cultural%20elements%2C%20portrait%20style&width=300&height=300&seq=3&orientation=squarish"
    },
    {
      nome: "Carlos Ribeiro",
      cargo: "Especialista em Sustentabilidade",
      descricao: "Foco em projetos ambientais e desenvolvimento sustentável na Amazônia.",
      imagem: "https://readdy.ai/api/search-image?query=Professional%20man%20environmental%20specialist%20in%20Amazon%20region%2C%20wearing%20field%20work%20attire%2C%20confident%20look%2C%20background%20with%20forest%20and%20sustainability%20elements%2C%20natural%20lighting%20portrait&width=300&height=300&seq=4&orientation=squarish"
    }
  ];

  const valores = [
    {
      icone: "ri-heart-line",
      titulo: "Inclusão",
      descricao: "Promovemos a participação de todas as juventudes, respeitando suas diversidades e especificidades."
    },
    {
      icone: "ri-leaf-line",
      titulo: "Sustentabilidade",
      descricao: "Desenvolvemos ações que preservam a Amazônia e promovem o desenvolvimento sustentável."
    },
    {
      icone: "ri-lightbulb-line",
      titulo: "Inovação",
      descricao: "Utilizamos tecnologia e métodos inovadores para criar soluções efetivas para os jovens."
    },
    {
      icone: "ri-group-line",
      titulo: "Participação",
      descricao: "Incentivamos o protagonismo jovem e a participação ativa na construção de políticas públicas."
    },
    {
      icone: "ri-book-open-line",
      titulo: "Educação",
      descricao: "Valorizamos a educação como ferramenta de transformação social e desenvolvimento pessoal."
    },
    {
      icone: "ri-global-line",
      titulo: "Diversidade Cultural",
      descricao: "Celebramos e preservamos a riqueza cultural das comunidades amazônicas."
    }
  ];

  const conquistas = [
    {
      numero: "4",
      titulo: "Projetos Inovadores",
      descricao: "Desenvolvidos em parceria com a UFOPA"
    },
    {
      numero: "300+",
      titulo: "Jovens Impactados",
      descricao: "Diretamente beneficiados pelos programas"
    },
    {
      numero: "15+",
      titulo: "Comunidades Atendidas",
      descricao: "Urbanas, rurais, ribeirinhas e indígenas"
    },
    {
      numero: "1",
      titulo: "Ano de Atuação",
      descricao: "Transformando vidas na Amazônia"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(22, 163, 74, 0.8), rgba(5, 150, 105, 0.8)), url('https://readdy.ai/api/search-image?query=Modern%20government%20building%20in%20Amazon%20region%20with%20lush%20green%20vegetation%2C%20young%20people%20walking%20around%2C%20bright%20sunny%20day%2C%20professional%20architecture%20integrated%20with%20nature%2C%20wide%20angle%20view&width=1200&height=600&seq=5&orientation=landscape')`
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Sobre a SEMJU</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Conheça a Secretaria Municipal da Juventude de Oriximiná, 
            um órgão dedicado a fortalecer políticas públicas e promover 
            o protagonismo jovem na Amazônia.
          </p>
        </div>
      </section>

      {/* O que é a SEMJU */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#004201] mb-8">O que é a Secretaria Municipal da Juventude?</h2>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  É o "link" entre a galera e o poder público! É o braço direito da juventude no governo, 
                  transformando ideias em ação e garantindo que a voz dos jovens ecoe nas políticas públicas.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Uma mistura de <strong>ativista</strong>, <strong>gestora</strong> e <strong>sonhadora</strong> que trabalha 
                  para empoderar, incluir e abrir caminhos.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://static.readdy.ai/image/eb8d15b9a0cd3fa48499f9786766c284/21dbd7f2a23044f469e2f9cd546764ec.jpeg"
                alt="Infográfico sobre a SEMJU"
                className="rounded-2xl shadow-lg w-full h-96 object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Qual a importância dela */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://readdy.ai/api/search-image?query=Young%20diverse%20group%20from%20Amazon%20region%20participating%20in%20community%20meeting%2C%20indigenous%2C%20quilombola%2C%20riverside%20and%20urban%20youth%20together%2C%20collaborative%20atmosphere%2C%20natural%20lighting%2C%20documentary%20style%20photography&width=600&height=400&seq=6&orientation=landscape"
                alt="Juventudes diversas de Oriximiná"
                className="rounded-2xl shadow-lg w-full h-96 object-cover object-top"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#004201] mb-8">Qual a importância dela?</h2>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Se movimenta como uma <strong>hub de inovação social</strong>, uma ponte entre 
                  os sonhos dos jovens e as políticas públicas. Potencializando vozes, 
                  transformando ideias em ações e criando oportunidades.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  É o <strong>startup lab do governo</strong>, que acelera projetos, empodera a nova 
                  geração, combate desigualdades e prepara líderes para o futuro!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O que ela significa para nós */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#004201] mb-8">O que ela significa para nós, jovens oriximinaenses?</h2>
              <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 shadow-lg text-white">
                <p className="text-lg leading-relaxed mb-6">
                  Como em um <strong>aplicativo de oportunidades</strong>, é a <strong>bateria social</strong> que recarrega nossos 
                  sonhos com políticas públicas que funcionam, a <strong>ponte de acesso</strong> que conecta talentos 
                  submersos ao palco do desenvolvimento e o <strong>modo multiplayer</strong> que transforma 
                  lutas individuais em vitórias coletivas.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://readdy.ai/api/search-image?query=Young%20people%20from%20Oriximin%C3%A1%20using%20technology%20and%20participating%20in%20social%20programs%2C%20diverse%20group%20including%20indigenous%20and%20riverside%20youth%2C%20modern%20setting%20with%20Amazon%20background%2C%20empowerment%20atmosphere&width=600&height=400&seq=7&orientation=landscape"
                alt="Jovens oriximinaenses empoderados"
                className="rounded-2xl shadow-lg w-full h-96 object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Missão e Visão */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#004201] mb-12">Nossa Missão</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Fortalecer as políticas públicas voltadas à juventude e promover o protagonismo jovem 
                na construção de um futuro sustentável, inclusivo e inovador na Amazônia.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Desenvolvemos programas que dialogam com as realidades das juventudes urbanas, 
                rurais, ribeirinhas, quilombolas e indígenas, refletindo a diversidade cultural 
                e social de Oriximiná.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#004201] mb-12">Nossos Valores</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {valores.map((valor, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100">
                <div className="w-16 h-16 bg-[#16A34A] rounded-full flex items-center justify-center mb-4 mx-auto">
                  <i className={`${valor.icone} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-[#004201] text-center mb-3">{valor.titulo}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{valor.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conquistas */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#004201] mb-12">Nossas Conquistas</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {conquistas.map((conquista, index) => (
              <div key={index} className="text-center bg-[#16A34A] rounded-xl p-8 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl font-bold mb-2">{conquista.numero}</div>
                <h3 className="text-xl font-semibold mb-2">{conquista.titulo}</h3>
                <p className="text-green-100">{conquista.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#004201] mb-12">Nossa Equipe</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipe.map((membro, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-green-100">
                <img 
                  src={membro.imagem}
                  alt={membro.nome}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover object-top shadow-md"
                />
                <h3 className="text-xl font-bold text-[#16A34A] mb-2">{membro.nome}</h3>
                <p className="text-[#F59E0B] font-semibold mb-3">{membro.cargo}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{membro.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parcerias */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#004201] mb-12">Parcerias Estratégicas</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
                <h3 className="text-2xl font-bold text-[#16A34A] mb-4">UFOPA - Universidade Federal do Oeste do Pará</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Nossa principal parceria acadêmica, que viabiliza o desenvolvimento de projetos 
                  inovadores como Ciência na Praça, Wai Wai Tapota, WaiLingo e CumaTrack.
                </p>
                <p className="text-gray-600">
                  Juntos, integramos educação, pesquisa e extensão para criar soluções 
                  que beneficiam diretamente a juventude oriximinaense.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://readdy.ai/api/search-image?query=University%20partnership%20meeting%20in%20Amazon%20region%2C%20young%20students%20and%20professors%20collaborating%20on%20innovative%20projects%2C%20modern%20classroom%20with%20technology%2C%20collaborative%20atmosphere%2C%20natural%20lighting&width=600&height=400&seq=8&orientation=landscape"
                alt="Parceria SEMJU e UFOPA"
                className="rounded-2xl shadow-lg w-full h-96 object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* COP30 */}
      <section className="py-16 bg-gradient-to-r from-[#2A612A] to-[#0B3C1C] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">SEMJU na COP30</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl leading-relaxed mb-8">
              Na COP30, a SEMJU apresenta ao mundo iniciativas que unem ciência, inovação e sustentabilidade. 
              Nossos projetos evidenciam o compromisso da gestão municipal com a preservação ambiental, 
              a valorização das identidades culturais e a transformação social por meio do conhecimento.
            </p>
            <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
              <p className="text-lg font-semibold">
                "Mais do que uma secretaria, a SEMJU é um movimento de juventude viva e atuante, 
                que acredita na potência da Amazônia e no poder dos jovens para moldar um futuro 
                mais justo, inclusivo e sustentável."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#1E1E1E] mb-12">Entre em Contato</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-white rounded-xl p-6 shadow-lg border border-green-100">
              <div className="w-16 h-16 bg-[#16A34A] rounded-full flex items-center justify-center mb-4 mx-auto">
                <i className="ri-map-pin-line text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold text-[#1E1E1E] mb-2">Endereço</h3>
              <p className="text-gray-600">Rua Barão do Rio Branco, 2336<br />Centro, Oriximiná - PA</p>
            </div>
            <div className="text-center bg-white rounded-xl p-6 shadow-lg border border-green-100">
              <div className="w-16 h-16 bg-[#16A34A] rounded-full flex items-center justify-center mb-4 mx-auto">
                <i className="ri-phone-line text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold text-[#1E1E1E] mb-2">Telefone</h3>
              <p className="text-gray-600">(93) 99221-1254<br />semju.oriximina@gmail.com</p>
            </div>
            <div className="text-center bg-white rounded-xl p-6 shadow-lg border border-green-100">
              <div className="w-16 h-16 bg-[#16A34A] rounded-full flex items-center justify-center mb-4 mx-auto">
                <i className="ri-time-line text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold text-[#1E1E1E] mb-2">Horário</h3>
              <p className="text-gray-600">Segunda a Sexta<br />8h às 14h</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

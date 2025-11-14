
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function Sobre() {
  const equipe = [
    {
      nome: "Nara Maia",
      cargo: "Secretária Municipal da Juventude",
      descricao: "Liderança em políticas públicas para juventude.",
      imagem: "/IMG_0848.JPG"
    },
    {
      nome: "Khalil Dias",
      cargo: "Colaborador do Projeto",
      descricao: "Especialista em desenvolvimento de Software.",
      imagem: "/khalil.jpg"
    },
    {
      nome: "Ellen Viana",
      cargo: "Colaboradora do Projeto",
      descricao: "Especialista em Experiência do Usuário.",
      imagem: "/ellen.jpg"
    },
    {
      nome: "Marcelo Souza",
      cargo: "Colaborador do Projeto",
      descricao: "Especialista em Desenvolvimento de Games.",
      imagem: "/marcelo.jpg"
    }
  ];

  const valores = [
    {
      icone: "ri-heart-line",
      titulo: "Protagonismo Juvenil",
      descricao: "Valorizamos a juventude como agente ativa na construção de políticas públicas e no desenvolvimento de Oriximiná."
    },
    {
      icone: "ri-leaf-line",
      titulo: "Inclusão e Diversidade",
      descricao: "Respeitamos e promovemos a pluralidade cultural, étnica, social e territorial dos jovens, incluindo indígenas, ribeirinhos, quilombolas e urbanos."
    },
    {
      icone: "ri-lightbulb-line",
      titulo: "Participação Cidadã",
      descricao: "Incentivamos a escuta ativa, o diálogo democrático e o envolvimento direto dos jovens nas decisões que impactam suas vidas."
    },
    {
      icone: "ri-group-line",
      titulo: "Equidade e Justiça Social",
      descricao: "Trabalhamos para reduzir desigualdades, ampliando o acesso a oportunidades de educação, trabalho, cultura, esporte e saúde"
    },
    {
      icone: "ri-book-open-line",
      titulo: "Sustentabilidade e Amor pela Amazônia",
      descricao: "Atuamos com compromisso socioambiental, valorizando o território amazônico e promovendo a consciência ecológica entre os jovens."
    },
    {
      icone: "ri-global-line",
      titulo: "Transparência e Ética Pública",
      descricao: "Defendemos a gestão pública responsável, ética, transparente e orientada para resultados reais."
    },
        {
      icone: "ri-global-line",
      titulo: "Criatividade e Inovação",
      descricao: "Estimulamos soluções inovadoras, tecnológicas e culturais para os desafios enfrentados pela juventude de Oriximiná."
    },
  ];

  const conquistas = [
    {
      numero: "200",
      titulo: "",
      descricao: "Jovens - Projetos Inovadores"
    },
    {
      numero: "150",
      titulo: "",
      descricao: "MPJ0"
    },
    {
      numero: "100",
      titulo: "",
      descricao: "Projetos Paralelos"
    },
    {
      numero: "387",
      titulo: "",
      descricao: "Pessoas no Instagram"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(16, 135, 60, 0.8), rgba(9, 66, 48, 0.8)), url("/IMG_9038.JPEG.jpg")`
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
                src="/IMG_9038.JPEG.jpg"
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
                src="/IMG_9059.JPEG.jpg"
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
              <div className=" bg-white rounded-2xl p-8 shadow-lg text-black">
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
                src="/IMG_3115.JPG"
                alt="Jovens oriximinaenses empoderados"
                className="rounded-2xl shadow-lg w-full h-96 object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Missão */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#004201] mb-12">Missão</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
Promover, formular e gerir políticas públicas integradas, inclusivas e participativas que garantam o desenvolvimento integral de jovens, crianças e adolescentes de Oriximiná, fomentando a educação, a cultura, o esporte e o empreendedorismo através de iniciativas criativas e inovadoras que acolhem e impulsionam o protagonismo de todas as juventudes do nosso território, garantindo o acesso aos direitos estabelecidos no Estatuto da Juventude.
              </p>
            </div>
          </div>
        </div>
      </section>
            {/* Visão */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#004201] mb-12">Visão</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
Ser referência na promoção de políticas públicas criativas, inovadoras e inclusivas para a juventude amazônica realizar seu potencial, construindo um futuro com mais oportunidades, equidade e participação ativa dos jovens na transformação social de Oriximiná.
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

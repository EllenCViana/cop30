import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import ProjectCard from '../../components/base/ProjectCard';
import { motion } from 'framer-motion';

export default function Projetos() {
  const projects = [
    {
      title: "Wai (Game)",
      description: "Revitalizando a língua e cultura indígena — preservação e fortalecimento da cultura Wai Wai através de ações educativas, culturais e tecnológicas inovadoras para as futuras gerações.",
      href: "/projetos/wai",
      backgroundImage: "/public/wai2.jpg"
    },
    {
      title: "WaiLingo (App)",
      description: "Aplicativo bilíngue para inclusão educacional — tecnologia a serviço da educação intercultural, conectando saberes tradicionais e modernos através de plataforma digital inovadora.",
      href: "/projetos/wailingo",
      backgroundImage: "/public/wailingo1.jpg"
    },
    {
      title: "CumaTrack (App)",
      description: "Blockchain para rastreabilidade do cumaru — inovação tecnológica para garantir a sustentabilidade, origem e qualidade dos produtos amazônicos no mercado global.",
      href: "/projetos/cumatrack",
      backgroundImage: "/public/cumatrack3.jpg"
    },
        {
      title: "Ciência na Praça",
      description: "Conhecer para conservar — projeto que leva ciência e educação ambiental para as comunidades, promovendo a conservação da Amazônia através do conhecimento científico e participação popular.",
      href: "/projetos/ciencia-na-praca",
      backgroundImage: "/public/napraca.jpg"
    },
        {
      title: "Wai Wai Tapota",
      description: "Um jogo educativo que ajuda os indígenas Wai Wai a aprenderem português e se adaptarem à vida urbana, valorizando sua cultura.",
      href: "/projetos/wai-wai-tapota",
      backgroundImage: "https://readdy.ai/api/search-image?query=Indigenous%20Wai%20Wai%20people%20teaching%20traditional%20culture%20and%20language%20to%20young%20people%2C%20colorful%20traditional%20clothing%20and%20crafts%2C%20cultural%20preservation%20activities%2C%20warm%20community%20atmosphere%2C%20traditional%20huts%20and%20Amazon%20forest%20background%2C%20intergenerational%20knowledge%20sharing%2C%20vibrant%20cultural%20elements&width=400&height=300&seq=wai-wai-card&orientation=landscape"
    },
  ];

  return (
    <div className="min-h-screen bg-[#Fdfdfd] text-[#1E1E1E]">
      <Header />

      {/* Hero Section - Projetos */}
      <section
        className="relative flex items-center justify-center py-12 md:py-36 bg-cover bg-center"
      >
        {/* Conteúdo */}
        <div className="relative z-10 text-center px-16 max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-5xl font-bold text-[#FEA000] mb-6"
          >
            Projetos que Transformam Oriximiná
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-2xl text-[#1E1E1E] leading-relaxed max-w-3xl mx-auto"
          >
            Iniciativas que unem ciência, cultura, tecnologia e sustentabilidade —
            revelando o protagonismo da juventude oriximinaense como guardiã da Amazônia.
          </motion.p>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#1E1E1E] rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#1E1E1E] rounded-full mt-2"></div>
          </div>
        </div>
      </section>


      {/* Projects Grid */}
      <section className="py-24 relative bg-cover bg-center"
      >
        <div className="container mx-auto px-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  href={project.href}
                  backgroundImage={project.backgroundImage}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

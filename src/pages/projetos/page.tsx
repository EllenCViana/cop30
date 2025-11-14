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
      backgroundImage: "/wai2.jpg"
    },
    {
      title: "WaiLingo (App)",
      description: "Aplicativo bilíngue para inclusão educacional — tecnologia a serviço da educação intercultural, conectando saberes tradicionais e modernos através de plataforma digital inovadora.",
      href: "/projetos/wailingo",
      backgroundImage: "/wailingo1.jpg"
    },
    {
      title: "CumaTrack (App)",
      description: "Blockchain para rastreabilidade do cumaru — inovação tecnológica para garantir a sustentabilidade, origem e qualidade dos produtos amazônicos no mercado global.",
      href: "/projetos/cumatrack",
      backgroundImage: "/cumatrack3.jpg"
    },
        {
      title: "Ciência na Praça",
      description: "Conhecer para conservar — projeto que leva ciência e educação ambiental para as comunidades, promovendo a conservação da Amazônia através do conhecimento científico e participação popular.",
      href: "/projetos/ciencia-na-praca",
      backgroundImage: "/napraca.jpg"
    },
        {
      title: "Wai Wai Tapota",
      description: "Um jogo educativo que ajuda os indígenas Wai Wai a aprenderem português e se adaptarem à vida urbana, valorizando sua cultura.",
      href: "/projetos/wai-wai-tapota",
      backgroundImage: "/napraca2.jpg"}
  ];

  return (
    <div className="min-h-screen bg-[#Fdfdfd] text-[#1E1E1E]">
      <Header />

      {/* Hero Section - Projetos */}
      <section
        className="relative flex items-center justify-center py-8 md:py-32 bg-cover bg-center"
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
      </section>


      {/* Projects Grid */}
      <section className="py-24 relative bg-cover bg-center"
      >
        <div className="container mx-auto px-8 relative z-10">
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

import { useEffect, useRef, useState } from "react";
import Header from "../../components/feature/Header";
import Footer from "../../components/feature/Footer";
import Button from "../../components/base/Button";
import ProjectCard from "../../components/base/ProjectCard";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollSpeed = 0.5; // velocidade da rolagem
    let scrollPosition = 0;
    let animationFrame: number;

    const animate = () => {
      if (!isPaused && container) {
        scrollPosition += scrollSpeed;
        container.scrollLeft = scrollPosition;

        // Loop infinito: quando metade do conteúdo passar, volta pro início
        if (scrollPosition >= container.scrollWidth / 2) {
          scrollPosition = 0;
          container.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  const projects = [
    { title: "CumaTrack (App)", description: "Blockchain para rastreabilidade do cumaru - Inovação tecnológica para garantir a sustentabilidade e origem dos produtos amazônicos.", href: "/projetos/cumatrack", backgroundImage: "/public/cumatrackapp.png", },
    { title: "Wai (Game)", description: "Revitalizando a língua e cultura indígena - Preservação e fortalecimento da cultura Wai Wai através de ações educativas e culturais inovadoras.", href: "/projetos/wai", backgroundImage: "/public/wai3.jpg", },
    { title: "Wai Wai Tapota", description: "O Wai Wai Tapota revitaliza a língua e cultura Wai Wai, unindo tradição e tecnologia para fortalecer a identidade indígena na Amazônia.", href: "/projetos/wai-tapota", backgroundImage: "/public/napraca2.jpg", },
    { title: "WaiLingo (App)", description: "Aplicativo bilíngue para inclusão educacional - Tecnologia a serviço da educação intercultural, conectando saberes tradicionais e modernos.", href: "/projetos/wailingo", backgroundImage: "/public/wailingo.png", },
    { title: "Ciência na Praça", description: "O Ciência na Praça leva ciência e educação ambiental às comunidades, promovendo conhecimento, sustentabilidade e valorização da Amazônia.", href: "/projetos/ciencia-na-praca", backgroundImage: "/public/napraca.jpg", },];
  const duplicatedProjects = [...projects, ...projects];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F0FDF4] to-[#ECFDF5]">
      <Header />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.3), rgba(16, 185, 129, 0.3)), url('https://readdy.ai/api/search-image?query=Bright%20sunny%20Amazon%20rainforest%20with%20golden%20sunlight%20streaming%20through%20lush%20green%20canopy%2C%20vibrant%20tropical%20plants%2C%20crystal%20clear%20river%2C%20colorful%20exotic%20birds%2C%20warm%20natural%20lighting%2C%20paradise%20landscape%2C%20professional%20nature%20photography%2C%20high%20resolution%2C%20cheerful%20and%20inviting%20atmosphere%2C%20morning%20light&width=1920&height=1080&orientation=landscape')`,
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight text-white drop-shadow-lg">
              Oriximiná na COP30
            </h1>
            <h2 className="text-2xl md:text-3xl font-[600] mb-8 text-[#ffdb27] drop-shadow-md">
              Sustentabilidade, Cultura e Juventude em Movimento
            </h2>
            <p className="text-lg md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto text-white drop-shadow-md">
              Oriximiná, no coração da Amazônia, apresenta na COP30 projetos que unem ciência, cultura e sustentabilidade.
              A juventude oriximinaense protagoniza essa transformação, construindo um futuro mais verde e inclusivo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" href="/projetos">
                Conheça os Projetos
              </Button>
              <Button variant="outline" size="lg" href="/juventude">
                Juventude em Movimento
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Projects Section (100% da tela com scroll infinito) */}
      <section className="relative h-screen bg-white flex flex-col justify-center">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#004201] mb-4">
              Projetos que Transformam
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Conheça as iniciativas inovadoras que colocam Oriximiná no mapa
              mundial da sustentabilidade e desenvolvimento social
            </p>
          </div>

          <div
            ref={scrollRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="overflow-x-auto scrollbar-hide"
          >
            <div className="flex gap-8 px-4 w-max mb-16">
              {duplicatedProjects.map((project, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[340px] transition-transform duration-300 hover:scale-[1.03]"
                >
                  <ProjectCard title={project.title} description={project.description} href={project.href} backgroundImage={project.backgroundImage} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cover bg-center relative bg-[white] ">
        <div className="container mx-auto px-4 text-center ">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 drop-shadow-lg text-[#004201]"> Vamos Transformar o Mundo? </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-md  text-[#1E1E1E]"> Junte-se à juventude oriximinaense na construção de um futuro sustentável para a Amazônia </p> <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" href="/contato"> Entre em Contato </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>);
}

export default function Footer() {
  return (
    <footer className="bg-[#0E4D2B] text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div>
                <img
                  src="/logo.png"
                  alt="Logo SEMJU Oriximiná"
                  className="w-14 h-14 object-contain mb-4"
                />
                <h3 className="font-bold text-lg">SEMJU Oriximiná</h3>
                <p className="text-sm text-gray-300">Juventude Guardiã da Amazônia</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Fortalecendo políticas públicas que promovam participação social, educação, cultura,
              tecnologia e sustentabilidade, valorizando os jovens como agentes de transformação.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="/projetos" className="text-gray-300 hover:text-[#C6A15B] transition-colors">Projetos</a></li>
              <li><a href="/juventude" className="text-gray-300 hover:text-[#C6A15B] transition-colors">Juventude</a></li>
              <li><a href="/sobre" className="text-gray-300 hover:text-[#C6A15B] transition-colors">Sobre</a></li>
              <li><a href="/contato" className="text-gray-300 hover:text-[#C6A15B] transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Contato e Redes Sociais */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <i className="ri-map-pin-line text-[#C6A15B]"></i>
                <span className="text-gray-300 text-sm">Oriximiná, Pará - Brasil</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-mail-line text-[#C6A15B]"></i>
                <span className="text-gray-300 text-sm">semju@oriximina.pa.gov.br</span>
              </div>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="w-8 h-8 bg-[#1B4965] rounded-full flex items-center justify-center hover:bg-[#C6A15B] transition-colors">
                  <i className="ri-facebook-fill text-white text-sm"></i>
                </a>
                <a href="#" className="w-8 h-8 bg-[#1B4965] rounded-full flex items-center justify-center hover:bg-[#C6A15B] transition-colors">
                  <i className="ri-instagram-line text-white text-sm"></i>
                </a>
                <a href="#" className="w-8 h-8 bg-[#1B4965] rounded-full flex items-center justify-center hover:bg-[#C6A15B] transition-colors">
                  <i className="ri-youtube-line text-white text-sm"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#ffffff4a] mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="bg-[#C6A15B] px-3 py-1 rounded-full">
                <span className="text-[#0E4D2B] font-semibold text-sm">Apresentação Oficial na COP30 — Belém/PA, 2025</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <p className="text-gray-400 text-sm">© 2024 SEMJU Oriximiná. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

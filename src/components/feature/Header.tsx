import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState('/');

  useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);

  const menuItems = [
    { label: 'Início', href: '/' },
    { label: 'Projetos', href: '/projetos' },
    { label: 'Sobre', href: '/sobre' },
    { label: 'Contato', href: '/contato' }
  ];

  return (
    <header className="bg-white backdrop-blur-sm shadow-md sticky top-0 z-50 border-b border-green-100">
      <div className="container mx-auto px-6 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="/logo.png"
              alt="Logo SEMJU Oriximiná"
              className="w-14 h-14 object-contain"
            />
            <div>
              <h1 className="text-[#1e1e1e] font-bold text-lg">SEMJU Oriximiná</h1>
              <p className="text-[#1e1e1e] text-sm">Juventude Guardiã da Amazônia</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => {
              const isActive = activePath === item.href;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setActivePath(item.href)}
                  className={`relative font-medium transition-colors duration-200 group ${
                    isActive ? 'text-[#F59E0B]' : 'text-[#1e1e1e] hover:text-[#F59E0B]'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-[#F59E0B] transition-all duration-300 
                      ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
                  ></span>
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-8 h-8 flex items-center justify-center"
            aria-label="Abrir menu"
          >
            <i
              className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-[#1e1e1e] text-xl`}
            ></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-green-100 bg-white/95">
            {menuItems.map((item) => {
              const isActive = activePath === item.href;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    setActivePath(item.href);
                    setIsMenuOpen(false);
                  }}
                  className={`block py-3 px-2 font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-[#F59E0B] border-b-2 border-[#F59E0B]'
                      : 'text-[#1e1e1e] hover:text-[#F59E0B] hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
}

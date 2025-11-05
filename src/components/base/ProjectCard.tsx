interface ProjectCardProps {
  title: string;
  description: string;
  href: string;
  backgroundImage: string;
}

export default function ProjectCard({ title, description, href, backgroundImage }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:scale-[1.01]">
      <a href={href} className="block">
        <div 
          className="h-48 bg-cover bg-center relative transition-transform duration-300 group-hover:scale-[1.02]"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FEA000] transition-colors">
              {title}
            </h3>
          </div>
        </div>
        <div className="p-6">
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {description}
          </p>
          <div className="flex items-center text-[#2A612A] font-medium text-sm group-hover:text-[#004201] transition-colors">
            <span>Saiba mais</span>
            <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
          </div>
        </div>
      </a>
    </div>
  );
}

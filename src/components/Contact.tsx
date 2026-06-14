import { Github, Linkedin, Twitter, Mail, Gamepad2, Smartphone } from 'lucide-react';
import { socialLinks, personalInfo } from '../data/mockData';

const iconMap: { [key: string]: React.ComponentType<{ size?: number | string; className?: string }> } = {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Gamepad2,
  Smartphone,
};

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-white/10 text-white text-sm font-semibold rounded-full mb-4">
            联系我
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            期待与您合作
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            如果您有任何问题或合作意向，欢迎随时联系我
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-2xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Mail size={18} className="text-white" />
              </div>
              <div>
                <div className="text-white/70 text-sm">邮箱</div>
                <div className="text-white font-medium">{personalInfo.email}</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <div className="text-white/70 text-sm">位置</div>
                <div className="text-white font-medium">{personalInfo.location}</div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  aria-label={link.name}
                >
                  {Icon && <Icon size={22} className="text-white" />}
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/60 text-sm">
            © 2024 {personalInfo.name}. 保留所有权利.
          </p>
        </div>
      </div>
    </section>
  );
}
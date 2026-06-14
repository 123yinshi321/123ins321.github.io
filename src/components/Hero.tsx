import { ArrowRight, MapPin, Mail } from 'lucide-react';
import { personalInfo } from '../data/mockData';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse" />
          <span className="text-white/80 text-sm">欢迎访问我的个人主页</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
          你好，我是
          <span className="block mt-2 bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
            {personalInfo.name}
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-white/80 mb-8 max-w-2xl mx-auto">
          {personalInfo.title}
        </p>

        <p className="text-white/70 mb-10 max-w-xl mx-auto text-lg">
          {personalInfo.bio}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#contact"
            className="group inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-opacity-90 transition-all hover:scale-105 hover:shadow-xl"
          >
            联系我
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center px-8 py-3 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all"
          >
            查看作品
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 text-white/70">
          <div className="flex items-center">
            <MapPin size={18} className="mr-2" />
            <span>{personalInfo.location}</span>
          </div>
          <div className="flex items-center">
            <Mail size={18} className="mr-2" />
            <span>{personalInfo.email}</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
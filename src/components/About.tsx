import { personalInfo } from '../data/mockData';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full mb-4">
            关于我
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            了解更多
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            主攻游戏设计，热爱独立游戏开发
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              {personalInfo.name}
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed text-center">
              {personalInfo.bio}
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed text-center">
              {personalInfo.education}
            </p>
            
            <div className="border-t border-gray-200 pt-6 mt-6">
              <p className="text-gray-600 leading-relaxed">
                我热衷于探索游戏设计的各种可能性，从核心玩法机制到关卡设计，再到玩家体验优化。在开发过程中，我习惯使用Godot引擎，它让我能够快速实现创意想法并进行迭代测试。
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                除了独立开发，我也积极参与GameJam等活动，在有限的时间内与团队成员协作，锻炼快速开发能力和创意思维。每一次项目都是学习和成长的机会。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
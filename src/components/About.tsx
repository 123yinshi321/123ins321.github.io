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
            我是一名充满激情的全栈开发工程师，致力于创造有价值的产品
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl opacity-20" />
            <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <img
                src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20software%20developer%20portrait%20modern%20style&image_size=portrait_4_3"
                alt="个人照片"
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {personalInfo.name}
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {personalInfo.bio}
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              在过去的几年里，我参与了多个大型项目的开发，从初创公司到企业级应用。我热爱解决复杂问题，并且始终保持学习新技术的热情。
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-blue-600">5+</div>
                <div className="text-sm text-gray-500">年工作经验</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-purple-600">20+</div>
                <div className="text-sm text-gray-500">完成项目</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-green-600">100%</div>
                <div className="text-sm text-gray-500">客户满意度</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-orange-600">50+</div>
                <div className="text-sm text-gray-500">技术栈</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
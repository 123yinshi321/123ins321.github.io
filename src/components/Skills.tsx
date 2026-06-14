import { skills } from '../data/mockData';

export default function Skills() {
  const categories = [...new Set(skills.map(skill => skill.category))];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-purple-100 text-purple-600 text-sm font-semibold rounded-full mb-4">
            专业技能
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            我的技能
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            多年积累的技术能力，涵盖前端、后端、DevOps等多个领域
          </p>
        </div>

        <div className="space-y-8">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="text-xl font-semibold text-gray-700 mb-4 flex items-center">
                <span className="w-1 h-6 bg-blue-500 rounded-full mr-3" />
                {category}
              </h3>
              <div className="grid gap-4">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <div key={skill.name} className="bg-white rounded-xl p-4 shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {categories.map((category) => {
            const categorySkills = skills.filter((s) => s.category === category);
            const avgLevel = Math.round(
              categorySkills.reduce((acc, s) => acc + s.level, 0) / categorySkills.length
            );
            return (
              <div
                key={category}
                className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">{avgLevel}%</div>
                <div className="text-gray-600">{category}</div>
                <div className="text-sm text-gray-400 mt-1">
                  {categorySkills.length} 项技能
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
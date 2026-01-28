import { Code, Palette, Database, Layout, FileSpreadsheet, Presentation } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    { name: 'HTML', level: 90, icon: Code, color: 'from-orange-500 to-red-500' },
    { name: 'Java', level: 85, icon: Code, color: 'from-red-500 to-orange-600' },
    { name: 'Python', level: 80, icon: Code, color: 'from-blue-500 to-green-500' },
    { name: 'Microsoft Excel', level: 75, icon: FileSpreadsheet, color: 'from-green-500 to-green-600' },
    { name: 'PowerPoint', level: 85, icon: Presentation, color: 'from-orange-500 to-red-600' },
    { name: 'Logo Design', level: 70, icon: Palette, color: 'from-purple-500 to-pink-500' },
  ];

  const interests = [
    {
      title: 'Web Development',
      description: 'Building responsive and dynamic web applications',
      icon: Code,
      color: 'bg-blue-500',
    },
    {
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user interfaces',
      icon: Layout,
      color: 'bg-purple-500',
    },
    {
      title: 'Database Management',
      description: 'Working with data structures and databases',
      icon: Database,
      color: 'bg-green-500',
    },
  ];

  const extraCurricular = [
    'Template Creation',
    'Poster Designing',
    'Photoshop Video Editing',
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Technical Skills
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${skill.color}`}>
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 dark:text-white">{skill.name}</h4>
                  </div>
                  <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Areas of Interest
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-center"
              >
                <div className={`${interest.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <interest.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {interest.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">{interest.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Extra-Curricular Activities
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {extraCurricular.map((activity, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-medium"
              >
                {activity}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

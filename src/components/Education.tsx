import { GraduationCap, Award, Calendar, MapPin, TrendingUp } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Information Technology',
      institution: 'Paavai Engineering College',
      period: 'Pursuing',
      score: '8.06 CGPA',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      degree: 'Higher Secondary Certificate',
      institution: 'Sri Krishna Matric Higher Secondary School',
      period: 'Completed 2022',
      score: '82.6%',
      color: 'from-purple-500 to-pink-500',
    },
    {
      degree: 'Secondary School Leaving Certificate',
      institution: 'Sri Krishna Matric Higher Secondary School',
      period: 'Completed 2020',
      score: '94.5%',
      color: 'from-green-500 to-teal-500',
    },
  ];

  const certifications = [
    {
      title: 'UMPSA University - Malaysia',
      subtitle: 'Global Immersion Programme',
      period: 'November 14, 2024 - November 27, 2024',
      icon: MapPin,
    },
    {
      title: 'NPTEL Online Certification',
      subtitle: 'Cloud Computing',
      period: 'July 22, 2024 - October 11, 2024',
      score: 'Completed with 55%',
      icon: Award,
    },
    {
      title: 'AICTE Eduskills Foundation',
      subtitle: 'Google Android Developer',
      period: 'January 1, 2024 - March 1, 2024',
      icon: Award,
    },
    {
      title: 'AI-ML Virtual Internship',
      subtitle: 'AICTE Eduskills Foundation',
      period: 'April 1, 2024 - June 1, 2024',
      icon: TrendingUp,
    },
    {
      title: 'Edu Tantr',
      subtitle: 'Full Stack Development',
      period: 'March 15, 2025 - May 15, 2025',
      icon: Award,
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Education & Certifications
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-blue-600" />
            Educational Qualification
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${edu.color}`}></div>
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {edu.degree}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                        {edu.institution}
                      </p>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-bold text-lg shadow-lg">
                        {edu.score}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
            <Award className="w-8 h-8 text-purple-600" />
            Certifications & Internships
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex-shrink-0">
                    <cert.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      {cert.title}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                      {cert.subtitle}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{cert.period}</span>
                    </div>
                    {cert.score && (
                      <span className="inline-block bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-3 py-1 rounded-full text-xs font-semibold">
                        {cert.score}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

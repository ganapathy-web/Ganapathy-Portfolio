import { ExternalLink, Github, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Currency Conversion System',
      description:
        'A Java-based application that converts amounts between different currencies based on user input. Users provide the amount and desired currencies for conversion, and the program calculates results using current exchange rates with BigDecimal precision.',
      technologies: ['Java', 'BigDecimal', 'Currency API'],
      category: 'Java Development',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Portfolio Website',
      description:
        'A fully responsive personal portfolio website showcasing projects, skills, and achievements. Features dark mode, smooth animations, and modern UI design with mobile-first approach.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      category: 'Web Development',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'UI/UX Design Projects',
      description:
        'Collection of user interface designs and prototypes created for various applications. Focuses on user experience, accessibility, and modern design principles.',
      technologies: ['Figma', 'Adobe XD', 'Photoshop'],
      category: 'UI/UX Design',
      gradient: 'from-green-500 to-teal-500',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Here are some of my recent works and projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <Code className="w-16 h-16 text-white opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 dark:bg-gray-900/90 px-3 py-1 rounded-full text-xs font-semibold text-gray-900 dark:text-white">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300">
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm font-medium">View</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg transition-colors duration-300">
                    <Github className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/Ganapathy-web"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            <Github className="w-5 h-5" />
            <span>View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

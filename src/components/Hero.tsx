import { ArrowDown, Github, Linkedin, Code2 } from 'lucide-react';

const Hero = () => {
  const handleScrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="animate-fade-in">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4 animate-slide-up">
                R. Ganapathy
              </h1>
            </div>
            <div className="animate-slide-up">
              <div className="w-40 h-40 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1 overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                <img
                  src="/photo.png"
                  alt="R. Ganapathy"
                  className="w-full h-full rounded-xl object-cover"
                />
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 mb-6 font-semibold animate-slide-up animation-delay-200">
              Web Developer & UI/UX Enthusiast
            </p>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto animate-slide-up animation-delay-400">
              Passionate about creating beautiful, user-friendly web applications with modern
              technologies. Committed to delivering high-quality, scalable solutions.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-slide-up animation-delay-600">
            <button
              onClick={handleScrollToContact}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </button>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-semibold rounded-lg shadow-lg hover:shadow-xl border-2 border-blue-600 dark:border-blue-400 transform hover:scale-105 transition-all duration-300"
            >
              View Projects
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 animate-slide-up animation-delay-800">
            <a
              href="https://github.com/Ganapathy-web"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 text-gray-900 dark:text-white" />
            </a>
            <a
              href="https://linkedin.com/in/Ganapathy.R"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-blue-600" />
            </a>
            <a
              href="https://leetcode.com/Ganapathy.R"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
              aria-label="LeetCode"
            >
              <Code2 className="w-6 h-6 text-orange-500" />
            </a>
          </div>

            <div className="mt-16 animate-bounce">
              <ArrowDown className="w-8 h-8 mx-auto text-gray-400 dark:text-gray-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

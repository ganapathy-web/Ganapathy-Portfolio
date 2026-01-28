import { User, MapPin, Mail, Phone, Eye, MessageSquare, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-1 rounded-2xl">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl">
                <User className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  R. Ganapathy
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Information Technology Student
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span>Villupuram, Tamil Nadu, India - 605201</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <span>ganapathy26062005@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span>+91 8072223890</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
              <Target className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Career Objective
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Passionate and detail-oriented Web Developer with expertise in front-end and
                back-end technologies, seeking to leverage my skills in designing, developing, and
                optimizing dynamic web applications. Committed to delivering high-quality,
                user-friendly, and scalable solutions while continuously learning and adapting to
                emerging technologies.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300">
                <Eye className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Observation</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Soft Skill</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300">
                <Target className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Decision Making</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Soft Skill</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300">
                <MessageSquare className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Communication</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Soft Skill</p>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Languages
              </h3>
              <div className="flex gap-4">
                <div className="flex-1">
                  <p className="text-gray-700 dark:text-gray-300 font-medium mb-1">Tamil</p>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Native</p>
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 dark:text-gray-300 font-medium mb-1">English</p>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Intermediate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

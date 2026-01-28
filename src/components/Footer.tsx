import { Heart, Github, Linkedin, Code2, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/Ganapathy-web',
      color: 'hover:text-gray-900 dark:hover:text-white',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/Ganapathy.R',
      color: 'hover:text-blue-600',
    },
    {
      name: 'LeetCode',
      icon: Code2,
      url: 'https://leetcode.com/Ganapathy.R',
      color: 'hover:text-orange-500',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:ganapathy26062005@gmail.com',
      color: 'hover:text-green-600',
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              R. Ganapathy
            </h3>
            <p className="text-gray-400 mb-4">
              Web Developer passionate about creating beautiful and functional web applications.
              Let's build something amazing together!
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-gray-800 rounded-full ${link.color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <strong className="text-white">Email:</strong>
                <br />
                <a
                  href="mailto:ganapathy26062005@gmail.com"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  ganapathy26062005@gmail.com
                </a>
              </li>
              <li>
                <strong className="text-white">Phone:</strong>
                <br />
                <a
                  href="tel:+918072223890"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  +91 8072223890
                </a>
              </li>
              <li>
                <strong className="text-white">Location:</strong>
                <br />
                Villupuram, Tamil Nadu, India
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {currentYear} R. Ganapathy. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> using React &
              Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

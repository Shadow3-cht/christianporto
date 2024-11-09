import React from 'react';
import { Code2, Briefcase, Mail, Github, Linkedin, ExternalLink, ChevronDown } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <header className="min-h-screen flex flex-col justify-center items-center relative px-4">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto max-w-4xl z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
            Christian
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-8">
            Développeur Web Full Stack
          </p>
          <p className="text-xl text-gray-400 max-w-2xl mb-12">
            Passionné par la création d'applications web performantes et élégantes avec plus de 8 ans d'expérience
          </p>
          <div className="flex gap-6">
            <a href="#contact" className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg flex items-center gap-2 transition-all">
              <Mail size={20} />
              Me contacter
            </a>
            <a href="#portfolio" className="border border-gray-600 hover:border-blue-400 px-6 py-3 rounded-lg flex items-center gap-2 transition-all">
              <Briefcase size={20} />
              Voir mes projets
            </a>
          </div>
        </div>
        <ChevronDown className="absolute bottom-8 animate-bounce" size={32} />
      </header>

      {/* Expertise Section */}
      <section className="py-24 px-4 bg-gray-900/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <Code2 className="text-blue-400" />
            Expertise Technique
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Front-end',
                skills: ['React', 'TypeScript', 'Vue.js', 'Tailwind CSS', 'Next.js']
              },
              {
                title: 'Back-end',
                skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'AWS']
              },
              {
                title: 'Outils',
                skills: ['Git', 'Docker', 'CI/CD', 'Jest', 'Webpack']
              }
            ].map((category) => (
              <div key={category.title} className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800 transition-all">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-gray-300">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <Briefcase className="text-blue-400" />
            Projets Récents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'E-commerce Platform',
                description: 'Plateforme e-commerce complète avec paiement Stripe et gestion des stocks',
                image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028'
              },
              {
                title: 'Dashboard Analytics',
                description: 'Tableau de bord analytique en temps réel avec visualisation de données',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71'
              }
            ].map((project) => (
              <div key={project.title} className="group relative overflow-hidden rounded-xl">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-all flex flex-col justify-end p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <a href="#" className="flex items-center gap-2 text-blue-400 hover:text-blue-300">
                    Voir le projet <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-gray-900/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <Mail className="text-blue-400" />
            Contact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-300 mb-6">
                Intéressé par une collaboration ? N'hésitez pas à me contacter pour discuter de vos projets.
              </p>
              <div className="flex gap-4">
                <a href="https://github.com" className="text-gray-400 hover:text-white transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Votre email"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-400 focus:outline-none"
              />
              <textarea
                rows={4}
                placeholder="Votre message"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-400 focus:outline-none"
              ></textarea>
              <button className="w-full bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg transition-colors">
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 border-t border-gray-800">
        <p>© {new Date().getFullYear()} Christian. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default App;
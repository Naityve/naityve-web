export default function Tradail() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-naitblue-dark via-naitblue to-naitblue-light">
        <div className="max-w-5xl mx-auto px-6 py-6 flex justify-between items-center">
          <a href="/" className="group">
            <h1 className="text-white text-2xl font-bold tracking-tight">Naityve</h1>
            <p className="text-white/70 text-sm">Kacper Florek</p>
          </a>
          <nav>
            <ul className="flex gap-6 text-white/90 text-sm font-medium">
              <li><a href="/#projects" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="/#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Project Hero */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <a href="/#projects" className="text-naitblue text-sm font-medium hover:underline">
          ← Back to projects
        </a>
        <h2 className="text-4xl font-bold text-gray-900 mt-6 mb-4">
          Trádáil
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl">
          Small Business All-in-One App — streamlining POS, ticketing, financial reporting, and more.
        </p>
      </section>

      {/* Project Image */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="w-full h-80 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
          Project screenshot coming soon
        </div>
      </section>

      {/* Project Details */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-gray-100">
        <h3 className="text-sm font-semibold text-naitblue uppercase tracking-wide mb-6">
          About the Project
        </h3>
        <p className="text-gray-600">
          Add your detailed project description here. Explain the problem it solves, 
          how it works, and what technologies you used.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-naitblue-dark via-naitblue to-naitblue-light mt-16">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <h3 className="text-sm font-semibold text-white/70 uppercase tracking-wide mb-4">
            Contact
          </h3>
          <a 
            href="mailto:natyve@gmail.com" 
            className="text-xl text-white hover:text-white/80 transition-colors"
          >
            natyve@gmail.com
          </a>
          <div className="mt-8 pt-8 border-t border-white/20 text-white/50 text-sm">
            © {new Date().getFullYear()} Kacper Florek
          </div>
        </div>
      </footer>
    </div>
  );
}
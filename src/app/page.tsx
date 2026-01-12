export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-naitblue-dark via-naitblue to-naitblue-light">
        <div className="max-w-5xl mx-auto px-6 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-white text-2xl font-bold tracking-tight">Naityve</h1>
            <p className="text-white/70 text-sm">Kacper Florek</p>
          </div>
          <nav>
            <ul className="flex gap-6 text-white/90 text-sm font-medium">
              <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-10">
          <div className="md:max-w-xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Programmer & Technician
            </h2>
            <p className="text-lg text-gray-600">
              I work as a technician and store manager at a small tech repair business. 
              On the side, I build software that solves real bottlenecks for small businesses, 
              and develop video games from the ground up — focusing on fun gameplay and 
              deep virtual world interaction.
            </p>
          </div>
          <img 
            src="/profile.jpg" 
            alt="Kacper Florek" 
            className="w-48 h-48 shrink-0 rounded-full object-cover object-[center_-10px] shadow-lg"
          />
        </div>
      </section>

      {/* Business Projects */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-16 border-t border-gray-100">
        <h3 className="text-sm font-semibold text-naitblue uppercase tracking-wide mb-8">
          Business Projects
        </h3>
        <div className="space-y-6">
          <a href="/projects/tradail" className="group block">
            <article className="flex flex-col md:flex-row gap-6 p-6 rounded-lg border border-gray-100 hover:border-naitblue/30 hover:shadow-md transition-all">
              <div className="w-full md:w-64 h-40 bg-gray-100 rounded-md flex items-center justify-center text-gray-400 text-sm shrink-0">
                Image coming soon
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-gray-900 group-hover:text-naitblue transition-colors">
                  Trádáil
                </h4>
                <p className="text-gray-600 mt-2">
                  Small Business All-in-One App — streamlining POS, ticketing, financial reporting, and more.
                </p>
                <span className="inline-block mt-4 text-sm text-naitblue font-medium">
                  View project →
                </span>
              </div>
            </article>
          </a>
        </div>
      </section>

      {/* Software Projects */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-gray-100">
        <h3 className="text-sm font-semibold text-naitblue uppercase tracking-wide mb-8">
          Software Projects
        </h3>
        <div className="space-y-6">
          <article className="group">
            <h4 className="text-xl font-semibold text-gray-900 group-hover:text-naitblue transition-colors">
              Karst
            </h4>
            <p className="text-gray-600 mt-1">
              A 2D RPG built from scratch using Odin — hand-crafted systems and gameplay.
            </p>
          </article>
        </div>
      </section>

      {/* Side Projects */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-gray-100">
        <h3 className="text-sm font-semibold text-naitblue uppercase tracking-wide mb-8">
          Side Projects
        </h3>
        <div className="space-y-6">
          <article className="group">
            <h4 className="text-xl font-semibold text-gray-900 group-hover:text-naitblue transition-colors">
              Nom-Review
            </h4>
            <p className="text-gray-600 mt-1">
              Amateur food reviews — documenting meals and local spots worth trying.
            </p>
          </article>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gradient-to-r from-naitblue-dark via-naitblue to-naitblue-light mt-16">
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
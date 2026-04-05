function Footer() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-white border-t border-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-6">

        {/* Lado esquerdo — logo, redes sociais e copyright */}
        <div className="flex flex-col items-center md:items-start gap-3">

          {/* Logo */}
          <span className="text-xl font-bold text-primary">So Viajem ✈️</span>

          {/* Redes sociais */}
          <div className="flex items-center gap-3">
            <a href="#" className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center hover:bg-primary-hover transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="#" className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center hover:bg-primary-hover transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4l16 16M4 20L20 4"/>
              </svg>
            </a>
            <a href="#" className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center hover:bg-primary-hover transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58a2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-text-body text-sm">© {new Date().getFullYear()} So Viajem. Todos os direitos reservados.</p>

        </div>

        {/* Lado direito — links e botão voltar ao topo */}
        <div className="flex flex-col items-center md:items-end gap-4">

          {/* Links de navegação */}
          <nav className="flex items-center gap-6">
            <a href="#home" className="text-text-body hover:text-primary text-sm transition-colors duration-200">Início</a>
            <a href="#benefits" className="text-text-body hover:text-primary text-sm transition-colors duration-200">Benefícios</a>
            <a href="#testimonials" className="text-text-body hover:text-primary text-sm transition-colors duration-200">Depoimentos</a>
          </nav>

          {/* Botão voltar ao topo */}
          <button
            onClick={scrollToTop}
            className="bg-primary text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors duration-200"
          >
            Voltar ao topo ↑
          </button>

        </div>

      </div>
    </footer>
  )
}

export default Footer;
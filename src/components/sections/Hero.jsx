import useScrollAnimation from '../../hooks/useScrollAnimation'

function Hero() {
    const { ref, isVisible } = useScrollAnimation()
    return (
        <section id="home" className="bg-white min-h-screen flex items-center pt-24 md:pt-16 pb-12">

            <div className="max-w-6xl mx-auto px-6">
                <div 
                    ref={ref}
                    className={`flex flex-col-reverse md:flex-row items-center gap-12 animate-on-scroll ${isVisible ? 'visible' : ''}`}
                >
                    
                    {/* Lado esquerdo — texto */}
                    <div className="flex-1 text-center md:text-left">

                        {/* Título principal */}
                        <h1 className="text-4xl md:text-5xl font-bold text-text-title leading-tight mb-6">
                            Viaja pelo mundo com quem entende de viagens
                        </h1>

                        {/* Subtítulo */}
                        <p className="text-lg text-text-body mb-8">
                            Descobre destinos incríveis, cria memórias inesquecíveis e deixa-nos tratar de tudo por ti.
                        </p>

                        {/* Botão CTA */}
                        <a href="#cta" className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-primary-hover transition-colors duration-200">
                            Começar a viajar →
                        </a>
                        
                    </div>

                    {/* Lado direito — imagem */}
                    <div className="flex-1 flex items-center justify-center">
                        <img
                            src="/src/assets/imageHero.png"
                            alt="Plataforma de reserva de viagens"
                            className="w-full max-w-lg"
                        />
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default Hero;
import { useState } from 'react'
import useScrollAnimation from '../../hooks/useScrollAnimation'

function CallToAction() {

    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const { ref, isVisible } = useScrollAnimation()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (email) {
            setSubmitted(true)
        }
    }

    return (
        <section id="cta" className="bg-bg-page py-20">

            <div className="max-w-6xl mx-auto px-6">

                <div ref={ref}
                className={`rounded-3xl px-8 py-16 text-center animate-on-scroll ${isVisible ? 'visible' : ''}`}
                style={{ backgroundColor: 'rgba(59, 91, 219, 0.08)' }}
                >

                    {/* Título */}
                    <h2 className="text-3xl md:text-4xl font-bold text-text-title mb-4">
                        Pronto para a tua próxima aventura?
                    </h2>

                    {/* Subtítulo */}
                    <p className="text-lg text-text-body max-w-2xl mx-auto mb-10">
                        Subscreve a nossa newsletter e recebe as melhores ofertas de viagem.
                    </p>

                    {/* Formulário */}
                    {submitted ? (
                        <div className="text-center">
                            <p className="text-primary font-bold text-xl">
                                🎉 Obrigado! Vais receber as melhores ofertas em breve.
                            </p>
                        </div>
                    ) : (

                    <form onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto bg-white p-2 rounded-xl shadow-sm"
                    >
                        <input type="email" placeholder="O teu email" value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex-1 px-4 py-3 rounded-lg outline-none text-text-title placeholder:text-gray-400"
                            required
                        />

                        <button type="submit"
                            className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-hover transition-colors duration-200 whitespace-nowrap"
                        >
                            Reservar agora →
                        </button>

                    </form>
                    )}
                </div>
            </div>
        </section>
    )
}

export default CallToAction
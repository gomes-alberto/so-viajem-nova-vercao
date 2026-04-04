import { useState } from 'react'
import testimonials from '../../data/testimonials'
import useScrollAnimation from '../../hooks/useScrollAnimation'

function Testimonials() {

    const [current, setCurrent] = useState(0)
    const total = testimonials.length

    const getVisible = () => {
        return [0, 1, 2].map((offset) => testimonials[(current + offset) % total])
    }

    const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation()

    return (
        <section id="testimonials" ref={sectionRef}
        className={`bg-white py-20 animate-on-scroll ${sectionVisible ? 'visible' : ''}`}
        >
            <div className="max-w-6xl mx-auto px-6">

                {/* Título da secção */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-text-title mb-4">
                        O que dizem os nossos viajantes
                    </h2>
                    <p className="text-lg text-text-body max-w-2xl mx-auto">
                        Histórias reais de quem já viajou connosco.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                    {getVisible().map((testimonial) => (
                        <div key={testimonial.id} className="bg-bg-card rounded-2xl p-6">

                            {/* Estrelas */}
                            <div className="flex gap-1 mb-4">
                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                    <span key={i} className="text-star text-xl">★</span>
                                ))}
                            </div>

                            {/* Comentário */}
                            <p className="text-text-body text-sm mb-6">
                                "{testimonial.comment}"
                            </p>

                            {/* Autor */}
                            <div className="flex items-center gap-3">
                                <img src={testimonial.avatar} alt={testimonial.name}
                                className="w-10 h-10 rounded-full object-cover"
                                />

                                <div>
                                    <p className="font-bold text-text-title text-sm">{testimonial.name}</p>
                                    <p className="text-text-body text-xs">{testimonial.location}</p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                {/* Dots de navegação */}
                <div className="flex justify-center items-center gap-3">
                    {testimonials.map((_, i) => (
                        <button key={i} onClick={() => setCurrent(i)}
                        className={`rounded-full transition-all duration-500 ease-in-out ${
                            current === i
                            ? 'bg-primary w-3 h-3'
                            : 'bg-gray-300 w-2 h-2'
                        }`}
                        />
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Testimonials;



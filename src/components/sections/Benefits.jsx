import benefits from "../../data/benefits";
import useScrollAnimation from "../../hooks/useScrollAnimation";

function Benefits() {
    const { ref, isVisible } = useScrollAnimation()
    
    return (
        <section 
            id="benefits" 
            ref={ref}
            className={`bg-bg-page py-20 animate-on-scroll ${isVisible ? 'visible' : ''}`} 
        >

            <div className="max-w-6xl mx-auto px-6">

                {/* Título da secção */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-text-title mb-4">
                        Porquê viajar connosco?
                    </h2>
                    <p className="text-lg text-text-body max-w-2xl mx-auto">
                        Tudo o que precisas para uma viagem perfeita, num só lugar.
                    </p>
                </div>

                {/* Grid de cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                            
                            <div
                                key={benefit.id}
                                className={`bg-white rounded-2xl p-6 shadow-sm animate-on-scroll ${isVisible ? 'visible' : ''} delay-${(index + 1) * 100} card-hover`}
                            >

                                {/* Ícone */}
                                <div className="bg-bg-page w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                                    <Icon size={24} className="text-primary" />
                                </div>

                                {/* Título */}
                                <h3 className="text-lg font-bold text-text-title mb-2">
                                    {benefit.title}
                                </h3>

                                {/* Descrição */}
                                <p className="text-text-body text-sm">
                                    {benefit.description}
                                </p>

                            </div>

                        )
                    })}
                </div>

            </div>
        </section>
    )
}

export default Benefits;
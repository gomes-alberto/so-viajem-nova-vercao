import { useState, useEffect } from 'react';
import { Menu, X} from 'lucide-react';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    //  Adicionar o useEffect para Fechar o menu ao redimensionar a janela
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        }

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <header className="bg-white shadow-md">
            <div className="max-w-6xl mx-auto px-6 w-full flex items-center justify-between h-16">

                {/* Logo */}
                <a href="#home" className="text-xl font-bold text-primary">
                    So Viajem ✈️
                </a>

                {/* Links de Navegação */}
                <nav className="hidden md:flex items-center gap-8">
                    <a href="#home" className="text-text-body hover:text-primary">
                        Início
                    </a>
                    <a href="#benefits" className="text-text-body hover:text-primary">
                        Benefícios
                    </a>
                    <a href="#testimonials" className="text-text-body hover:text-primary">
                        Depoimentos
                    </a>
                </nav>

                {/* Botão CTA */}
                <div className='hidden md:block'>
                    <a href="#cta" className="bg-primary text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors duration-200"> 
                        Reservar agora →
                    </a>
                </div>
                
                {/* Botão hamburguer / X - só aparece no mobile */}
                <button 
                    className='md:hidden flex flex-col justify-center items-center w-8 h-8' 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label='Abrir menu'
                >
                    {isMenuOpen ? (
                        // Ícone X de Fechar o menu mobile
                        <X size={24} className='text-text-title' />
                    ) : (
                        // Ícone de Menu Hamburguer
                        <Menu size={24} className='text-text-title' />
                    )}
                </button>

            </div>

            {/* Menu mobile */}
            {/* Menu mobile com uma transição suave */}
            <div className={`md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
            }`}>
                <div className="px-6 py-4 flex flex-col gap-4">
                    <a href="#home" className="text-text-body hover:text-primary font-medium"
                        onClick={() => setIsMenuOpen(false)}>
                        Início
                    </a>
                    <a href="#benefits" className="text-text-body hover:text-primary font-medium"
                        onClick={() => setIsMenuOpen(false)}>
                        Benefícios
                    </a>
                    <a href="#testimonials" className="text-text-body hover:text-primary font-medium"
                        onClick={() => setIsMenuOpen(false)}>
                        Depoimentos
                    </a>
                    <a href="#cta" className="bg-primary text-white px-5 py-2 rounded-lg text-sm font-medium text-center hover:bg-primary-hover"
                        onClick={() => setIsMenuOpen(false)}>
                        Reservar agora →
                    </a>
                </div>
            </div>
            
        </header>
    )
}

export default Header;
import { useEffect, useRef, useState } from 'react';

function useScrollAnimation() {

    const ref = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
            setIsVisible(entry.isIntersecting)
        },

        {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        }
    )

    if (ref.current) {
        observer.observe(ref.current)
    }

    return () => {
        const element = ref.current
        if (element) {
            observer.unobserve(element)
        }
    }

    }, [])

    return { ref, isVisible }
}

export default useScrollAnimation
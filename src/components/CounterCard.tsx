import { useState, useRef, useEffect } from "react"

const CounterCard = ({
    value,
    label,
    suffix = "",
   
}: {
    value: number
    label: string
    suffix?: string
    displayValue?: string
}) => {
    const [count, setCount] = useState(0)
    const countRef = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry?.isIntersecting) {
                    setIsVisible(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.1 }
        )

        if (countRef.current) {
            observer.observe(countRef.current)
        }

        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        if (!isVisible) return

        const duration = 2000 // 2 seconds
        const startTimestamp = performance.now()
        const startValue = 0
        const endValue = value

        const step = (timestamp: number) => {
            const progress = Math.min((timestamp - startTimestamp) / duration, 1)
            const current = Math.floor(progress * (endValue - startValue) + startValue)
            setCount(current)

            if (progress < 1) {
                requestAnimationFrame(step)
            } else {
                setCount(endValue) // ensure exact final value
            }
        }

        requestAnimationFrame(step)
    }, [isVisible, value])

    const formatCount = (num: number) => {
        if (num >= 1000) {
            const formatted = (num / 1000).toFixed(1).replace(/\.0$/, "")
            return `${formatted}k${suffix}`
        }
        return `${num}${suffix}`
    }

    return (
        <div className="relative p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="absolute inset-0 bg-[url('https://0c54tlbmo0.ufs.sh/f/CioRkZXkmdR6XpFhc5fn2AOMBi9rL10nkJSEgxFZb4QsIfYU')] backdrop-opacity-90 rounded-lg"></div>
            <h3 ref={countRef} className="text-2xl md:text-5xl font-bold text-teal-700 mb-2">
                { formatCount(count)}
            </h3>
            <p className="text-gray-600 ">{label}</p>
        </div>
    )
}

export default CounterCard

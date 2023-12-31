
import { useState, useEffect } from "react"

type Position = {
    x: number
    y: number
}

export const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState<Position>({
        x: 0,
        y: 0
    })


    useEffect(() => {

        const updateMousePosition = (event: MouseEvent) => {
            const { clientX, clientY } = event
            setMousePosition({
                x: clientX, y: clientY
            })
        }

        window.addEventListener("mousemove", updateMousePosition)
        // window.addEventListener("scrollend", updateMousePosition)

        return () => {
            window.removeEventListener("mousemove", updateMousePosition)
        }

    }, [])

    return mousePosition
}
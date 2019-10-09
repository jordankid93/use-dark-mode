import { useState, useEffect } from "react"

const useDarkMode = (): boolean => {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)")
        setDarkMode(mediaQueryList.matches)

        const handlePreferedColorSchemeChange = (e: MediaQueryListEvent) => setDarkMode(e.matches)

        mediaQueryList.addListener(handlePreferedColorSchemeChange)
        return () => mediaQueryList.removeListener(handlePreferedColorSchemeChange)
    }, [])

    return darkMode
}

export default useDarkMode

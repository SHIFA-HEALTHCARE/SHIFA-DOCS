import { useEffect, useState } from 'react';

function OfflineDiagram() {

    const [isDarkTheme, setIsDarkTheme] = useState(false);

    useEffect(() => {
        const darkThemeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const handleDarkThemeChange = (event) => {
            setIsDarkTheme(event.matches);
        };

        // Add event listener to detect changes in the browser theme
        darkThemeMediaQuery.addListener(handleDarkThemeChange);

        // Initial check for the browser theme
        setIsDarkTheme(darkThemeMediaQuery.matches);

        // Clean up the event listener when the component unmounts
        return () => darkThemeMediaQuery.removeListener(handleDarkThemeChange);
    }, []);

    return (
        <div>
            {isDarkTheme ? (
                <img src='/off-app-dark.svg' alt="Dark Theme Image" />
            ) : (
                <img src='/off-app-light.svg' alt="Light Theme Image" />
            )}
        </div>
    );
};

export default function MyApp() {
    return <OfflineDiagram />
}

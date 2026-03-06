import React, { createContext, useContext, useState, useEffect } from 'react';
import { _domain } from '../utils/urlConfigs';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

const brandConfigs = {
    lee: {
        primary: '#00447c',
        secondary: '#00b5e2',
        font: "'Roboto', sans-serif",
        fontUrl: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'
    },
    wrangler: {
        primary: '#1e3a8a',
        secondary: '#fbbf24',
        font: "'Open Sans', sans-serif",
        fontUrl: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap'
    },
    dockers: {
        primary: '#4b4b4b',
        secondary: '#c5a368',
        font: "'Lato', sans-serif",
        fontUrl: 'https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap'
    },
    gstar: {
        primary: '#000000',
        secondary: '#8e8e8e',
        font: "'Montserrat', sans-serif",
        fontUrl: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap'
    },
    default: {
        primary: '#4f46e5',
        secondary: '#10b981',
        font: 'sans-serif',
        fontUrl: null
    }
};

export const ThemeProvider = ({ children, brandOverride }) => {
    const [activeBrand, setActiveBrand] = useState('default');

    useEffect(() => {
        const detectedBrand = brandOverride || _domain();
        if (brandConfigs[detectedBrand]) {
            setActiveBrand(detectedBrand);
        }
    }, [brandOverride]);

    const theme = brandConfigs[activeBrand];

    return (
        <ThemeContext.Provider value={{ theme, activeBrand }}>
            {theme.fontUrl && (
                <style dangerouslySetInnerHTML={{ __html: `@import url('${theme.fontUrl}');` }} />
            )}
            <div style={{
                '--color-primary': theme.primary,
                '--color-secondary': theme.secondary,
                '--font-family': theme.font,
                '--color-background': '#ffffff',
                '--color-text': '#111827',
                fontFamily: theme.font,
                color: '#111827',
                backgroundColor: '#ffffff',
                minHeight: '100vh',
            }}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};

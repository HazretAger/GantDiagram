import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult {
    toggleTheme: (newTheme: Theme) => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = (newTheme: Theme) => {
        setTheme?.(newTheme);

        // Что бы не перетереть доп классы на body меняем только сам класс темы, а остальные оставляем как есть
        let bodyClassesArray: any = document.body.className.split(' ');

        if (bodyClassesArray.includes('light')) {
            bodyClassesArray.splice(bodyClassesArray.indexOf('light'), 1);
        }

        if (bodyClassesArray.includes('dark')) {
            bodyClassesArray.splice(bodyClassesArray.indexOf('dark'), 1);
        }

        bodyClassesArray = bodyClassesArray.join(' ');
        document.body.className = `${bodyClassesArray} ${newTheme || Theme.LIGHT}`;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme: theme || Theme.LIGHT,
        toggleTheme,
    };
}

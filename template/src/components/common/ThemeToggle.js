import React from 'react';
import {ThemeContext} from "../../contexts";

/*
 * === NOTE =================================
 * Remember to add ThemeProvider to App.js and set darkMode: 'class' in tailwind.config.js
 * https://stackoverflow.com/questions/62269465/react-createcontext-default-value-problem-with-usestate-hook
 * ==========================================
 * */

export const ThemeToggle = () => {
    const { theme, setTheme } = React.useContext(ThemeContext);

    return (
        <div
            className="inline-block text-center transition duration-500 ease-in-out rounded-full py-1 px-4 mt-6 bg-gray-100 dark:bg-gray-700 cursor-pointer"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? (
                <i className="text-gray-500 dark:text-gray-400 text-xl la la-moon" />
            ) : (
                <i className="text-gray-500 dark:text-gray-400 text-xl la la-sun" />
            )}
        </div>
    );
};
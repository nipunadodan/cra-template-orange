import React, {useState, useEffect, createContext} from 'react';

const getInitialSettings = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const storedSettings = window.localStorage.getItem('orange-settings');

        if (typeof storedSettings !== 'undefined' && storedSettings !== null) {
            let settings;
            try {
                settings = JSON.parse(storedSettings);
            } catch(e) {
                console.error('Settings loading error.'); // error in the above string (in this case, yes)!
            }
            return settings;
        }else{
            return {
                settings: {
                    setting_1: 90,
                    setting_2: 10,
                    setting_3: 30
                }
            };
        }
    }

    return {
        settings: {
            setting_1: 90,
            setting_2: 10,
            setting_3: 30
        }
    }; // open settings as the default;
};

export const SiteSettingsContext = createContext();

export const SiteSettingsProvider = ({ initialSettings, children }) => {
    const [settings, setSettings] = useState(getInitialSettings);

    const rawSetSettings = (rawSettings) => {
        localStorage.setItem('orange-settings', JSON.stringify(rawSettings));
    };

    if (initialSettings) {
        rawSetSettings(initialSettings);
    }

    useEffect(() => {
        rawSetSettings(settings);
    }, [settings]);

    return (
        <SiteSettingsContext.Provider value={{ settings, setSettings }}>
            {children}
        </SiteSettingsContext.Provider>
    );
};
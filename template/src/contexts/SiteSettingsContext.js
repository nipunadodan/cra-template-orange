import React from 'react';

const getInitialPrivacy = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const storedPrefs = window.localStorage.getItem('wallet-privacy');
        if (typeof storedPrefs === 'string') {
            let settings;
            try {
                settings = JSON.parse(storedPrefs);
            } catch(e) {
                console.warn('Settings loading error.');// error in the above string (in this case, yes)!
            }
            return true;
        }else{
            return false;
        }
    }

    return false // open privacy as the default;
};

export const SiteSettingsContext = React.createContext();

export const SiteSettingsProvider = ({ initialPrivacy, children }) => {
    const [privacy, setPrivacy] = React.useState(getInitialPrivacy);

    const rawSetPrivacy = (rawPrivacy) => {
        localStorage.setItem('wallet-privacy', rawPrivacy);
    };

    if (initialPrivacy) {
        rawSetPrivacy(initialPrivacy);
    }

    React.useEffect(() => {
        rawSetPrivacy(privacy);
    }, [privacy]);

    return (
        <SiteSettingsContext.Provider value={{ privacy: privacy, setPrivacy: setPrivacy }}>
            {children}
        </SiteSettingsContext.Provider>
    );
};
import { Theme, webDarkTheme, webLightTheme } from "@fluentui/react-components";
import { Language } from "./translate";

export const appConfig = {
    setLang(lang: Language): void {
        localStorage.setItem('app.storage.lang', lang);
    },
    getLang(defaultLang?: Language): Language {
        // @ts-ignore
        const storedLang: Language = localStorage.getItem('app.storage.lang');
        if (storedLang) {
            return storedLang;
        } else if (defaultLang) {
            appConfig.setLang(defaultLang);
            return defaultLang;
        } else {
            throw new Error("Language not found");
        }
    },
    setTheme(theme: Theme): void {
        localStorage.setItem('app.storage.theme', JSON.stringify(theme === webLightTheme));
    },
    getTheme(defaultTheme?: Theme): Theme {
        // @ts-ignore
        const storedTheme: string = localStorage.getItem('app.storage.theme');
        if (storedTheme) {
            return JSON.parse(storedTheme) ? webLightTheme : webDarkTheme;
        } else if (defaultTheme) {
            appConfig.setTheme(defaultTheme);
            return defaultTheme;
        } else {
            throw new Error("Theme not found");
        }
    }
}

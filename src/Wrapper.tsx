import { FluentProvider, webLightTheme, Menu, MenuTrigger, MenuButton, MenuPopover, MenuList, MenuItem, Button, Theme, webDarkTheme } from '@fluentui/react-components';
import { PackageIcon, RepoTemplateIcon, MarkGithubIcon, SunIcon, MoonIcon, LawIcon, XIcon, DashIcon, ScreenFullIcon, ScreenNormalIcon } from '@primer/octicons-react';
import React, { useState } from 'react';
import { Language, translate } from './api/translate';
import App from './App';
import { LocalLanguageFilled } from '@fluentui/react-icons';
import { appConfig } from './api/appconfig';
import { useI18n } from './i18n/I18nProvider';

type ElectronRegion = 'drag' | 'no-drag';
type ElectronStyle = React.CSSProperties & { WebkitAppRegion?: ElectronRegion };

function Wrapper() {
    const [theme, setTheme] = useState<Theme>(appConfig.getTheme(webLightTheme));
    const { lang, setLang, t } = useI18n();
    const [isMaximized, setIsMaximized] = React.useState<boolean>(false);

    const toggleTheme = () => {
        appConfig.setTheme(theme === webLightTheme ? webDarkTheme : webLightTheme);
        setTheme(theme === webLightTheme ? webDarkTheme : webLightTheme);
    }

    const toggleLang = () => {
        setLang(lang === 'zhcn' ? "enus" : "zhcn");
    }
    React.useEffect(() => {
        if (window.electronAPI) {
            window.electronAPI.isMaximized().then(setIsMaximized);
            window.electronAPI.onMaximizeState(setIsMaximized);
        }
    }, []);

    const titleBarStyle: ElectronStyle = {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#88888833",
        backdropFilter: "blur(10px)",
        userSelect: "none",
        WebkitAppRegion: "drag",
    };

    const leftBarStyle: ElectronStyle = {
        float: "left",
        WebkitAppRegion: "no-drag",
    };

    const rightBarStyle: ElectronStyle = {
        float: "right",
        WebkitAppRegion: "no-drag",
    };

    return (
        <FluentProvider theme={theme} applyStylesToPortals={false} style={{
            position: 'fixed',
            height: '100%',
            width: '100%',
            left: 0,
            top: 0,
            transition: '200ms ease',
        }}>
            <div style={titleBarStyle}>
                <div style={leftBarStyle}>
                    <Menu>
                        <MenuTrigger disableButtonEnhancement>
                            <MenuButton appearance="subtle" shape='square' icon={<PackageIcon />} menuIcon={null}>{t('app.title.appname')}</MenuButton>
                        </MenuTrigger>
                        <MenuPopover>
                            <MenuList>
                                <Menu>
                                    <MenuTrigger disableButtonEnhancement>
                                        <MenuItem icon={<RepoTemplateIcon />}>{translate('app.title.template', lang)}</MenuItem>
                                    </MenuTrigger>
                                    <MenuPopover>
                                        <MenuList>
                                            <MenuItem icon={<MarkGithubIcon />} onClick={() => { window.open('https://github.com/DilemmaGX/fluent-react-application') }}>{translate('app.title.template.source', lang)}</MenuItem>
                                            <MenuItem icon={<LawIcon />} onClick={() => { window.open('https://github.com/DilemmaGX/fluent-react-application/blob/master/LICENSE') }}>{translate('app.title.template.license', lang)}</MenuItem>
                                        </MenuList>
                                    </MenuPopover>
                                </Menu>
                            </MenuList>
                        </MenuPopover>
                    </Menu>
                    <Button appearance='subtle' shape='square' icon={theme === webLightTheme ? <SunIcon /> : <MoonIcon />} onClick={toggleTheme} />
                    <Button appearance='subtle' shape='square' icon={<LocalLanguageFilled />} onClick={toggleLang} />
                </div>
                <div style={rightBarStyle}>
                    <Button appearance='subtle' shape='square'
                            title={t(isMaximized ? 'app.window.restore' : 'app.window.maximize')}
                            icon={isMaximized ? <ScreenNormalIcon /> : <ScreenFullIcon />}
                            onClick={() => isMaximized ? window.electronAPI.unmaximize() : window.electronAPI.maximize()} />
                    <Button appearance='subtle' shape='square'
                            title={t('app.window.minimize')}
                            icon={<DashIcon />}
                            onClick={() => window.electronAPI.minimize()} />
                    <Button appearance='subtle' shape='square'
                            title={t('app.window.close')}
                            icon={<XIcon />}
                            onClick={() => window.electronAPI.close()} />
                </div>
            </div>
            <div style={{
                marginTop: '31.5px',
                padding: '10px'
            }}>
                <App />
            </div>
        </FluentProvider>
    );
}

export default Wrapper;

import { FluentProvider, webLightTheme, Menu, MenuTrigger, MenuButton, MenuPopover, MenuList, MenuItem, Button, Theme, webDarkTheme } from '@fluentui/react-components';
import { PackageIcon, RepoTemplateIcon, MarkGithubIcon, SunIcon, MoonIcon, LawIcon, XIcon } from '@primer/octicons-react';
import React, { useState } from 'react';
import { Language, translate } from './api/translate';
import App from './App';
import { LocalLanguageFilled } from '@fluentui/react-icons';
import { appConfig } from './api/appconfig';

function Wrapper() {
    const [theme, setTheme] = useState<Theme>(appConfig.getTheme(webLightTheme));
    const [lang, setLang] = useState<Language>(appConfig.getLang('enus'));

    const toggleTheme = () => {
        appConfig.setTheme(theme === webLightTheme ? webDarkTheme : webLightTheme);
        setTheme(theme === webLightTheme ? webDarkTheme : webLightTheme);
    }
    const toggleLang = () => {
        appConfig.setLang(lang === 'zhcn' ? "enus" : "zhcn");
        setLang(lang === 'zhcn' ? "enus" : "zhcn");
    }

    return (
        <FluentProvider theme={theme} applyStylesToPortals={false} style={{
            position: 'fixed',
            height: '100%',
            width: '100%',
            left: 0,
            top: 0,
            transition: '200ms ease',
        }}>
            <div style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                backgroundColor: "#88888833",
                backdropFilter: "blur(10px)",
                userSelect: "none",
                // @ts-ignore
                WebkitAppRegion: "drag"
            }}>
                <div style={{
                    float: "left",
                    // @ts-ignore
                    WebkitAppRegion: "no-drag"
                }}>
                    <Menu>
                        <MenuTrigger disableButtonEnhancement>
                            <MenuButton appearance="subtle" shape='square' icon={<PackageIcon />} menuIcon={null}>{translate('app.title.appname', lang)}</MenuButton>
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
                <div style={{
                    float: "right",
                    // @ts-ignore
                    WebkitAppRegion: "no-drag"
                }}>
                    <Button appearance='subtle' shape='square' icon={<XIcon />} onClick={window.close} />
                </div>
            </div>
            <div style={{
                marginTop: '31.5px',
                padding: '10px'
            }}>
                <App lang={lang} />
            </div>
        </FluentProvider>
    );
}

export default Wrapper;

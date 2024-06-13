export type Language = "zhcn" | "enus";

const translation: Record<string, Record<Language, string>> = {
    "app.title.appname": {
        "zhcn": "FUI 模板",
        "enus": "FUI Template"
    },
    "app.title.template": {
        "zhcn": "项目模板",
        "enus": "Template"
    },
    "app.title.template.source": {
        "zhcn": "源码仓库",
        "enus": "Repository"
    },
    "app.title.template.license": {
        "zhcn": "开源协议",
        "enus": "License"
    },
    "app.body.about": {
        "zhcn": "关于此项目",
        "enus": "About this project"
    },
    "app.body.features": {
        "zhcn": "支持的组件包",
        "enus": "Supported component packages"
    },
    "app.body.demo": {
        "zhcn": "功能演示",
        "enus": "Demonstration"
    }
};

/**
 * Get selected translation in `translation`
 * 
 * @param {string} id - Translate text id
 * @param {Language} lang - Target language
 * @returns {string} Translated string
 */
export function translate(id: string, lang: Language): string {
    if (!translation[id] || !Object.keys(translation[id]).includes(lang)) {
        console.warn(`Missing "${lang}" translation for "${id}"`);
        return id;
    }

    return translation[id][lang];
}
<div align="center">
<h1>Fluent-React-Application Template</h1>
<img alt="GitHub License" src="https://img.shields.io/github/license/DilemmaGX/fluent-react-application?color=3572EF" />
<img alt="GitHub Release" src="https://img.shields.io/github/v/release/DilemmaGX/fluent-react-application?color=3572EF">
<br />
<img alt="Template Preview" src="https://github.com/DilemmaGX/fluent-react-application/assets/111679857/9273d67f-2e02-43b0-aa4e-a38f1837bc69" width="800px" />
</div>

<div align="center">
<h2>Install & Test & Build</h2>
</div>

Dependencies

```cmd
npm ci
```

Test via browser

```cmd
npm start
```

Build `.html`

```cmd
npm run build
```

Test via electron

```cmd
npm run electron
```

Test via electron (without auto run build, which is faster in startup)

```cmd
npm run electron:dev
```

Build `.exe`

```cmd
npm run electron:exe
```

> [!NOTE]
> You should replace the `electron:exe` script and [`main.js`](./main.js) with your own configurations, default template for `electron:exe` script is:
>
> ```json
> "electron:exe": "npm run build && electron-packager ./ \"<APP_NAME>\" --out <OUTPUT_FOLDER> --app-version <APP_VERSION> --overwrite --asar --prune --ignore=node_modules"
> ```

<div align="center">
<h2>Modifying</h2>
</div>

### [Translate.ts](./src/api/translate.ts)

This is where you modify your translation files. Also, a new type `Language` is imported via this file.

```typescript
export type Language = "zhcn" | "enus";
```

Add and modify your own translations here:

```typescript
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
    }
};
```

Use `translate` to translate your application:

In your scripts:

```typescript
const lang: Language = 'enus';
translate('app.title.appname', lang); // FUI Template
```

In your elements:

```html
<Title1>{translate('app.title.appname'), lang}</Title1>
```

> [!TIP]
> It's better off to write your `id` in a readable (and extendable) pattern.
>
> For example, `<tag>.<component>.<label>.<sub-label>...` is used in this template's example file.
>
> It's also important to make sure your translations have similar length. Different length of text can have different displays on some componet (for example, `<Button>`).

### [Wrapper.tsx](./src/Wrapper.tsx)

This is where the main window-bar is modified. It's recommended to leave the styles unchanged. If you wish to modify the functions in the title bar, consider to use [Button](https://master--628d031b55e942004ac95df1.chromatic.com/?path=/docs/components-button-button--default) or [MenuButton](https://master--628d031b55e942004ac95df1.chromatic.com/?path=/docs/components-button-menubutton--default).

> [!TIP]
> It's recommended to add a title display in the window-bar and give it some app-config functions. For example, by using `MenuButton` mentioned above (you can also modify the ones in [Wrapper.tsx](./src/Wrapper.tsx)), you can add related links, app controls in a small button.
>
> Toggle button is also recommended, but not the ones original from FluentUI. In the example, I made a toggle button with better indications of the status and function by changing the icons of a regular button after clicking. Also, for ones with no clear icons that can indicate it's states, choose one icon that can represent both states.
>
> By the way, you can choose either `shape = "square"` or `shape = roudned` in your window-bar, but it's not recommended to use `shape = "circle"`.

### [App.tsx](./src/App.tsx)

This is the main body. Write your elements here like what your regularly do with other React apps.

## Features Planned

> [!NOTE]
> 🟩Finished 🟨In progress 🟥Not started

```
🟩React support
🟩Fluent UI support
🟩Electron support
🟨Window control
    🟩Close window
    🟨Maximize window
    🟨Minimize window
```

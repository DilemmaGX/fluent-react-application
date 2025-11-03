const esbuild = require("esbuild");
const inlineImage = require("esbuild-plugin-inline-image");
const path = require("path");
const fs = require("fs");

esbuild.build({
    entryPoints: ["./src/index.tsx"],
    outfile: "./build/js/app.js",
    minify: true,
    bundle: true,
    loader: {
        ".ts": "ts",
        ".tsx": "tsx",
        ".js": "jsx",
    },
    plugins: [inlineImage()],
}).then(() => {
    const publicHtml = path.join(__dirname, "public/index.html");
    const buildHtml = path.join(__dirname, "build/index.html");
    let html = fs.readFileSync(publicHtml, "utf-8");
    if (!html.includes("./js/app.js")) {
        html = html.replace("</body>", "  <script src=\"./js/app.js\"></script>\n</body>");
    }
    fs.mkdirSync(path.join(__dirname, "build"), { recursive: true });
    fs.writeFileSync(buildHtml, html);
}).catch(() => process.exit(1));
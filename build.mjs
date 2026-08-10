import { cpSync, mkdirSync, rmSync } from "node:fs";

const output = new URL("./dist/", import.meta.url);

rmSync(output, { recursive: true, force: true });
mkdirSync(output, { recursive: true });

for (const file of ["index.html", "episodios.html", "styles.css", "script.js"]) {
  cpSync(new URL(`./${file}`, import.meta.url), new URL(file, output));
}

cpSync(new URL("./public/", import.meta.url), new URL("public/", output), {
  recursive: true
});

console.log("Site estático preparado em dist/");

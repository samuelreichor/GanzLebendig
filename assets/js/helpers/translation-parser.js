import fs from 'node:fs';
import path from 'node:path';
import parser from 'php-parser';

const __dirname = import.meta.dirname;
const translationsPath = path.resolve(__dirname, '../../../translations');
const phpFiles = [];

fs.readdirSync(translationsPath).forEach((folder) => {
  const folderPath = path.join(translationsPath, folder);

  if (fs.statSync(folderPath).isDirectory()) {
    const filePath = path.join(folderPath, 'site.php');

    if (fs.existsSync(filePath)) {
      phpFiles.push({ input: filePath, lang: folder });
    }
  }
});

const translations = {};

phpFiles.forEach((file) => {
  const data = fs.readFileSync(file.input, 'utf8');
  const phpParser = new parser.Engine({
    parser: {
      extractDoc: true,
    },
    ast: {
      withPositions: true,
    },
  });

  const ast = phpParser.parseCode(data);

  translations[file.lang] = {};

  ast.children[0].expr.items.forEach((item) => {
    const keys = item.key.value.split('.');
    let current = translations[file.lang];

    for (let i = 1; i < keys.length - 1; i++) {
      if (!current[keys[i]]) {
        current[keys[i]] = {};
      }
      current = current[keys[i]];
    }

    current[keys[keys.length - 1]] = item.value.value;
  });
});

const jsContent = `export default ${JSON.stringify(translations, null, 2)};`;
const translationPath = 'web/translations/translations.js';
const fullTranslationPath = path.dirname(translationPath);

if (!fs.existsSync(fullTranslationPath)) {
  fs.mkdirSync(fullTranslationPath, { recursive: true });
}

fs.writeFile(translationPath, jsContent, (err) => {
  if (err) {
    console.error('Error during translation conversion:', err);
    return;
  }
  console.log(`Successfully converted PHP translations to ${translationPath}`);
});

const fs = require('fs').promises;
const { renderToString } = require('../hydrate');

async function prerender() {
  try {
    const results = await renderToString(
      `<my-component></my-component>`,
      {
        fullDocument: false,
        serializeShadowRoot: true, // enables Declarative Shadow DOM
        prettyHtml: true,
      }
    );

    const prerenderedHtml = results.html;

    let indexHtml = await fs.readFile('src/index.html', 'utf8');

    // Inject the prerendered HTML into the body of the existing index.html
    indexHtml = indexHtml.replace(
      '<my-component></my-component>',
      prerenderedHtml
    );

    await fs.writeFile('src/index.html', indexHtml, 'utf8');
  } catch (error) {
    console.error('Error during prerendering:', error);
  }
}

prerender();
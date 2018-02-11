const template = opts => {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <title>title</title>
      <link rel="stylesheet" href="/style.css" />
    </head>
    <body>
      <div id="root">${opts.body}</div>
      <script>
        window.__initialState = ${opts.initialState}
      </script>
      <script src="/manifest.js"></script>
      ${opts.modules.map(m => {
        return `<script src="/${m.file}"></script>`
      }).join('\n')}
      <script src='/client.js'></script>
    </body>
  </html>
  `;
};

module.exports = template;
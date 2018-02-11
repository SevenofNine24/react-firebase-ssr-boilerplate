const template = opts => {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <title>title</title>
      <link rel="stylesheet" href="assets/style.css" />
    </head>
    <body>
      <div id="root">${opts.body}</div>
      <script>
        window.__initialState = ${opts.initialState}
      </script>
      <script src='bundle.js'></script>
    </body>
  </html>
  `;
};

module.exports = template;
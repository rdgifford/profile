export default ({ body, title, initialState }) => {
  return `
    <html>
        <head>
            <script>window.__APP_INITIAL_STATE__ = ${initialState}</script>
            <title>${title}</title>
            <script src="./bundle.js"></script> 
            <link rel="stylesheet" type="text/css" href="main.css">
        </head>
        <body>
            <div>Robbie Gifford</div>
            <div class='container'>${body}</div>
        </body>
    </html>
  `;
};

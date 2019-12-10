// html skeleton provider
function template(title, initialState = {}, pageContent = ""){
    let scripts = ''; // Dynamically ship scripts based on render type
    if(pageContent){
      scripts = ` <script>
                     window.__STATE__ = ${JSON.stringify(initialState)}
                  </script>
                  <script src="/asset/client.js"> </script>
                  `
    } else {
      scripts = ` <script src="/asset/bundle.js"> </script> `
    }
    let page = `<!DOCTYPE html>
                <html lang="en">
                <head>
                  <meta charset="utf-8">
                  <title> ${title} </title>
                  <link href="/asset/style.css" rel="stylesheet">
                </head>
                <body>
                  <div class="content">
                     <div id="app" class="wrap-inner">
                        <!--- magic happens here -->  ${pageContent}
                     </div>
                  </div>
  
                    ${scripts}
                </body>
                `;
  
    return page;
  }
  
  module.exports = template;
  
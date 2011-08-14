/* node js configuration */
/* see http://thecodinghumanist.com/blog/archives/2011/5/6/serving-static-files-from-node-js */
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  console.log('request starting');
  
  fs.readFile('./index.php', function(error, content) {
      if (error) {
          response.writeHead(500);
          response.end();
      }
      else {
          response.writeHead(200, { 'Content-Type': 'text/html' });
          response.end(content, 'utf-8');
      }
  });
  
}).listen(process.env.C9_PORT, "0.0.0.0");
console.log('Server running at http://toddalina_site.toddalina.cloud9ide.com');
const http = require("http");
console.log(http.STATUS_CODES);
const server = http.createServer((request, response)=>{
  // step-1 operation
  const date = new Date();
  const current_Date = date.toLocaleDateString();

  // step-2 header info
  response.writeHead(200, {
    'Content-Type': "application/json"
  });

  // step-3 send response
  const result = JSON.stringify({current_Date});
  response.write(result);

  // disconnect user
  response.end();
});

server.listen(8080);
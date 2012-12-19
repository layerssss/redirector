require('http').createServer(function(req,res){
  res.statusCode=302;
  res.setHeader('Location',process.env.REDIRECTOR_TO||'about:blank');
  res.end();
}).listen(Number(process.env.PORT||3000));
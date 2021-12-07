const http=require('http');
const fs=require('fs');
http.createServer((req,res)=> {
    res.writeHead(200,{'Content-Type' : 'text/html'})
    if(req.url==='/login' || req.url==='/'){
        let data=fs.readFileSync('static/login.html');
        res.write(data);
    }
    else  if(req.url==='/index4'){
        let data=fs.readFileSync('static/index4.html');
        res.write(data);
    } 
    else  if(req.url==='/index3'){
        let data=fs.readFileSync('static/index3.html');
        res.write(data);
    } 
   else  if(req.url==='/index2'){
        let data=fs.readFileSync('static/index2.html');
        res.write(data);
    } 
    
    else  {
        let data=fs.readFileSync('static/index.html');
        res.write(data);
    }
    
    
    res.end(); 
    

}).listen(8080, ()=>{console.log('server started ta 8080')});
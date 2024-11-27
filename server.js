// const http=require("http")

// const server=http.createServer((req,res)=>{
//     if (req.url==="/" && req.method==="GET"){
//         res.write("Hello World");
//         res.end();
//     }else if(req.url==="/dat" && req.method==="GET"){
//         res.write(new Date().toString());
//         res.end();

//     }else{
//         res.write("Not Found");
//         res.end();
//     }
// });

// const PORT=3000;
// server.listen(PORT,()=>{
//     console.log(`Server is running on port ${PORT}`);
// });

const express=require("express");
const app=express();

app.get("/",(req,res)=>{
    res.send("Hello World");
});

app.get("/date",(req,res)=>{
    res.send(new Date().toString());

});

app.use((req,res)=>{
    res.status(404).send("Page not found");
});

 const PORT=3000;
 app.listen(PORT,()=>{
    console.log(`Server is runnning on port $(PORT)`);
 })
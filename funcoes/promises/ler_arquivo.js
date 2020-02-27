let fs = require('fs');

const  lerArquivo = function(arquivo){
    return new Promise(function (resolve,reject){
        fs.readFile(arquivo,'utf8',(err,contents)=>{
            if(err){
                reject(err);
            }else{
                resolve(contents);
            }
        });
    })

}
/*
function  lerArquivo (arquivo){
    var p1= new Promise(function(resolve,reject){
        fs.readFile(arquivo,'utf8',(err,contents)=>{
        if(err){
            reject(err);
        }else {
                resolve(contents);
            }
        });
   });
    return p1;
};
*/

lerArquivo("teste.txt").then(function(contents){
    console.log(contents);
    return lerArquivo("teste2.txt");
}).then(function(contents){
    console.log(contents);
    return lerArquivo("teste3.txt");
}).then(function(contents){
    console.log(contents);
    return lerArquivo("teste4.txt");
}).then(function(contents){
    console.log(contents);
    
});



let fs = require('fs');

let c1 ="";
let c2 ="";
let c3 ="";
let c4 ="";

console.log(" ");
console.log("NÃO IMPRIME na ordem em que foram chamados");
//------------------NÃO IMPRIME na ordem em que foram chamados---------------------------
fs.readFile('teste.txt','utf8',(err,contents)=>{
    c1.contents
    console.log(contents + 'Bloco1');
});

fs.readFile('teste2.txt','utf8',(err,contents)=>{
    c2.contents
    console.log(contents +  'Bloco1');
 });

fs.readFile('teste3.txt','utf8',(err,contents)=>{
    c3.contents
    console.log(contents +  'Bloco1');
 });

fs.readFile('teste4.txt','utf8',(err,contents)=>{
    c4.contents
    console.log(contents +  'Bloco1');
});

//------------------IMPRIME na ordem em que foram chamados---------------------------
 c1 ="";
 c2 ="";
 c3 ="";
 c4 ="";

 fs.readFile('teste.txt','utf8',(err,contents)=>{ //LÊ ARQ 1
    console.log("IMPRIME na ordem em que foram chamados");
    console.log(" ");
    c1 = contents;
    console.log(contents +  'Bloco2');
    fs.readFile('teste2.txt','utf8',(err,contents)=>{//LÊ ARQ 2
        c2 = contents;
        console.log(contents +  'Bloco2');
        fs.readFile('teste3.txt','utf8',(err,contents)=>{//LÊ ARQ 3
            c3 = contents;
            console.log(contents +  'Bloco2');
            fs.readFile('teste4.txt','utf8',(err,contents)=>{//LÊ ARQ 4
                c4=contents;
                console.log(contents)+ 'Bloco2';
                console.log('${c1} - ${c2} - ${c3} - ${c4}')
            });//FECHA ARQ 4
        });//FECHA ARQ 3
    });//FECHA ARQ 2
    
 });//FECHA ARQ 1
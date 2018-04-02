var obj = 
{
    "first_name": "Vardan",
    "last_name":"Hovsepyan",
    "age": 13,
    "tumo_student": true
}
var myJSON =
var fs = require('fs');

function main(){
   fs.writeFile("hello.txt", "Hello world\n", function(err){
       console.log("fs.writeFile ended");
   });
   console.log("fs.writeFile");
}
main();
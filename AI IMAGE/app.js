// console.log("Starting")
const readline=require('readline');
const{generateImage}=require('./controllers/imageGeneration')
const r1=readline.createInterface({
input:  process.stdin,
output: process.stdout

} 
)

r1.question("express your feeling i will give you as image:\n",generateImage)
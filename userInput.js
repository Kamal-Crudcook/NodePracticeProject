const readline = require('readline');

let rl = readline.createInterface({input:process.stdin, output:process.stdout})
//createInterface will create an instance of readline, we will call it a readline interface 
//input and output are streams for ip and op 

let num1 = Math.floor((Math.random()*10)+1);
let num2 = Math.floor((Math.random()*10)+1);
let ans = num1+num2;

rl.question(`What is ${num1} + ${num2} ? \n`, (UserInput) => {    //The function gets user's input
    if(UserInput.trim() == ans){
        rl.close();
    }else{
        rl.setPrompt('Incorrect response. Please try again!\n')
        rl.prompt()
        rl.on('line',(userInput)=>{        //line event will keep on executing unless the user doesn't give correct input
            if(userInput.trim() == ans){
                rl.close()
            }else{
                rl.setPrompt(`Your answer of ${userInput} is incorrect!\n`)
                rl.prompt()
            }
        })
    }
})

rl.on("close",() => {   //Because readline class also extends EventEmitter
    console.log("Correct!!!!!")
})

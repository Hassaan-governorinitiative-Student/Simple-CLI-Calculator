#! /usr/bin/env node 

import inquirer from "inquirer";

// Printing a Wellcome Message 

// console.log("n\t Wellcome To \Hassaan-First-TypeScript-Project\' - Simple Calculator \n");

console.log(" Wellcome To Hassaan-First-TypeScript-Project - CLI Simple Calculator");

// Asking Questions from user through Inquirer 

let answer = await inquirer.prompt ([
    {
        message: "Enter Your First Number :" ,type:"number" , name:"firstNumber"
    }, 

    {
        message:"Enter Your Second Number :" , type:"number" , name:"secondNumber"
    },
    {
        message :"Select Operator :" , type:"list", name:"operator", choices:[
            "Addition","Subtraction","Multiplication","Division"
        ],
    },
]);

// console.log(answer);

// Conditional Statements If-Else

if( answer.operator === "Addition" ) { console.log(answer.firstNumber + answer.secondNumber)
}
else  if ( answer.operator === "Subtraction" ) { console.log(answer.firstNumber - answer.secondNumber)
}
else  if( answer.operator === "Multiplication" ) { console.log(answer.firstNumber * answer.secondNumber)
}
else  if( answer.operator === "Division" ) { console.log(answer.firstNumber / answer.secondNumber)
}
else { console.log("Insert Valid Operator")
}


// Finally Calculator is Ready ...
 
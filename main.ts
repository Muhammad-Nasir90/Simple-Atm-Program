#! /usr/bin/env node

      import inquirer from "inquirer";

let myBalance = 10000;
let myPin = 1234;


   let pinAns = await inquirer.prompt([
        {
            name: "pin",
            message: "enter your pin number:",
            type: "number"
        }
    ]);

    if (pinAns.pin === myPin) {
        console.log(`your pin number is correct!!!`);

        let operationAns = await inquirer.prompt([
            {
                name: "operation",
                message: "please select option:",
                type: "list",
                choices: ["withdraw", "fastcash", "checkbalance"]
            }
        ]);

        if (operationAns.operation === "withdraw") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    message: "enter your amount:",
                    type: "number"
                }
            ]);
            if (amountAns.amount >= myBalance) {
                console.log("you have insufficent balance, Please check your balance");
            } else {
                myBalance -= amountAns.amount;
                console.log(`your remaining balance is : ${myBalance}`);
            }
        } else if (operationAns.operation === "fastcash") {
            let fastcashAns = await inquirer.prompt([
                {
                    name: "cash",
                    message: "select which amount you want to withdraw",
                    type: "list",
                    choices: ["2000", "4000", "10000", "12000"]
                }
            ]);
            if (parseInt(fastcashAns.cash) > myBalance) {
                console.log(`you have insufficent balance, please check your balance`);
            } else {
                myBalance -= parseInt(fastcashAns.cash);
                console.log(`you balance is : ${myBalance}`);
            }
        } else if (operationAns.operation === "checkbalance") {
            console.log(`your balance is : ${myBalance}`);
        }
    } else {
        console.log(`Incorrect pin number`);
    }





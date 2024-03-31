import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 20000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: chalk.gray("HI! \n Welcome to islamic bank. \n Pleasae enter your pin"),
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log(chalk.greenBright.italic("correct pin code !!!"));
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: chalk.bold.redBright("please select one option"),
            type: "list",
            choices: ["withdraw", "checkbalance", "fast withdraw"]
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: chalk.bgBlueBright.underline("enter your withdraw amount"),
                type: "number"
            }
        ]);
        myBalance -= amountAns.amount;
        if (myBalance >= amountAns.amount) {
            console.log(chalk.bgGreenBright.italic("transaction is successful. \n Your remaining balance is " + myBalance));
        }
        else {
            console.log(chalk.underline.bgRedBright("insufficient balance. \n Please try again."));
        }
    }
    else if (operationAns.operation === "fast withdraw") {
        let fastAmount = await inquirer.prompt([
            {
                name: "fast",
                message: "please select one option from the following amounts",
                type: "list",
                choices: ["500", "1000", "2000", "3000", "5000", "10000"]
            }
        ]);
        console.log(fastAmount);
        if (fastAmount.fast === "500") {
            myBalance -= fastAmount.fast;
            console.log(chalk.green.italic("your remaning amount is ") + myBalance);
        }
        else if (fastAmount.fast === "1000") {
            myBalance -= fastAmount.fast;
            console.log(chalk.green.italic("your remaning amount is ") + myBalance);
        }
        else if (fastAmount.fast === "2000") {
            myBalance -= fastAmount.fast;
            console.log(chalk.green.italic("your remaning amount is ") + myBalance);
        }
        else if (fastAmount.fast === "3000") {
            myBalance -= fastAmount.fast;
            console.log(chalk.green.italic("your remaning amount is ") + myBalance);
        }
        else if (fastAmount.fast === "5000") {
            myBalance -= fastAmount.fast;
            console.log(chalk.green.italic("your remaning amount is ") + myBalance);
        }
        else if (fastAmount.fast === "1000") {
            myBalance -= fastAmount.fast;
            console.log(chalk.green.italic("your remaning amount is ") + myBalance);
        }
    }
    else if (operationAns.operation === "checkbalance") {
        console.log(chalk.overline.yellowBright.bold("your balance is " + myBalance));
    }
}
else {
    console.log(chalk.redBright.bold("incorrect pin number!!,\n Try again"));
}

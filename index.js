#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.rgb(204, 204, 204)(`\n  \t\t <<<============================================>>>`));
console.log(chalk.bold.rgb(204, 204, 204)(`<<<==========>>>  ${chalk.bold.hex('#9999FF')('Welcome To my Currency Converter')}  <<<===========>>>`));
console.log(chalk.bold.rgb(204, 204, 204)(`\t\t <<<============================================>>>\n`));
let exchange_rate = {
    "USD $": 1,
    "EUR £": 0.88,
    "JPY ¥": 113.32,
    "CAD $": 1.29,
    "AUD $": 1.44,
    "PKR Rs": 277.70,
};
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: chalk.yellowBright.bold("Select the currency you want to convert from:"),
        choices: ["USD $", "EUR £", "JPY ¥", "CAD $", "AUD $", "PKR Rs"],
    },
    {
        name: "to_currency",
        type: "list",
        message: chalk.magentaBright.bold("Select the currency you want to convert into:"),
        choices: ["USD $", "EUR £", "JPY ¥", "CAD $", "AUD $", "PKR Rs"],
    },
    {
        name: "amount",
        type: "input",
        message: chalk.redBright.bold("Enter the amount you want to convert:"),
    }
]);
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
console.log(chalk.blueBright.bold(`\n \t ${user_answer.from_currency}:${chalk.greenBright(amount)}  converted amount in  ${user_answer.to_currency}:${chalk.greenBright(converted_amount.toFixed(2))}`));

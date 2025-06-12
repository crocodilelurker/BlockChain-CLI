import { Blockchain } from './Blockchain.js';
import readline from 'readline';

let blockchain;

// Set up readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Welcome to the Blockchain CLI!');
console.log('Available commands:');
console.log('- create <name>: Create a new blockchain with an optional name');
console.log('- add <data>: Add a new block with the specified data');
console.log('- validate: Validate the blockchain');
console.log('- display: Display the current blockchain');
console.log('- exit: Exit the CLI');

// Function to process user commands
function processCommand(command) {
    const args = command.split(' ');
    const action = args[0];
    const rest = args.slice(1).join(' ');

    switch (action) {
        case 'create':
            const nameChain = rest || undefined;
            blockchain = new Blockchain({ name: nameChain });
            console.log(`Created blockchain: ${blockchain.name}`);
            break;

        case 'add':
            if (!blockchain) {
                console.log('Please create a blockchain first.');
            } else if (!rest) {
                console.log('Please provide data for the new block.');
            } else {
                console.log(`Adding a new block with data: "${rest}"`);
                blockchain.mine(rest);
                console.log('Block added successfully!');
            }
            break;

        case 'validate':
            if (!blockchain) {
                console.log('Please create a blockchain first.');
            } else {
                console.log('Validating blockchain...');
                const isValid = blockchain.validateChain();
                if (isValid) {
                    console.log('Blockchain is valid.');
                } else {
                    console.log('Blockchain is invalid.');
                }
            }
            break;

        case 'display':
            if (!blockchain) {
                console.log('Please create a blockchain first.');
            } else {
                console.log('Current Blockchain:');
                console.log(JSON.stringify(blockchain.get(), null, 2));
            }
            break;

        case 'exit':
            console.log('Exiting CLI...');
            rl.close();
            break;

        default:
            console.log('Unknown command. Please try again.');
    }
}

// Listen for user input
rl.on('line', (input) => {
    processCommand(input.trim());
});
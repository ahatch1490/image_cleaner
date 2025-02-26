"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const child_process_1 = require("child_process");
const program = new commander_1.Command();
program
    .name('my-ts-cli')
    .description('A simple TypeScript CLI using Commander')
    .version('1.0.0');
// Define a command to execute a shell command
program
    .command('exec <cmd>')
    .description('Execute a shell command')
    .action((cmd) => {
    console.log(`Executing: ${cmd}`);
    const shell = (0, child_process_1.spawn)(cmd, { shell: true, stdio: 'inherit' });
    shell.on('close', (code) => {
        console.log(`Command exited with code ${code}`);
    });
});
// Parse arguments from the command line
program.parse(process.argv);

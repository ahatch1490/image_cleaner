import { Command } from 'commander';
import { spawn } from 'child_process';

const program = new Command();

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

        const shell = spawn(cmd, { shell: true, stdio: 'inherit' });

        shell.on('close', (code) => {
            console.log(`Command exited with code ${code}`);
        });
    });

// Parse arguments from the command line
program.parse(process.argv);

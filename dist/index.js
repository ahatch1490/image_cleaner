#!/usr/bin/env node
import { Command } from 'commander';
import { spawn } from 'child_process';
import * as fs from 'fs/promises';
const program = new Command();
program
    .name('my-ts-cli')
    .description('A simple TypeScript CLI using Commander')
    .version('1.0.0');
// Define a command to execute a shell command
program
    .command('exec <cmd>')
    .description('Execute a shell command')
    .action(async (cmd) => {
    console.log(`Executing: ${cmd}`);
    await listDirectoryContents("./");
    const shell = spawn(cmd, { shell: true, stdio: 'inherit' });
    shell.on('close', (code) => {
        console.log(`Command exited with code ${code}`);
    });
});
// Parse arguments from the command line
program.parse(process.argv);
async function listDirectoryContents(dirPath) {
    try {
        const files = await fs.readdir(dirPath);
        console.log(`Contents of ${dirPath}:`, files);
    }
    catch (error) {
        console.error(`Error reading directory ${dirPath}:`, error);
    }
}
// Call function

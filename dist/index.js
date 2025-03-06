#!/usr/bin/env node
import { Command } from 'commander';
import * as fs from 'fs/promises';
const program = new Command();
program
    .name('my-ts-cli')
    .description('A simple TypeScript CLI using Commander')
    .version('1.0.0');
// Define a command to execute a shell command
program
    .command('img_clr')
    .description('Execute a shell command')
    .option('-d --directory <directory>', 'Directory to list contents')
    .action(async (str, options) => {
    let directory = options._optionValues.directory;
    if (directory != null) {
        console.log(`Directory: ${options.directory}`);
        await listDirectoryContents(directory);
    }
    // const shell = spawn(cmd, { shell: true, stdio: 'inherit' });
    //shell.on('close', (code) => {
    //    console.log(`Command exited with code ${code}`);
    //});
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

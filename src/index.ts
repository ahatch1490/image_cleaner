#!/usr/bin/env node

import { Command } from 'commander';
import { spawn } from 'child_process';
import * as fs from 'fs/promises';
import * as path from 'path';

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
    .action(async (str,options) => {
        console.log(options);

        if(options.contains('directory')){
            console.log(`Directory: ${options.directory}`);
            await listDirectoryContents("");
        }

        // const shell = spawn(cmd, { shell: true, stdio: 'inherit' });

        //shell.on('close', (code) => {
        //    console.log(`Command exited with code ${code}`);
        //});
    });

// Parse arguments from the command line
program.parse(process.argv);



async function listDirectoryContents(dirPath: string) {
    try {
        const files = await fs.readdir(dirPath);
        console.log(`Contents of ${dirPath}:`, files);
    } catch (error) {
        console.error(`Error reading directory ${dirPath}:`, error);
    }
}

// Call function

#!/usr/bin/env node
import { Command } from 'commander';
import sharp from "sharp";
import * as fs from 'fs/promises';
import { ImageData } from "./ImageData.js";
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
        const images = await listDirectoryContents(directory);
        images.forEach(image => {
            console.log(`Image: ${image.getFullPathReplaceExt(".webp")}`);
            sharp(image.getFullPath()).rotate().toFormat('webp', { quality: 50 })
                .toFile(image.getFullPathReplaceExt(".webp"));
            // console.log(`Image: ${image.getFullPathReplaceExt(".webp")}`);
            // const cmd:string = `cwebp  ${image.getFullPath()} -o ${image.getFullPathReplaceExt(".webp")}`;
            // const shell = spawn(cmd, { shell: true, stdio: 'inherit' });
            // shell.on('close', (code) => {
            //     console.log(`Command exited with code ${code}`);
            // });
        });
    }
});
// Parse arguments from the command line
program.parse(process.argv);
async function listDirectoryContents(dirPath) {
    console.log(`Directory: ${dirPath}`);
    let images = [];
    try {
        const extensions = [".png", ".jpg", ".jpeg", ".gif"];
        const files = await fs.readdir(dirPath);
        files.forEach(file => {
            if (extensions.some(suffix => file.endsWith(suffix))) {
                images.push(new ImageData(dirPath, file));
            }
        });
    }
    catch (error) {
        console.error(`Error reading directory ${dirPath}:`, error);
    }
    return images;
}
// Call function

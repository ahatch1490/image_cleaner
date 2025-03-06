
export  class ImageData {
    constructor(imageDir: string, imageName:string){
        this.imageDir = imageDir;
        this.imageName = imageName;
    }
    imageName: string;
    imageDir: string;

    getFullPath(): string {
        return `${this.imageDir}/${this.imageName}`;
    }
}

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


    getFullPathReplaceExt(ext: string): string {
        return `${this.imageDir}/${this.replaceExt(this.imageName, ext)}`;
    }
    private replaceExt(filename :string, ext: string): string {
        return filename.split(".").slice(0, -1).join(".") + ext;
    }
}
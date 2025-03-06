export class ImageData {
    constructor(imageDir, imageName) {
        this.imageDir = imageDir;
        this.imageName = imageName;
    }
    imageName;
    imageDir;
    getFullPath() {
        return `${this.imageDir}/${this.imageName}`;
    }
}

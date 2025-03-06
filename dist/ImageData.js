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
    getFullPathReplaceExt(ext) {
        return `${this.imageDir}/${this.replaceExt(this.imageName, ext)}`;
    }
    replaceExt(filename, ext) {
        return filename.split(".").slice(0, -1).join(".") + ext;
    }
}

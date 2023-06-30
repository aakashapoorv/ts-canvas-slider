export interface ImageLoader {
    getImage(idx: number, callback: (img: HTMLImageElement | null) => void): void;
    getImages(indices: number[], callback: (images: (HTMLImageElement | null)[]) => void): void;
    getNumImages(): number;
}
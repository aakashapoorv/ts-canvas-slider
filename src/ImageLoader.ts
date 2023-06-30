import {
    ImageLoader
} from './interfaces/ImageLoader';

export default function imageLoader(imagePath: string, numImages: number): ImageLoader {

    function getImage(idx: number, callback: (img: HTMLImageElement | null) => void): void {
        if (!(0 > idx || idx >= numImages)) {
            let img = document.createElement("img");
            img.onload = function () {
                callback(img);
            }
            img.onerror = function () {
                console.error('Failed to load image at ' + imagePath + "/" + idx + ".jpg");
                callback(null);
            }
            img.src = imagePath + "/" + idx + ".jpg";
        }
    };

    function getImages(indeces: number[], callback: (images: (HTMLImageElement | null)[]) => void): void {
        let images: (HTMLImageElement | null)[] = [];
        let numLoaded = 0;

        indeces = Array.from(new Set(indeces));

        let imageLoaded = function (img: HTMLImageElement | null, idx: number) {
            images[idx] = img;
            numLoaded++;

            if (numLoaded === indeces.length) {
                callback(images);
            }
        };

        for (let i = 0; i < indeces.length; i++) {
            let idx = indeces[i];
            getImage(idx, function (img) {
                imageLoaded(img, i);
            });
        }
    };

    function getNumImages(): number {
        return numImages;
    };

    return {
        getImage,
        getImages,
        getNumImages
    };
}
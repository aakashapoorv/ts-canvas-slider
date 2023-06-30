import renderCanvas from './CanvasRenderer';
import handleDrag from './DragHandler';
import imageLoader from './ImageLoader';
import createSceneRenderer from './SceneRenderer';
import {
    ImageLoader
} from './interfaces/ImageLoader';

let canvas: HTMLCanvasElement = renderCanvas("image_slider", 640, 400);

let myImageLoader: ImageLoader = imageLoader("images", 4);

let myRenderScene: (slideOffset: number) => void = createSceneRenderer(canvas, myImageLoader);

let slideOffset: number = 0;
let sceneWidth: number = myImageLoader.getNumImages() * canvas.width;

myRenderScene(slideOffset);

handleDrag(canvas, function (dx: number, _: number) {
    slideOffset += dx;
    slideOffset = Math.max(0, slideOffset);
    slideOffset = Math.min(slideOffset, sceneWidth - canvas.width);

    requestAnimationFrame(function () {
        myRenderScene(slideOffset);
    });
});
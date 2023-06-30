import {
  ImageLoader
} from './interfaces/ImageLoader';
import {
  SceneRenderer
} from './interfaces/SceneRenderer';

export default function createSceneRenderer(canvas: HTMLCanvasElement, imageLoader: ImageLoader): SceneRenderer {
  const ctx = canvas.getContext("2d") !;
  const aspect = canvas.width / canvas.height;
  const sceneWidth = imageLoader.getNumImages() * canvas.width;
  let lastRendered: number | null = null;

  function indicesForOffset(offset: number): number[] {
    return [
      Math.floor(offset / sceneWidth * imageLoader.getNumImages()),
      Math.ceil(offset / sceneWidth * imageLoader.getNumImages())
    ];
  }

  function padPreload(indices: number[]): number[] {
    const last = indices[indices.length - 1];
    if (last + 1 < imageLoader.getNumImages()) {
      indices.push(last + 1);
    }
    return indices;
  }

  function scaleForImage(image: HTMLImageElement): number {
    const imageAspect = image.width / image.height;
    if (imageAspect >= aspect) {
      return canvas.width / image.width;
    } else if (aspect > imageAspect) {
      return canvas.height / image.height;
    }
    return 0;
  }

  function renderImage(image: HTMLImageElement, offset: number) {
    const s = scaleForImage(image);
    const width = image.width * s;
    const height = image.height * s;
    const x = offset + (canvas.width - width) / 2;
    const y = (canvas.height - height) / 2;
    ctx.drawImage(image, Math.round(x), Math.round(y), Math.round(width), Math.round(height));
  }

  return function (slideOffset: number) {
    if (lastRendered !== slideOffset) {
      const indices = padPreload(indicesForOffset(slideOffset));
      const left = slideOffset - indices[0] * canvas.width;
      imageLoader.getImages(indices, function (images) {
        requestAnimationFrame(function () {
          ctx.fillStyle = "rgb(242, 242, 242)";
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          for (let i = 0; i < images.length; i++) {
            console.log(JSON.stringify(images));
            const image = images[i];
            if (image) { // Check if image is not undefined
              renderImage(image, canvas.width * i - left);
            } else {
              console.log('Image at index ' + i + ' is undefined.');
            }
          }
        });
      });
      lastRendered = slideOffset;
    }
  };
}

export default function renderCanvas(domId: string, width: number, height: number): HTMLCanvasElement {
    const canvas = document.getElementById(domId) as HTMLCanvasElement;

    if (!canvas) {
        throw new Error(`Element with id "${domId}" not found.`);
    }

    canvas.width = width;
    canvas.height = height;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    canvas.addEventListener("selectstart", (e: Event) => {
        e.preventDefault();
    });

    return canvas;
}
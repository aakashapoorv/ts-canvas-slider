export default function handleDrag(domEl: HTMLElement, callback: (x: number, y: number) => void): void {
    let x = 0;
    let y = 0;

    const startDrag = (e: MouseEvent) => {
        x = e.pageX;
        y = e.pageY;
        domEl.classList.add("drag-active");
        window.addEventListener("mousemove", updateDrag);
        window.addEventListener("mouseup", endDrag);
    };

    const updateDrag = (e: MouseEvent) => {
        callback(x - e.pageX, y - e.pageY);
        x = e.pageX;
        y = e.pageY;
    };

    const endDrag = () => {
        domEl.classList.remove("drag-active");
        window.removeEventListener("mousemove", updateDrag);
        window.removeEventListener("mouseup", endDrag);
    };

    domEl.addEventListener("mousedown", startDrag);
};
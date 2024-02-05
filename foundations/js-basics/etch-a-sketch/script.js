const container = document.querySelector('.container');
function grid(size) {
    if (!isNaN(size) && size > 0) {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        for (let i = 0; i < size; i++) {
            const row = document.createElement('div');
            row.classList.add("row");
            for (let j = 0; j < size; j++) {
                const cell = document.createElement('div');
                cell.classList.add("cell");
                row.appendChild(cell);
            }
            container.appendChild(row);
        }
        const cells = document.querySelectorAll('.cell');
        const cell = document.querySelector(".cell");
        cells.forEach((cell) => cell.addEventListener("mouseover", () => cell.style.backgroundColor = "black"));
    }
}
grid(16);
const button = document.querySelector(".new-grid");
button.addEventListener("click", () => grid(prompt("enter grid size")));
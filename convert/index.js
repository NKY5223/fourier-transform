/** @type {HTMLInputElement} */
const urlInput = document.getElementById("url");
document.getElementById("go").addEventListener("click", e => {
    fetch(urlInput.value)
        .then(res => res.text())
        .then(str => {
            const doc = new DOMParser().parseFromString(str, "image/svg+xml");
            const paths = doc.getElementsByTagName("path");
            console.log(paths);
            console.log("[" + getVertices(paths[0], 300).map(({ x, y }) => `{x:${x},y:${y}}`).join() + "]");
        })
        .catch(console.error);
});



/**
 * @param {SVGPathElement} pathSVG 
 * @param {number} n Number of vertices
 */
function getVertices(pathSVG, n) {
    const len = pathSVG.getTotalLength();
    return new Array(n).fill(0).map((_, i) => pathSVG.getPointAtLength(len * i / n)).map(({ x, y }) => ({ x, y }));
}
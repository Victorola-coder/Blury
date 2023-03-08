const loadText = document.querySelector('.loading-text');
const background = document.querySelector('.bg');

let load = 0;

let int = setInterval(textLoader, 30);

function textLoader() {
    if (load > 98) {
        clearInterval(int)
    }
    load++
    loadText.innerHTML = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    background.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const scale = (num, inMin, inMax, outMin, outMax) => {
    return ((num - inMin) * (outMax - outMin) / (inMax - inMin)) + outMin
}
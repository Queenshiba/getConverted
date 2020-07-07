// set height and width
let originalHeight = 2600
let originalwidth = 1000

function findAspectRatio(height, width) {
    widthAspectRatio = (width / height).toFixed(2);
    heightAspectRatio = 1
    return heightAspectRatio + ':' + widthAspectRatio
}
console.log(findAspectRatio(originalHeight, originalwidth))

function setHeightGetWidth(heightAspectRatio, widthAspectRatio, newHeight) {
    return newHeight * widthAspectRatio
}
console.log(setHeightGetWidth(heightAspectRatio, widthAspectRatio, 3000))

function setWidthGetHeight(heightAspectRatio, widthAspectRatio, newWidth) {
    return newWidth / widthAspectRatio
}
console.log(setWidthGetHeight(heightAspectRatio, widthAspectRatio, 1900))

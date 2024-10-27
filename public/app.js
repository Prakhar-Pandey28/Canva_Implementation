// Initialize Fabric.js Canvas
const canvas = new fabric.Canvas('canvas');

// Function to add text to the canvas
window.addText = function addText() {
    const text = new fabric.IText('Edit me!', {
        left: 100,
        top: 100,
        fontFamily: 'Arial',
        fill: '#333',
        fontSize: 24
    });
    canvas.add(text);
}

// Function to add a rectangle to the canvas
window.addRect = function addRect() {
    const rect = new fabric.Rect({
        left: 150,
        top: 150,
        fill: 'red',
        width: 100,
        height: 100
    });
    canvas.add(rect);
}

// Function to add a circle to the canvas
window.addCircle = function addCircle() {
    const circle = new fabric.Circle({
        left: 250,
        top: 250,
        radius: 50,
        fill: 'blue'
    });
    canvas.add(circle);
}

// Function to add an image to the canvas
window.addImage = function addImage() {
    const imageUrl = '/proxy-image?url=https://res.cloudinary.com/demo/image/upload/sample.jpg';

    fabric.Image.fromURL(imageUrl, function(img) {
        img.set({
            left: 300,
            top: 300,
            angle: 0
        });
        canvas.add(img);
    });
}

// Function to download the canvas as an image
window.download = function download() {
    const dataURL = canvas.toDataURL({
        format: 'png',
        quality: 1
    });
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'canvas.png';
    link.click();
}

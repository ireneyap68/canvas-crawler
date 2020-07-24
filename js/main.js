console.log('hello')

document.addEventListener('DOMContentLoaded', function() {
    // DOM REFS
    let movementDisplay = document.getElementById('movement');
    // canvas
    let game = document.getElementById('game');

    // CANVAS CONFIGS
    game.setAttribute('height', 400);
    game.setAttribute('width', 800);
    let ctx = game.getContext('2d');
    

    const drawBox = (x, y, size, color) => {
        ctx.fillStyle = color;
        ctx.fillRect(x, y,size, size);

    }
    drawBox(200, 100, 200, 'hotpink');
    // DRAW A Box
    // set a fill color
    // ctx.fillStyle = '#ffffff';
    // // set a line color
    // ctx.strokeStyle = 'red';
    // // set a line width
    // ctx.lineWidth = 5;
    // // call the fillRect to draw the filled square
    // ctx.fillRect(10, 10, 100, 100);
    // // call strokerRect to draw the line retangle
    // ctx.strokeRect(10, 10, 100, 100);

})

